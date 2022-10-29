import Head from "next/head"
import TopNav from "../components/layout/TopNav"
import SideNav from "../components/layout/SideNav"
import { useContext, useEffect, useState } from "react"
import ItemContext from "../context/ItemContext"
import CategoriesList from "../components/home/category/CategoriesList"
import Item from "../components/home/Item"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

const Home = () => {
  const [sideNav, setSideNav] = useState(false)
  const [categories, items, dispatch] = useContext(ItemContext)
  useEffect(() => {
    dispatch({ type: "CATEGORY_ITEMS", payload: 1 })
  }, [])
  return (
    <div
      className="relative max-w-md mx-auto shadow-2xl h-screen transition duration-100 dark:bg-gray-700"
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
      <SideNav sideNav={sideNav} setSideNav={setSideNav} />
      <main className="container mx-auto bg-white transition duration-200 dark:bg-gray-700 dark:text-white space-y-4 shadow-2xl">
        <CategoriesList />
        <div className="relative space-y-2 flex flex-col justify-center items-center px-2 pb-4">
          <AnimatePresence>
            <Item item={items} />
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

export default Home
