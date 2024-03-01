module.exports = [
  {
    test: /\.(ts|tsx|js|jsx)$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
  {
    test: /\.(jpg|jpeg|png|svg|gif|woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
]