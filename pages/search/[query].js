import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import SideNav from "../../components/layout/SideNav"
import TopNav from "../../components/layout/TopNav"
import data from "../../data"
import Link from "next/link"
import { BiArrowBack } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import Image from "next/image"

const Search = () => {
  const [sideNav, setSideNav] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])
  const router = useRouter()
  const {
    query: { query },
  } = router
  const items = data.flatMap((item) => item.items)
  const userItems = items.filter((item) => item.title.includes(query))
  useEffect(() => {
    setFilteredItems([])
    setFilteredItems(userItems)
  }, [query])

  return (
    <div
      className="relative max-w-md mx-auto shadow-2xl h-screen transition duration-100 dark:bg-gray-700"
      dir="rtl"
    >
      <Head>
        <title>البحث | Search</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="kayal alshbab"
          author="Fouad al-ayash"
        />
      </Head>
      <TopNav type={true} setSideNav={setSideNav} />
      <SideNav sideNav={sideNav} setSideNav={setSideNav} />
      <main className="container mx-auto bg-white transition duration-200 overflow-hidden dark:bg-gray-700 dark:text-white space-y-4">
        <div className="m-4 flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl dark:text-white text-primaryGreen-600 font-bold">
              {query}
            </h2>
            <div className="flex items-center gap-3">
              <BsSearch
                className="w-10 h-10 p-2.5 text-white bg-primaryGreen-500 rounded-xl hover:bg-primaryGreen-600 cursor-pointer"
                onClick={() => setSideNav(true)}
              />
              <BiArrowBack
                className="w-10 h-10 p-2 text-white bg-primaryGreen-500 rounded-xl hover:bg-primaryGreen-600 cursor-pointer"
                onClick={() => router.back()}
              />
            </div>
          </div>
          <span className="text-xs dark:text-gray-200 text-gray-600 flex items-center gap-1">
            <span className="text-lg text-primary-Green-500">
              {filteredItems.length}
            </span>{" "}
            من النتائج
          </span>
        </div>
        <div className="relative flex flex-col justify-center overflow-hidden items-center pb-4">
          <div className="w-full flex flex-col gap-2 items-center">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, i) => (
                <div
                  key={i}
                  className={`relative w-full sm:w-11/12 w-11/12 h-28 sm:mx-1 rounded-lg grid grid-cols-12 gap-2 bg-gray-100 cursor-pointer transition duration-200 dark:bg-gray-900 ${
                    item.selected ? "bg-primaryGreen-300" : ""
                  }`}
                >
                  <div className="relative w-full rounded-lg col-span-4 sm:col-span-3 flex items-center justify-center">
                    <Image
                      className="absolute inset-0 w-full h-full p-0.5 object-cover rounded-lg"
                      src={item.image}
                      alt="item img"
                      width={80}
                      height={80}
                      priority
                    />
                  </div>
                  <div className="w-full relative col-span-8 sm:col-span-9 space-y-1 sm:space-y-2 px-2 flex flex-col justify-between">
                    <h1 className="mt-2 text-sm text-gray-800 dark:text-white font-semibold text-primaryGreen-500">
                      {item.title}
                    </h1>
                    <p className="text-xs text-gray-800 dark:text-gray-400 overflow-hidden line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex justify-between py-2 items-center w-full">
                      {item.calories ? (
                        <span className="text-xs text-gray-800 dark:text-gray-400 ">
                          <span className="text-xs mx-0.5">سعرات حرارية :</span>
                          {item.calories}
                        </span>
                      ) : (
                        ""
                      )}

                      <span className="text-sm flex items-center font-semibold self-end mr-auto">
                        {item.price}
                        <span className="text-primaryGreen-500 text-xs font-semibold mx-0.5">
                          ريال
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-3xl font-bold text-gray-600 my-4 dark:text-gray-200">
                  لا توجد نتائج
                </h1>
                <Link href="/" className="text-sm text-primaryGreen-500">
                  إلي الصفحة الرئيسية
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Search
