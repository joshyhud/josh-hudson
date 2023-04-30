import "../_global/base.scss"
import "../_global/grid.scss"
import "../_global/theme.scss"
import Header from "../components/header"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Header />
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
