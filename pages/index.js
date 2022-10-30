import Head from "next/head"
import TopNav from "../components/layout/TopNav"
import SideNav from "../components/layout/SideNav"
import { useContext, useEffect, useState } from "react"
import ItemContext from "../context/ItemContext"
import Item from "../components/home/Items"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

const Home = () => {
  const [sideNav, setSideNav] = useState(false)
  const [categories, items, dispatch] = useContext(ItemContext)

  useEffect(() => {
    dispatch({ type: "CATEGORY_ITEMS", payload: 1 })
    document
      .getElementById("scroll")
      .scrollTo({ behavior: "smooth", left: "0" })
  }, [])
  const [selectedTab, setSelectedTab] = useState(categories[0])

  const handleClick = (id, category) => {
    setSelectedTab(category)
    dispatch({ type: "CATEGORY_ITEMS", payload: id })
    const center = document.getElementById(category.id)
    if (category.id === 1) {
      document
        .getElementById("scroll")
        .scrollTo({ behavior: "smooth", left: "0" })
    }
    center.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    })
  }
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
      <main className="container mx-auto bg-white transition duration-200 overflow-hidden dark:bg-gray-700 dark:text-white space-y-4 shadow-2xl">
        {/* CategoriesList */}
        <div className="sticky inset-x-0 top-0 z-90 space-x-4 flex flex-row-reversee justify-around transition-all shadow-sm dark:shadow-none bg-white dark:bg-gray-700">
          <div
            className="w-full flex gap-2 flex-row flex-nowrap overflow-auto"
            id="scroll"
          >
            {categories.map((category) => (
              <div
                key={category.id}
                id={`${category.id}`}
                onClick={() => handleClick(category.id, category)}
                className={`h-10 my-4 mr-2 py-3 px-6 rounded-full bg-primaryGreen-300 dark:bg-gray-900 hover:bg-primaryGreen-500 flex flex-row-reverse justify-center gap-1 items-center cursor-pointer transition hover:text-white dark:hover:text-white active:bg-primaryGreen-500 dark:hover:bg-primaryGreen-4000 active:text-white foucs:bg-primaryGreen-400 foucs:text-white ${
                  category.id === selectedTab.id
                    ? "text-white bg-primaryGreen-500 dark:text-white dark:bg-primaryGreen-500"
                    : "text-gray-800 bg-primaryGreen-300 dark:text-primaryGreen-100"
                }`}
              >
                <span className="text-xs whitespace-nowrap font-semibold">
                  {category.title}
                </span>
                <Image
                  src={category.image}
                  alt="category icon"
                  width={24}
                  height={24}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative space-y-2 flex flex-col justify-center overflow-hidden items-center pb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.id : "empty"}
              layout={true}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col gap-2 items-center"
            >
              <Item item={items} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

export default Home
