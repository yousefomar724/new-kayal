import Head from "next/head"
import TopNav from "../components/layout/TopNav"
import SideNav from "../components/layout/SideNav"
import { useState } from "react"
import Item from "../components/home/Item"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import categories from "../data"
import Items from "../components/home/Item"

const Home = () => {
  const [sideNav, setSideNav] = useState(false)
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
      {/* h-screen overflow-hidden */}
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
      <div className="my-custom-pagination"></div>
      <SideNav sideNav={sideNav} setSideNav={setSideNav} />
      <Swiper
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
            {/* overflow-scroll */}
            <div className="relative space-y-2 flex flex-col justify-center overflow-hidden items-center pb-4">
              <div className="w-full py-4 flex flex-col gap-2 items-center">
                {category.items?.map((item, index) => (
                  <Items item={item} key={index} />
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
