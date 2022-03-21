const defaults = { nonTextBehavior: 'remove' }

const blocksToText = (blocks, opts = {}) => {
  const options = { ...defaults, ...opts }
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove'
          ? ''
          : `[${block._type} block]`
      }

      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

export const returnString = content => {
  const string = blocksToText(content)
  return string.length > 35 ? `${string.substring(0, 35)} ...` : string
}