const path = require('path');

const sourceDir = path.join(__dirname, '/client/src');
const distDir = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${sourceDir}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: distDir,
  },
  watch: true,
  module: {
    rules: [{
        test: /\.jsx?/,
        include: sourceDir,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [{
          loader: 'url-loader',
        }, ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watchOptions: {
    poll: true
  },
};
