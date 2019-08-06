const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const withSass = require('@zeit/next-sass')
module.exports = withSass({
  target: 'serverless',
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config
  }
})
