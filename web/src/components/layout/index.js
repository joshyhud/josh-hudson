import PropTypes from "prop-types"
import PreviewBanner from "../preview-banner"

import { motion as m } from "framer-motion"

const Layout = ({ preview, children }) => (
  <m.div
    initial={{ x: "100%" }}
    animate={{ x: "0%" }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    exit={{ opacity: 1 }}
  >
    {children}
    {preview && <PreviewBanner />}
  </m.div>
)

export default Layout

Layout.propTypes = {
  preview: PropTypes.bool,
  children: PropTypes.array,
}
