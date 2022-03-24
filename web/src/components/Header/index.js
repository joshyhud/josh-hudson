import React from "react"
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from './Link'

import styles from './Header.module.scss'

const Header = ({ navLinks }) => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href="/">
          <img className={styles.headerLogo} src="./images/logo.png" width="40px" height="32px" alt="Tilt logo" />
        </a>
        {navLinks && <nav className={styles.headerNav} aria-label="main">
          <ul>
            {navLinks.map(link => <li key={link._key}>
              <Link {...link} active={router.asPath === link.url} onClick={ResetMenu} />
            </li>)}
          </ul>
        </nav>}
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  navLinks: PropTypes.array
}