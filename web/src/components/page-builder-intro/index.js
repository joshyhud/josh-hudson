import React from "react"
import PropTypes from "prop-types"
import introStyles from "./intro.module.css"
import PortableText from "../portable-text"
import Image from "../Image"

const Intro = ({ block }) => {
  const { title, text, headshotImage } = block

  return (
    <div className={introStyles.intro}>
      <div className={introStyles.introText}>
        <span>
          {title && <h2>{title}</h2>}
          <PortableText blocks={text} />
        </span>
        <div className={introStyles.introImage}>
          <Image imgRef={headshotImage} />
        </div>
      </div>
    </div>
  )
}

export default Intro

Intro.propTypes = {
  block: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.array,
  }),
}
