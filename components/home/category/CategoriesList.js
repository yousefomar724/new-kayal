import React, { useContext } from "react"
import Category from "./Category"
import { ItemContext } from "../../../context/ItemContext"

export default function CategoriesList() {
  const [categories] = useContext(ItemContext)
  return (
    <div className="sticky inset-x-0 top-0 z-90 space-x-4 flex flex-row-reversee justify-around px-2 transition-all shadow-sm dark:shadow-none bg-white dark:bg-gray-700">
      <div className="w-full flex flex-row flex-nowrap scrollbar-hide whitespace-nowrap overflow-auto">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
