import PropTypes from 'prop-types'
import Title from '../Title'
import { urlFor } from '../../lib/sanity'

import styles from './Hero.module.scss'

const Hero = ({ title, subtitle, image }) => {
  const imgUrl = image ? `url(${urlFor(image).format('webp')})` : ''


  return (
    <section className={styles.hero} style={{ backgroundImage: imgUrl }}>
      <div className={styles.heroInner}>
        <Title as="h1" className={styles.heroTitle} title={title} />
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>
    </section>
  )
}

export default Hero

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.shape({
    asset: PropTypes.object
  })
}