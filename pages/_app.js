import "../styles/globals.css"
import dynamic from "next/dynamic"
import { ItemProvider } from "../context/ItemContext"

function MyApp({ Component, pageProps }) {
  return (
    <ItemProvider>
      <Component {...pageProps} />
    </ItemProvider>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
})
