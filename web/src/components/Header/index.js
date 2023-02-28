import React from "react"
import { useRouter } from "next/router"
import PropTypes from "prop-types"
import Link from "next/link"

import styles from "./Header.module.scss"

const Header = ({ navLinks }) => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h2>
          <a href="/">Josh Hudson</a>
        </h2>

        <nav className={styles.headerNav} aria-label="main">
          <Link href="/work">Work</Link>
          <Link href="/blog">Blog</Link>
          <Link href="mailto:&#106;&#111;&#115;&#104;&#104;&#117;&#100;&#115;&#111;&#110;&#100;&#101;&#118;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  navLinks: PropTypes.array,
}
