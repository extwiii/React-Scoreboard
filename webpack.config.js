module.exports = {
  devtool: 'inline-sourcemap',
  entry: './index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
},
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
