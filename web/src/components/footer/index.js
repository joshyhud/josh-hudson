import PropTypes from "prop-types"
import styles from "./Footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.copyright}>
      Copyright {new Date().getFullYear()} Josh Hudson
    </div>
  </footer>
)

export default Footer

Footer.propTypes = {}
