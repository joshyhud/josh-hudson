import React from "react";
import PropTypes from 'prop-types'
// Import components
import Text from '../page-builder-text'

const PageBuilder = ({ blocks }) => {
  const components = {
    "pageBuilderText": Text,
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