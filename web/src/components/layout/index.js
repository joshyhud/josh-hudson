import PropTypes from "prop-types"
import PreviewBanner from "../preview-banner"

const Layout = ({ preview, children }) => {
  return (
    <div>
      {children}
      {preview && <PreviewBanner />}
    </div>
  )
}

export default Layout

Layout.propTypes = {
  preview: PropTypes.bool,
  children: PropTypes.array,
}
