import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './PreviewBanner.module.scss'

const PreviewBanner = () => (
  <div className={styles.previewBanner}>
    <div className={styles.previewBannerInner}>
      <p>
        You are in <b>preview mode</b>
      </p>
      <Link href="/api/exit-preview">
        <a className={styles.previewBannerButton}>
          Exit Preview
        </a>
      </Link>
    </div>
  </div>
)

export default PreviewBanner

PreviewBanner.propTypes = {
}