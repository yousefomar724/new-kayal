import React from "react"

function Empty() {
  return (
    <div className="relative transform container mtt-4 mx-auto bg-white space-y-8 pb-24 pt-12 transition duration-200 dark:bg-gray-700 dark:text-white">
      <div className=" w-full h-3/5 flex flex-col justify-center items-center">
        <h2 className="text-md ">لا يوجد منتجات</h2>
        <svg className="w-2/6 mt-3 mb-6" viewBox="0 0 24 24" version="1.1">
          <g transform="translate(0 -1028.4)">
            <path d="m21 1034.4 2 10h-2v-10z" fill="#f39c12" />
            <path d="m3 1034.4-2 10h2v-10z" fill="#f39c12" />
            <path d="m3 1037.4-2 14h2 18 2l-2-14h-18z" fill="#e67e22" />
            <path
              d="m1 1044.4v7h22v-7h-8.188c-0.415 1.1-1.511 2-2.812 2s-2.397-0.9-2.8125-2h-8.1875z"
              fill="#f1c40f"
            />
            <rect height="3" width="18" y="1034.4" x="3" fill="#f39c12" />
            <rect height="1" width="22" y="1051.4" x="1" fill="#f39c12" />
          </g>
        </svg>
        <a
          href="/"
          className="w-4/6 px-4 py-2.5 bg-primaryGreen-200 bg-opacity-90 rounded shadow-sm dark:bg-opacity-60"
        >
          <h1 className="text-xs md:text-sm text-green-900 text-opacity-70 font-semibold w-full text-center dark:text-gray-700">
            متابعة التسوق
          </h1>
        </a>
      </div>
    </div>
  )
}

export default Empty
