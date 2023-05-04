import React from "react"
import PropTypes from "prop-types"
import PortableText from "../portable-text"

import styles from "./PageBuilderText.module.scss"

const Text = ({ block }) => {
  const { title, text } = block

  return (
    <section className={styles.text}>
      <div className="grid">
        <div className="gridItem">
          {title && <h2>{title}</h2>}
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
    text: PropTypes.array,
  }),
}
