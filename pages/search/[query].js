import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"
import Items from "../../components/home/Items"
import SideNav from "../../components/layout/SideNav"
import TopNav from "../../components/layout/TopNav"
import data from "../../data"
import Link from "next/link"
import { BiArrowBack } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"

const Search = () => {
  const [sideNav, setSideNav] = useState(false)
  const router = useRouter()
  const {
    query: { query },
  } = router
  const items = data.flatMap((item) => item.items)
  const filteredItems = items.filter((item) => item.title.includes(query))

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
            {filteredItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-3xl font-bold text-gray-600 my-4 dark:text-gray-200">
                  لا توجد نتائج
                </h1>
                <Link href="/" className="text-sm text-primaryGreen-500">
                  إلي الصفحة الرئيسية
                </Link>
              </div>
            ) : (
              <Items item={filteredItems} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Search
