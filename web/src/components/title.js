import PropTypes from 'prop-types'

const Title = ({ as: Element = 'h2', title, className, shouldShowDot = true }) => {
  const noDotAfter = ['?', '.', '!', ':', ';']
  const restOfTitle =  title.substr(0, title.length - 1)
  const lastCharacter = title.substr(title.length - 1)
  const showDot = !noDotAfter.includes(lastCharacter) && !!lastCharacter

  return (
    <Element className={className}>
      {showDot || !shouldShowDot ? title : restOfTitle}
      {shouldShowDot && <span>{showDot ? '.' : lastCharacter}</span>}
    </Element>
  )
}

export default Title

Title.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3']),
  title: PropTypes.string,
  className: PropTypes.string,
  shouldShowDot: PropTypes.bool
}