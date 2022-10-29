import "../styles/globals.css"
import { ItemProvider } from "../context/ItemContext"

function MyApp({ Component, pageProps }) {
  return (
    <ItemProvider>
      <Component {...pageProps} />
    </ItemProvider>
  )
}

export default MyApp
