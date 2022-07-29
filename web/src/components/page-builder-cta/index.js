import PropTypes from 'prop-types'
import PortableText from '../portable-text'
import { urlFor } from '../../lib/sanity'

import styles from './PageBuilderCta.module.scss'

const PageBuilderCta = ({ block }) => (
  <section className={styles.cta} data-theme={block.theme ?? 'light'}>
    {block.image && <div className={styles.ctaBackground} style={{ backgroundImage: `url(${urlFor(block.image).format('webp')})` }}></div>}
    <div className={styles.ctaInner}>
      <div className="grid">
        <div className="gridItem large-8 large-offset-2 align-center">
          <div className={styles.ctaInner}>
            <PortableText className={styles.ctaText} blocks={block.text} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default PageBuilderCta

PageBuilderCta.propTypes = {
  block: PropTypes.shape({
    theme: PropTypes.string,
    text: PropTypes.array,
    image: PropTypes.object
  })
}