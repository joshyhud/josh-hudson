import React from "react"
import { useRouter } from "next/router"
import PropTypes from "prop-types"
import Link from "./Link"

import styles from "./Header.module.scss"

const Header = ({ navLinks }) => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h2>
          <a href="/">Josh Hudson</a>
        </h2>
        {navLinks && (
          <nav className={styles.headerNav} aria-label="main">
            <ul>
              {navLinks.map(link => (
                <li key={link._key}>
                  <Link {...link} active={router.asPath === link.url} />
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  navLinks: PropTypes.array,
}
