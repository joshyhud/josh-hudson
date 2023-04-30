import React from "react"
import PropTypes from "prop-types"
import PortableText from "../portable-text"
import { motion as m } from "framer-motion"
import Image from "../Image"

import styles from "./PageBuilderLogoGrid.module.scss"

const LogoGrid = ({ block }) => {
  const { images } = block

  return (
    <section className={styles.imageGrid}>
      <div className="grid">
        {images.map(image => (
          <div className="gridItem itemCentered large-3 medium-4 small-6">
            <a href={image.url} target="_blank">
              <Image imgRef={image} alt />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LogoGrid

LogoGrid.propTypes = {
  block: PropTypes.shape({
    images: PropTypes.array,
  }),
}
