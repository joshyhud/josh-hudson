import PropTypes from 'prop-types'
import PortableText from '../portable-text'

import styles from './GridItem.module.scss'

const GridItem = ({ itemTitle, text }) => (
  <div className={styles.gridItem}>
    <h4 className={styles.itemTitle}>{ itemTitle }</h4>
    <PortableText blocks={text} />
  </div>
)







export default GridItem

GridItem.propTypes = {
  itemTitle: PropTypes.string,
  text: PropTypes.array
}
