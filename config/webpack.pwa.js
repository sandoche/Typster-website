const Merge = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');
const webpack = require('webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = Merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      name: 'Typster',
      short_name: 'Typster',
      description: 'Organic cotton, minimalist T-shirt that saves the forests',
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      theme_color: "#4de783",
      background_color: "#ffffff",
      icons: [
        {
          src: path.resolve('icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        },
      ]
    })
  ]
});
