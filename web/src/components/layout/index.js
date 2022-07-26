import PropTypes from 'prop-types'
import PreviewBanner from '../preview-banner'

const Layout = ({ preview, children }) => (
  <>
    {children}
    {preview && <PreviewBanner />}
  </>
)

export default Layout

Layout.propTypes = {
  preview: PropTypes.bool,
  children: PropTypes.array
}