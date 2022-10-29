import React, { useState, useContext, useEffect } from "react"
import Link from "next/link"
import { ItemContext } from "../../context/ItemContext"

function Search() {
  const [dispatch] = useContext(ItemContext)
  const [search, setSearch] = useState([])
  const [searchText, setSearchText] = useState(false)

  useEffect(() => {
    dispatch({ type: "SEARCH_ITEMS", payload: searchText })
  }, [searchText])

  return (
    <div className="z-100 relative flex flex-col justify-center items-center">
      <div
        className="z-101 w-8/122 w-11/12 h-10 px-1 bg-gray-100 rounded-full border-2 grid gap-0 grid-cols-12 place-content-center active:bg-white dark:active:border-gray-600 dark:foucs:border-gray-600 dark:hover:border-gray-600"
        onClick={() => setSearch(true)}
      >
        <div className="col-span-10 relative px-1 flex justify-center items-center">
          <input
            onInput={(e) => setSearchText(e.target.value)}
            type="text"
            className="w-full h-full bg-gray-5000 bg-transparent text-gray-700 rounded-full outline-none px-2"
            placeholder="البحث عن الأصناف"
          />
        </div>
        <div className="col-span-2 flex justify-center items-center text-gray-500">
          <svg
            className=""
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.65925 19.3102C11.8044 19.3103 13.8882 18.5946 15.5806 17.2764L21.9653 23.6612C22.4423 24.1218 23.2023 24.1086 23.663 23.6316C24.1123 23.1664 24.1123 22.4288 23.663 21.9636L17.2782 15.5788C20.5491 11.3682 19.7874 5.30335 15.5769 2.03244C11.3663 -1.23846 5.30149 -0.476784 2.03058 3.73376C-1.24033 7.9443 -0.478646 14.0092 3.73189 17.2801C5.42702 18.597 7.51269 19.3113 9.65925 19.3102ZM4.52915 4.52732C7.36245 1.69396 11.9561 1.69391 14.7895 4.52721C17.6229 7.36052 17.6229 11.9542 14.7896 14.7876C11.9563 17.6209 7.36261 17.621 4.52925 14.7877C4.5292 14.7876 4.5292 14.7876 4.52915 14.7876C1.69584 11.9749 1.67915 7.39796 4.49181 4.56465C4.50424 4.55217 4.51667 4.53974 4.52915 4.52732Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div
        className={`z-101 overflow-hidden overflow-y-scroll absolute top-11 w-8/122 w-11/12 h-166 divide-y divide-dashed divide-gray-600 rounded-md bg-gray-200 dark:divide-gray-100 dark:bg-gray-700  ${
          search ? "block" : "hidden"
        }`}
      >
        <Link
          href="/single-item/1"
          className="py-4 px-2 flex justify-between items-center underline hover:bg-primaryGreen-300 active:bg-primaryGreen-300 dark:hover:bg-gray-800 dark:active:bg-gray-800"
          passHref
        >
          <h1 className="text-sm text-gray-800 dark:text-white font-semibold">
            أمريكانو
          </h1>
          <div className="mxx-2 flex items-center">
            <span className="text-sm font-semibold">
              22.55{" "}
              <span className="text-primaryGreen-400 text-xs font-semibold mx-0.5">
                ريال
              </span>
            </span>
          </div>
        </Link>
        <Link
          href="/single-item/1"
          className="py-4 px-2 flex justify-between items-center underline hover:bg-primaryGreen-300 active:bg-primaryGreen-300 dark:hover:bg-gray-800 dark:active:bg-gray-800"
          passHref
        >
          <h1 className="text-sm text-gray-800 dark:text-white font-semibold">
            أمريكانو
          </h1>
          <div className="mxx-2 flex items-center">
            <span className="text-sm font-semibold">
              22.55{" "}
              <span className="text-primaryGreen-400 text-xs font-semibold mx-0.5">
                ريال
              </span>
            </span>
          </div>
        </Link>
        <Link
          href="/single-item/1"
          className="py-4 px-2 flex justify-between items-center underline hover:bg-primaryGreen-300 active:bg-primaryGreen-300 dark:hover:bg-gray-800 dark:active:bg-gray-800"
          passHref
        >
          <h1 className="text-sm text-gray-800 dark:text-white font-semibold">
            أمريكانو
          </h1>
          <div className="mxx-2 flex items-center">
            <span className="text-sm font-semibold">
              22.55{" "}
              <span className="text-primaryGreen-400 text-xs font-semibold mx-0.5">
                ريال
              </span>
            </span>
          </div>
        </Link>
      </div>
      <div
        className={`z-100 fixed inset-0 h-full bg-gray-600 bg-opacity-50 dark:bg-gray-200 dark:bg-opacity-50 transition ${
          search ? "block" : "hidden"
        }`}
        onClick={() => setSearch(false)}
      ></div>
    </div>
  )
}

export default Search
