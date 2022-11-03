import Head from "next/head"
import TopNav from "../components/layout/TopNav"
import SideNav from "../components/layout/SideNav"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import categories from "../data"
import { BsSearch, BsX } from "react-icons/bs"
import Item from "../components/home/Item"

const Home = () => {
  const [sideNav, setSideNav] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])
  // isSubmitted
  const inputRef = useRef()
  const [searchValue, setSearchValue] = useState(inputRef.current?.value || "")

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchValue(inputRef.current?.value)
    inputRef.current.blur()
    if (inputRef.current?.value.length > 0) {
      const items = categories
        .flatMap((c) => c.items)
        .filter((i) => i.title.includes(inputRef.current?.value))
      setFilteredItems(items)
      e.target.reset()
      console.log(searchValue)
    }
  }

  const close = () => {
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
      className="relative max-w-md mx-auto shadow-2xl transition duration-100 dark:bg-gray-700"
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
      </Head>
      <TopNav type={true} setSideNav={setSideNav} />
      <form
        name="myForm"
        className={`mx-2 mt-4 flex gap-2`}
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          autoComplete="off"
          type="text"
          placeholder="ابحث..."
          name="search"
          className="outline-none border border-gray-200 focus:border-primaryGreen-500 p-1.5 flex-grow rounded-md bg-white focus:bg-white"
        />
        <button
          className="py-1.5 px-4 rounded-md bg-primaryGreen-500 hover:bg-primaryGreen-600 text-white"
          title="البحث"
          type="submit"
        >
          <BsSearch className="text-xl" />
        </button>
      </form>
      <div className="my-custom-pagination"></div>
      {filteredItems.length > 0 && (
        <div className="m-4 flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl dark:text-white text-primaryGreen-600 font-bold">
              {searchValue}
            </h2>
            <BsX
              className="w-10 h-10 p-2 text-white bg-primaryGreen-500 rounded-xl hover:bg-primaryGreen-600 cursor-pointer"
              onClick={close}
            />
          </div>
          <span className="text-xs dark:text-gray-200 text-gray-600 flex items-center gap-1">
            <span className="text-lg text-primary-Green-500">
              ({filteredItems.length})
            </span>{" "}
            صنف من نتائج البحث
          </span>
        </div>
      )}
      <SideNav sideNav={sideNav} setSideNav={setSideNav} />
      <Swiper
        allowSlideNext={filteredItems.length === 0}
        allowSlidePrev={filteredItems.length === 0}
        autoHeight={true}
        pagination={pagination}
        modules={[Pagination]}
        onSlideChange={({ activeIndex }) => {
          if (activeIndex + 1 === 1) {
            document
              ?.getElementById("scroll")
              ?.scrollTo({ behavior: "smooth", left: 0 })
          }
          const activeCat = document.querySelector(
            ".swiper-pagination-bullet-active"
          )
          activeCat?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          })
        }}
      >
        {categories.map((category, i) => (
          <SwiperSlide key={i} className="h-fit">
            <div className="relative space-y-2 flex flex-col justify-center overflow-hidden items-center pb-4">
              <div className="w-full py-4 flex flex-col gap-2 items-center">
                {filteredItems.length > 0
                  ? filteredItems.map((item, index) => (
                      <Item item={item} key={index} />
                    ))
                  : category.items?.map((item, index) => (
                      <Item item={item} key={index} />
                    ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Home
