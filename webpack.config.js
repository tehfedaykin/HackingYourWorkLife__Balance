const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
   path: path.resolve(__dirname, 'assets'),
   filename: 'bundle.js'
 },
 module: {
   rules: [
     {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
     {
       test: /\.(scss|css)$/,
       use: [
         'style-loader',
         'css-loader',
         'sass-loader'
       ]
     }
   ]
  }
};
