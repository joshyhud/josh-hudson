import PropTypes from 'prop-types'

import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className="grid">
      <div className="gridItem">
        &copy;We Are Tilt {new Date().getFullYear()}
      </div>
    </div>
  </footer>
)

export default Footer

Footer.propTypes = {
}