import PropTypes from "prop-types"
import styles from "./Footer.module.scss"
import Link from "next/link"

const Footer = () => (
  <footer className={styles.footer}>
    <nav className={styles.footerNav} aria-label="main">
      <Link href="/work">Work</Link>
      <Link href="/blog">Blog</Link>
      <Link href="mailto:&#106;&#111;&#115;&#104;&#104;&#117;&#100;&#115;&#111;&#110;&#100;&#101;&#118;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
        Contact
      </Link>
    </nav>
    <div className={styles.copyright}>
      Copyright {new Date().getFullYear()} Josh Hudson
    </div>
  </footer>
)

export default Footer

Footer.propTypes = {}
