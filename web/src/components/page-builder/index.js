import React from "react";
import PropTypes from 'prop-types'
// Import components
import Text from '../page-builder-text'
import ImageText from '../page-builder-image-text'
import Grid from '../page-builder-grid'
import CTA from '../page-builder-cta'

const PageBuilder = ({ blocks }) => {
  const components = {
    "pageBuilderText": Text,
    "pageBuilderImageText": ImageText,
    "pageBuilderGrid": Grid,
    "pageBuilderCta": CTA
  }

  if (!blocks) return null

  return blocks.map(block => {
    if (components[block._type]) {
      return React.createElement(components[block._type], {
        key: block._key,
        block
      })
    }
  })
}

export default PageBuilder

PageBuilder.propTypes = {
  blocks: PropTypes.array
}