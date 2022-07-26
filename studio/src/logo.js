import React from 'react'
import src from '../static/logo.png'

const styles = {
  width: `auto`,
  height: `24px`,
  objectFit: `contain`
}

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={src}
        style={styles}
        alt="logo"
      />
  </div>
)

export default Logo