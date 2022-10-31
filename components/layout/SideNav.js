import React, { useEffect, useRef } from "react"
import { FiX, FiSun, FiMoon } from "react-icons/fi"
import { FaSnapchat, FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import useDarkMode from "../../hooks/useDarkMode.js"
import Image from "next/image"
import { BsSearch } from "react-icons/bs"
import { useRouter } from "next/router"

export default function SideNav({ sideNav, setSideNav }) {
  const [isDarkMode, toggleDarkMode] = useDarkMode()
  const sideNavData = [
    {
      id: 1,
      text: "سناب شات",
      icon: FaSnapchat,
      href: "https://www.snapchat.com/add/sap",
    },
    {
      id: 2,
      text: "إنستجرام",
      icon: FaInstagram,
      href: "https://instagram.com/kayalalshabab",
    },
    {
      id: 3,
      text: "واتساب",
      icon: FaWhatsapp,
      href: "https://api.whatsapp.com/send/?phone=966114333555",
    },
    { id: 4, text: "اتصل بنا", icon: FaPhoneAlt, href: "tel:0114333555" },
  ]

  const handleSearch = (e) => {
    const router = useRouter()
    e.preventDefault()
    let searchValue = e.target.search.value
    if (searchValue.length > 0) {
      router.push(`/search/${searchValue}`)
      searchValue = ""
      setSideNav(false)
    }
  }
  return (
    <div className={`relative inset-0 flex justify-center z-102`}>
      <div
        className={`fixed inset-0 bg-black dark:bg-white bg-opacity-70 dark:bg-opacity-70 ${
          sideNav ? "block" : "hidden"
        }`}
        onClick={() => setSideNav(false)}
      ></div>
      <div
        className={`fixed w-[85%] top-0 right-0 bg-white flex flex-col dark:bg-gray-700 h-full transition-all duration-500 ease-out ${
          sideNav ? "left-[15%]" : "left-[100vw]"
        }`}
      >
        <FiX
          className={`max-w-md absolute left-1.5 top-1.5 z-103 w-5 h-5 p-0.5 mx-2 rounded-full bg-gray-600 text-gray-50  hover:bg-gray-400 hover:bg-opacity-50 transform hover:rotate-180 dark:bg-gray-700 dark:text-gray-50 ${
            sideNav ? "block" : "hidden"
          }`}
          onClick={() => setSideNav(false)}
        />
        <div
          className={`bg-primaryGreen-300 w-full dark:bg-white flex items-center justify-center py-4 gap-2`}
        >
          <Image src="/logo.png" alt="side nav logo" width={80} height={80} />
        </div>
        <form className={`m-2 flex gap-2`} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="ابحث..."
            name="search"
            className="outline-primaryGreen-500 p-2 flex-grow rounded-md bg-gray-100 focus:bg-white hover:bg-gray-200"
          />
          <button
            className="py-2 px-4 rounded-md bg-primaryGreen-500 hover:bg-primaryGreen-600 text-white"
            title="البحث"
            type="submit"
          >
            <BsSearch />
          </button>
        </form>
        <div
          className={`flex flex-col w-full overflow-hidden rounded-md px-2 gap-2`}
          onClick={() => setSideNav(false)}
        >
          <p className="py-3 px-4 rounded-tr-md rounded-tl-md bg-primaryGreen-200 bg-opacity-500 text-justify text-sm text-gray-600  font-semibold">
            يحتاج البالغون إلى 2000 سعر حراري في المتوسط يومياً، وقد تختلف
            الاحتياجات الفردية من السعرات الحرارية من شخص لآخر البيانات التغذوية
            الإضافية متاحة عند الطلب .
          </p>
          {sideNavData.map((link) => (
            <a
              href={link.href}
              className="relative flex justify-between items-center py-3 px-4 rounded-sm transition bg-gray-100 hover:bg-gray-200 bg-opacity-500 shadow-sm text-gray-800 group"
              key={link.id}
            >
              <h1 className="text-xs md:text-md text-gray-600 font-semibold group-hover:text-gray-800">
                {link.text}
              </h1>
              <link.icon className="text-primaryGreen-500 w-5 h-5" />
            </a>
          ))}
          <div
            onClick={() => toggleDarkMode()}
            className="relative flex justify-between items-center py-3 px-4 rounded-br-md rounded-bl-md transition bg-gray-100 bg-opacity-500 shadow-sm text-gray-800 hover:bg-gray-200"
          >
            <h1 className="text-xs md:text-md text-gray-600 font-semibold">
              {isDarkMode ? "وضع نهاري" : "وضع ليلي"}
            </h1>
            <div
              className={`flex items-center p-1 rounded-full shadow-md ${
                isDarkMode
                  ? "bg-white text-gray-800"
                  : "bg-gray-700 text-gray-100"
              }`}
            >
              {isDarkMode ? (
                <FiSun className="text-green-7000 w-5 h-5 animate-ping" />
              ) : (
                <FiMoon className="text-gray-8000 w-5 h-5" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
