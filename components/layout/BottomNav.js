import React from "react"
import Link from "next/link"

function BottomNav() {
  return (
    <div className="fixed bottom-2 right-0 left-0 flex justify-center items-center">
      <Link
        href="/cart"
        className="max-w-md w-11/12 px-2 py-2.5 transition duration-200 bg-primaryGreen-400 dark:bg-gray-6000 bg-opacity-900 text-white dark:text-gray-900 rounded-md flex justify-between"
        passHref
      >
        <div className="relative w-12 px-1.5">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            className="svg-primary"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7329 21.68C21.8273 21.5791 21.8998 21.4597 21.9457 21.3295C21.9917 21.1992 22.0101 21.0608 21.9999 20.923L20.9999 7.92299C20.9805 7.67134 20.8666 7.43634 20.6811 7.26515C20.4957 7.09396 20.2523 6.99924 19.9999 6.99999H16.9999C16.9999 5.67391 16.4731 4.40214 15.5355 3.46446C14.5978 2.52677 13.326 1.99999 11.9999 1.99999C10.6738 1.99999 9.40207 2.52677 8.46438 3.46446C7.5267 4.40214 6.99992 5.67391 6.99992 6.99999H3.99992C3.74752 6.99924 3.50417 7.09396 3.3187 7.26515C3.13323 7.43634 3.01935 7.67134 2.99992 7.92299L1.99992 20.923C1.98929 21.0606 2.00727 21.199 2.05275 21.3294C2.09822 21.4597 2.17019 21.5792 2.26413 21.6804C2.35807 21.7816 2.47194 21.8622 2.59858 21.9172C2.72521 21.9722 2.86186 22.0004 2.99992 22H20.9999C21.1375 22 21.2737 21.9715 21.3998 21.9165C21.5259 21.8614 21.6393 21.7809 21.7329 21.68ZM11.9999 3.99999C12.7956 3.99999 13.5586 4.31606 14.1212 4.87867C14.6838 5.44128 14.9999 6.20434 14.9999 6.99999H8.99992C8.99992 6.20434 9.31599 5.44128 9.8786 4.87867C10.4412 4.31606 11.2043 3.99999 11.9999 3.99999ZM4.07992 20L4.92592 8.99999H6.99992V11C6.99992 11.2652 7.10527 11.5196 7.29281 11.7071C7.48035 11.8946 7.7347 12 7.99992 12C8.26513 12 8.51949 11.8946 8.70702 11.7071C8.89456 11.5196 8.99992 11.2652 8.99992 11V8.99999H14.9999V11C14.9999 11.2652 15.1053 11.5196 15.2928 11.7071C15.4803 11.8946 15.7347 12 15.9999 12C16.2651 12 16.5195 11.8946 16.707 11.7071C16.8946 11.5196 16.9999 11.2652 16.9999 11V8.99999H19.0739L19.9199 20H4.07992Z"
              fill="currentColor"
            />
          </svg>
          <span className="z-10 absolute -top-1.5 -right-1 shadow-xl p-0 w-5 h-5 leading-none inline-flex justify-center items-center rounded-full bg-white bg-opacity-800 text-center text-xs  group-hover:bg-opacity-100">
            <span className="text-gray-800 text-xxs font-bold">66</span>
          </span>
        </div>
        <h1 className="text-sm font-semibold">عرض السلة</h1>
        <div className="space-xx-2 text-sm flex flex-end">
          <span className="font-semibold mx-1">22.9</span>
          <span className="text-xs dark:text-gray-200">ريال</span>
        </div>
      </Link>
    </div>
  )
}

export default BottomNav
