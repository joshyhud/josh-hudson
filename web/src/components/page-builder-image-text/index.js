import PropTypes from 'prop-types'
import PortableText from '../portable-text'
import Image from '../image'

import styles from './PageBuilderImageText.module.scss'

const ImageTextSection = ({ block }) => (
  <section className={styles.imageTextSection} data-layout={block.layout}>
    <div className={styles.imageTextSectionInner}>
      <div className={styles.imageTextSection__image}>
        <Image imgRef={block.image} />
      </div>
      <div className={styles.imageTextSection__text}>
        <div className={styles.imageTextSection__textInner}>
          {block.title && <h2>{block.title}</h2>}
          <PortableText blocks={block.text} />
        </div>
      </div>
    </div>
  </section>
)

export default ImageTextSection

ImageTextSection.propTypes = {
  block: PropTypes.shape({
    layout: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.object,
    image: PropTypes.string,
    alt: PropTypes.string,
  }),
}