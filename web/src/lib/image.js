import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { urlFor } from "./sanity"

const sizes = [32, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1500]

const getDimensions = (source, setWidth, setHeight) => {
  if (setWidth && setHeight) {
    const ratio = setWidth / setHeight
    return { width: setWidth, height: setHeight, aspectRatio: ratio }
  }

  const { asset, crop } = source
  const { metadata } = asset

  // Get dimensions from groq resolved image
  const { aspectRatio, width, height } = metadata.dimensions

  // Compensate for dimensional changes if image was cropped in Sanity
  if (crop && Object.values(crop).some(n => n > 0)) {
    const cropWidth = width - crop.left * width - crop.right * width
    const cropHeight = height - crop.top * height - crop.bottom * height
    const cropRatio = cropWidth / cropHeight

    return { width: cropWidth, height: cropHeight, aspectRatio: cropRatio }
  }

  return { width, height, aspectRatio }
}

const BuildSrc = (source, width, max = 800) =>
  urlFor(source).width(Math.min(width, max)).quality(75).fit("max").url()

const BuildSrcSet = (source, max = 800, dimensions) =>
  Object.values(
    sizes.reduce((accumulator, currentValue) => {
      const width = Math.min(currentValue, max)
      const height = Math.round(width / dimensions.aspectRatio)
      const src = urlFor(source)
        .width(width)
        .height(height)
        .quality(75)
        .fit("max")
        .auto("format")
        .url()

      if (!accumulator.currentValue) {
        accumulator[currentValue] = `${src} ${currentValue}w`
      }

      return accumulator
    }, {})
  )

const ImageWithSrcset = props => {
  const {
    source,
    width,
    height,
    maxWidth,
    preload = false,
    loading = "lazy",
    style = {},
    ...rest
  } = props
  const dimensions = getDimensions(source, width, height)
  const src = BuildSrc(source, dimensions.width, maxWidth, dimensions)
  const srcset = BuildSrcSet(source, maxWidth, dimensions)
  const objectPosition = source.hotspot
    ? [source.hotspot.x, source.hotspot.y]
        .map(value => `${(value * 100).toFixed(2)}%`)
        .join(" ")
    : "50% 50%"
  const styles = {
    ...style,
    objectPosition,
  }

  // Short circuit for SVG images
  if (source.asset.extension === "svg") {
    return (
      <img
        src={urlFor(source).url()}
        width={width || dimensions.width}
        height={height || dimensions.height}
        alt={source.alt}
        loading={loading}
        style={styles}
        {...rest}
      />
    )
  }

  return (
    <>
      {preload && (
        <Head>
          <link
            rel="preload"
            as="image"
            href={src}
            imagesrcset={srcset}
            type={source.asset.mimeType}
            key={src}
            legacyBehavior
          />
        </Head>
      )}
      <img
        src={src}
        srcSet={srcset}
        width={dimensions.width}
        height={dimensions.height}
        alt={source.alt}
        style={styles}
        loading={loading}
        {...rest}
      />
    </>
  )
}

export default ImageWithSrcset

ImageWithSrcset.propTypes = {
  source: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  maxWidth: PropTypes.number,
  preload: PropTypes.bool,
  loading: PropTypes.string,
  style: PropTypes.object,
}
