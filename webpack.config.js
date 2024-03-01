const path = require('path');
const rules = require('./webpack-config/rules');
const devServer = require('./webpack-config/devServer');
const plugins = require('./webpack-config/plugins');
const envs = require('./webpack-config/envs');
const { NODE_ENV } = envs;
const config = {
  entry: './src/index.tsx',
  output: {
    publicPath: '/', // to make sure the assets are served from the root as we are using react-router
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [".ts",".tsx",".js",".jsx"],
    alias: {
      "@": path.join(path.resolve(__dirname, "./src")),
    },
  },
  
  module: { rules },
  plugins,
  mode: NODE_ENV === 'production' ? 'production' : 'development',
}

if (NODE_ENV === 'local') {
  config.devServer = devServer;
}

module.exports = config;