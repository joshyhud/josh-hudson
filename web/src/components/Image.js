import React from "react"
import PropTypes from "prop-types"
import { urlFor } from '../lib/sanity'
import ImageSrcset from '../lib/Image'

const Image = ({ imgRef }) => {
  if (imgRef.asset?.metadata) return <ImageSrcset source={ imgRef } />

  return <img src={urlFor(imgRef)} />
}

export default Image

Image.propTypes = {
  imgRef: PropTypes.object
}