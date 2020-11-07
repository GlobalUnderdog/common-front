import resolve from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import commonjs from 'rollup-plugin-commonjs'
import cleanup from 'rollup-plugin-cleanup'
import json from 'rollup-plugin-json'
import pkg from './package.json'

const input = 'pre/index.js'

const plugins = [
  resolve(),
  commonjs({
    ignoreGlobal: true,
  }),
  json(),
  cleanup(),
  filesize(),
]

const globals = {
  react: 'React',
  'react-doc': 'ReactDOM',
}

export default [
  {
    input,
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      name: '@globalunderdog/common-front',
      globals,
    },
    external: Object.keys(pkg.peerDependencies || {}),
    plugins,
  },
]
