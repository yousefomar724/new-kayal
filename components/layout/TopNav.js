import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

export default function TopNav({ type, setSideNav }) {
  const router = useRouter()
  return (
    <header
      className={`z-30 rounded-bb-xl transition duration-200 dark:bg-gray-700 dark:bg-opacity-300 ${
        type ? "relative" : "absolutee left-0 right-0  bg-opacity-0"
      }`}
    >
      <nav className="z-30 relative App-header absolutee left-0 right-0 text-white pt-1 pr-1 rounded-bb-xl">
        <div
          className={`z-50 w-full max-w-md mx-auto h-16 top-auto bg-white rounded-t-4xl shadow-lg grid gap-2 grid-cols-12  place-content-center ${
            type && "rounded-bb-xl dark:bg-gray-700 bg-opacity-50"
          } ${router.pathname !== "/" && "dark:bg-opacity-50"}`}
        >
          <div className="col-span-9 grid grid-cols-12 justify-start items-center">
            <div
              className="col-span-10 pr-5 text-md font-semibold text-gray-500 dark:text-white overflow-y-hidden flex items-center cursor-pointer gap-2"
              onClick={() => router.push("/")}
            >
              <Image
                src="/logo.png"
                width={56}
                height={57}
                alt="main logo"
                className="p-1 border-2 border-primaryGreen-500 bg-white rounded-xl"
              />
              <h1 className="font-extrabold flex gap-1 flex-col text-md text-primaryGreen-500 dark:text-primaryGreen-200">
                <span className="inline-block transform translate-y-1 mx-0.5 text-brown-400">
                  خيال الشباب
                </span>
                <span className="font-extrabold text-md text-primaryGreen-500 dark:text-primaryGreen-200">
                  {" "}
                  kayal alshbab
                </span>
              </h1>
            </div>
          </div>
          <div className="col-span-3 flex justify-center items-center col-startt-12">
            <div
              className="col-span-2 w-10 h-10 p-2 mxx-2 rounded-full text-black transition duration-200 dark:text-gray-100 hover:bg-gray-400 hover:bg-opacity-50 flex justify-center items-center cursor-pointer"
              onClick={() => setSideNav(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="2"
                  width="20"
                  height="2.5"
                  rx="1.5"
                  fill="currentColor"
                />
                <rect
                  y="18"
                  width="20"
                  height="2.5"
                  rx="1.5"
                  fill="currentColor"
                />
                <rect
                  x="4"
                  y="10"
                  width="20"
                  height="2.5"
                  rx="1.5"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
