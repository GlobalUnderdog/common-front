const BabelEsmPlugin = require('babel-esm-plugin')

module.exports = {
  entry: `${__dirname}/src/index.tsx`,
  mode: 'production',
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`,
    globalObject: 'this',
    libraryTarget: 'umd',
    library: {
      root: '@globalunderdog/common-front',
      commonjs: '@globalunderdog/common-front/dist',
      amd: '@globalunderdog/common-front',
    },
  },
  externals: {
    react: 'react',
  },
  resolve: {
    roots: [`${__dirname}/src`],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new BabelEsmPlugin({
      filename: '[name].esm.js',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceRoot: 'src',
              compact: true,
              sourceFileName: 'src/index.tsx',
              presets: [
                '@babel/preset-react',
                [
                  '@babel/preset-typescript',
                  {
                    isTSX: true,
                    allExtensions: true,
                  },
                ],
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    targets: {
                      browsers: ['last 2 versions', 'safari >= 7'],
                    },
                  },
                ],
              ],
              plugins: ['@emotion'],
            },
          },
        ],
      },
    ],
  },
}
