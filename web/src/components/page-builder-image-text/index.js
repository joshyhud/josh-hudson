import React from 'react'
import PropTypes from 'prop-types'

import styles from './PageBuilderImageText.module.scss'

const ImageTextSection = ({ section }) => (
  <section className={styles.imageTextSection} data-layout={section.layout}>
    <div className={styles.imageTextSection__image}>
      <img src="https://via.placeholder.com/500" alt="placeholder image" />
    </div>
    <div className={styles.imageTextSection__text}>
      <div className={styles.imageTextSection__textInner}>
        <h2>Some title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non tellus pretium, egestas ligula ut, dignissim ante. Curabitur purus dolor, varius non augue ac, accumsan vulputate eros. Nulla nisl enim, eleifend in sem a, hendrerit lobortis diam. Etiam id nisl molestie, rhoncus sem at, rutrum nulla. Nunc faucibus ante sed quam consectetur consequat sit amet a est. Pellentesque lorem nunc, sollicitudin sit amet pharetra vitae, laoreet viverra quam. Nam ultricies dolor lacus. Aliquam tempus justo nec velit ullamcorper semper. Ut scelerisque risus velit, non dignissim tellus dignissim et.</p>
      </div>
    </div>
  </section>
)

export default ImageTextSection

ImageTextSection.propTypes = {
    section: PropTypes.shape({
        body: PropTypes.object,
        image: PropTypes.string,
        alt: PropTypes.string
    }),
}