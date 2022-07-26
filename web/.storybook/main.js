const path = require("path")

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        }
      },
    }
  ],
  "staticDirs": ['../public'],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            additionalData: '@import "./src/_global/_variables.scss";',
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    return config
  }
}