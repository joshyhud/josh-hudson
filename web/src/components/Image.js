import React from "react"
import PropTypes from "prop-types"
import { urlFor } from "../lib/sanity"
import ImageSrcset from "../lib/image"

const Image = ({ imgRef }) => {
  if (imgRef.asset?.metadata)
    return <ImageSrcset source={imgRef} alt={imgRef.attribution} />

  return <img src={urlFor(imgRef)} alt={imgRef.attribution} />
}

export default Image

Image.propTypes = {
  imgRef: PropTypes.object,
}
