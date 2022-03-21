
/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    prependData: `@import "_global/_variables.scss";`,
  },
  webpack: (config, options) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Important: return the modified config
    return config
  },
  target: 'serverless',
}

module.exports = nextConfig