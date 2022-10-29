import { useState, useEffect } from "react"

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark"
      : false
  )

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const root = window.document.documentElement

    const prevTheme = isDarkMode ? "light" : "dark"
    root.classList.remove(prevTheme)

    const nextTheme = isDarkMode ? "dark" : "light"
    root.classList.add(nextTheme)

    localStorage.setItem("theme", nextTheme)

    const metaTheme = document.querySelector('meta[name="theme-color"]')

    isDarkMode
      ? (metaTheme.content = "#374151")
      : (metaTheme.content = "#ffffff")
  }, [isDarkMode])

  return [isDarkMode, toggleDarkMode]
}
