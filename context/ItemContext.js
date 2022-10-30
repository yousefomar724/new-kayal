import React, { createContext, useReducer } from "react"
import itemsData from "../data"

export const ItemContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_ITEMS":
      let data = itemsData.map((category) => {
        if (category.id !== action.payload) category.selected = false
        else category.selected = true

        return category
      })

      let items = data.find((category) => category.id === action.payload)?.items

      return items

    default:
      return itemsData.find((category) => category.id === action.payload)?.items
  }
}

export const ItemProvider = (props) => {
  const categories = itemsData.map((category) => ({
    id: category.id,
    title: category.title,
    image: category.image,
    selected: category.id === 1 ? true : false,
  }))

  const [items, dispatch] = useReducer(reducer, itemsData[0].items)

  return (
    <ItemContext.Provider value={[categories, items, dispatch]}>
      {props.children}
    </ItemContext.Provider>
  )
}

export default ItemContext
