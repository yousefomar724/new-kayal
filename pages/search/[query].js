import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"
import Items from "../../components/home/Items"
import SideNav from "../../components/layout/SideNav"
import TopNav from "../../components/layout/TopNav"
import data from "../../data"

const Search = () => {
  const [sideNav, setSideNav] = useState(false)
  const {
    query: { query },
  } = useRouter()
  const items = data.flatMap((item) => item.items)
  const filteredItems = items.filter((item) => item.title.includes(query))

  return (
    <div
      className="relative max-w-md mx-auto shadow-2xl h-screen transition duration-100 dark:bg-gray-700"
      dir="rtl"
    >
      <Head>
        <title>ابحث | Search</title>
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
        <div className="m-4 flex flex-col gap-4">
          <h2 className="text-2xl text-primaryGreen-600 font-bold">{query}</h2>
          <span className="text-xs text-gray-600 flex items-center gap-1">
            <span className="text-lg text-primary-Green-500">
              {filteredItems.length}
            </span>{" "}
            من النتائج
          </span>
        </div>
        <div className="relative flex flex-col justify-center overflow-hidden items-center pb-4">
          <div className="w-full flex flex-col gap-2 items-center">
            {filteredItems.length === 0 ? (
              <h1 className="text-center text-3xl font-bold text-gray-600 my-4">
                لا توجد نتائج
              </h1>
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
