import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { LinkTest } from '../../helpers/link'

import styles from './Header.module.scss'

const Link = ({ url, label, active, onClick }) => {
  const internal = LinkTest(url)
  const target = internal ? '_self' : '_blank'
  const rel = internal ? 'noopener' : 'noreferrer noopener nofollow'

  if (internal) return (
    <NextLink href={url}>
      <a className={active ? styles.isActive : ''} onClick={onClick}>{label}</a>
    </NextLink>
  )

  return <a className={active ? styles.isActive : ''} href={url} target={target} rel={rel} onClick={onClick}>{label}</a>
}

Link.propTypes = {
  link: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.urla
  })
}

export default Link