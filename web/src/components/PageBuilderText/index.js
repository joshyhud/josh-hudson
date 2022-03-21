import React from "react"
import PropTypes from 'prop-types'
import PortableText from "../PortableText"

import styles from './PageBuilderText.module.scss'

const Text = ({ block }) => {
  const { title, text } = block

  return (
    <section className={styles.text}>
      <div className="grid">
        <div className="gridItem">
          <PortableText blocks={text} />
        </div>
      </div>
    </section>
  )
}

export default Text

Text.propTypes = {
  block: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.array
  })
}