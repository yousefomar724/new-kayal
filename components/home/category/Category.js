import Image from "next/image"
import React, { useContext } from "react"
import { ItemContext } from "../../../context/ItemContext"

export default function Category({ category }) {
  const [categories, items, dispatch, Catedispatch] = useContext(ItemContext)

  const handleClick = (id) => {
    dispatch({ type: "CATEGORY_ITEMS", payload: id })
    Catedispatch({ type: "CATEGORY_SELECTION", payload: id })
    var center = document.getElementById(category.id)
    if (!category.selected) {
      center.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      })
    }
  }

  return (
    <div
      id={`${category.id}`}
      onClick={() => handleClick(category.id)}
      className={`rtl h-10 my-4 mx-2 py-4 px-6 rounded-full bg-primaryGreen-300 dark:bg-gray-900 hover:bg-primaryGreen-500 flex flex-row-reverse justify-center gap-2 items-center cursor-pointer transition hover:text-white dark:hover:text-white active:bg-primaryGreen-500 dark:hover:bg-primaryGreen-4000 active:text-white foucs:bg-primaryGreen-400 foucs:text-white ${
        category.selected
          ? "text-white bg-primaryGreen-500 dark:text-white dark:bg-primaryGreen-500"
          : "text-gray-800 bg-primaryGreen-300 dark:text-primaryGreen-100"
      }`}
    >
      <span className="text-xs font-semibold ">{category.title}</span>
      <Image
        src={category.image}
        alt="category icon"
        width={28}
        height={28}
        priority
      />
    </div>
  )
}
