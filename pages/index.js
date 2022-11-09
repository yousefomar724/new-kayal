import Head from "next/head"
import TopNav from "../components/TopNav"
import SideNav from "../components/SideNav"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import categories from "../data"
import { BsSearch, BsX } from "react-icons/bs"
import Item from "../components/Item"

const Home = () => {
  const inputRef = useRef()

  const [sideNav, setSideNav] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [searchValue, setSearchValue] = useState(inputRef.current?.value || "")

  const handleSearch = (e) => {
    e.preventDefault()
    inputRef.current.blur()
    if (inputRef.current?.value.length > 0) {
      setIsSubmitted(true)
      setSearchValue(inputRef.current?.value)
      const items = categories
        .flatMap((c) => c.items)
        .filter((i) => i.title.includes(inputRef.current?.value))

      setFilteredItems(items)
      e.target.reset()
    }
  }

  const close = () => {
    setIsSubmitted(false)
    setFilteredItems([])
  }

  const pagination = {
    el: ".my-custom-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return `
        <span class="${className}">
          <span className="text-xs whitespace-nowrap font-semibold">
            ${categories[index]?.title}
          </span>
          <Image
            src=${categories[index]?.image}
            alt=""
            width="24"
            height="24"
            priority
            className='z-10'
          />
        </span>
      `
    },
  }

  return (
    <div
      className="relative min-h-screen max-w-md mx-auto shadow-2xl transition duration-100 dark:bg-gray-700"
      dir="rtl"
    >
      <Head>
        <title>خيال الشباب | Kayal alshabab</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="kayal alshbab"
          author="Fouad al-ayash"
        />
        <meta name="keywords" content="coffee" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="خيال الشباب | Kayal alshabab" />
        <meta property="og:url" content="https://new-kayal.vercel.app" />
        <meta property="og:description" content="kayal alshbab" />
        <meta
          property="og:image"
          content="https://new-kayal.vercel.app/logo/items.png"
        />
      </Head>
      <TopNav setSideNav={setSideNav} />
      <form
        name="myForm"
        className="mx-4 mt-4 flex gap-2"
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          autoComplete="off"
          type="text"
          placeholder="ابحث..."
          name="search"
          className="outline-none border border-gray-200 focus:border-primaryGreen-500 p-1.5 flex-grow rounded-md bg-white focus:bg-white dark:bg-gray-700 dark:placeholder:text-white dark:text-white"
        />
        {isSubmitted ? (
          <button
            className="w-10 h-10 flex items-center justify-center rounded-md text-white bg-primaryGreen-500 hover:bg-primaryGreen-600 dark:bg-gray-100 dark:text-gray-900"
            onClick={close}
            title="انهاء البحث"
          >
            <BsX className="text-2xl" />
          </button>
        ) : (
          <button
            className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-primaryGreen-600 text-gray-900 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-100"
            title="البحث"
            type="submit"
          >
            <BsSearch />
          </button>
        )}
      </form>
      <div className="my-custom-pagination"></div>
      {isSubmitted && (
        <div className="m-4 bg-gray-100 px-3 py-2 rounded-md dark:bg-primaryGreen-500">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl dark:text-white text-primaryGreen-600 dark:text-white font-bold">
              {searchValue}
            </h2>
            <span className="text-xs dark:text-gray-200 text-gray-600 flex items-center gap-1 dark:text-gray-200">
              <span className="text-lg text-primaryGreen-500 dark:text-white">
                ({filteredItems.length})
              </span>{" "}
              صنف من نتائج البحث
            </span>
          </div>
        </div>
      )}
      <SideNav sideNav={sideNav} setSideNav={setSideNav} />
      <Swiper
        loop={true}
        // allowSlideNext={!isSubmitted}
        // allowSlidePrev={!isSubmitted}
        autoHeight={true}
        pagination={pagination}
        modules={[Pagination]}
        onSlideChange={() => {
          const activeCat = document.querySelector(
            ".swiper-pagination-bullet-active"
          )
          activeCat?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          })
          close()
        }}
      >
        {categories.map((category, i) => (
          <SwiperSlide key={i} className="h-fit">
            <div className="relative space-y-2 flex flex-col justify-center overflow-hidden items-center pb-4">
              <div className="w-full p-4 flex flex-col gap-2 items-center">
                {isSubmitted ? (
                  filteredItems.length === 0 ? (
                    <p className="text-center w-full text-3xl font-bold text-gray-600 mt-20 dark:text-gray-200">
                      لا يوجد نتائج
                    </p>
                  ) : (
                    filteredItems.map((item, index) => (
                      <Item item={item} key={index} />
                    ))
                  )
                ) : (
                  category.items?.map((item, index) => (
                    <Item item={item} key={index} />
                  ))
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Home
