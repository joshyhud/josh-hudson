import PropTypes from 'prop-types'
import Title from '../title'
import PortableText from '../portable-text'
import GridItem from '../grid-item'

import styles from './PageBuilderGrid.module.scss'

const PageBuilderGrid = ({ block }) => {
  const { intro, gridItems } = block

  return (
    <section className={styles.grid}>
      <div className="grid">
        <div className="gridItem">
          <Title title={block.title} />
          <div className={styles.gridIntro}>
            <PortableText blocks={intro} />
          </div>
        </div>
      </div>
      <div className="grid gridStretch">
        {gridItems.map(item => <div key={item._key} className="gridItem medium-6 large-4"><GridItem {...item} /></div>)}
      </div>
    </section>
  )
}

export default PageBuilderGrid

PageBuilderGrid.propTypes = {
  block: PropTypes.shape({
    intro: PropTypes.array,
    gridItems: PropTypes.array
  })
}