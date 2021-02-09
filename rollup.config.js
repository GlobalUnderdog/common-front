import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import cleanup from 'rollup-plugin-cleanup'
import json from 'rollup-plugin-json'
import pkg from './package.json'

const input = './src/index.tsx'
const extensions = ['.ts', '.tsx']

const plugins = [
  resolve({ extensions }),
  commonjs({
    ignoreGlobal: true,
  }),
  json(),
  cleanup(),
  typescript(),
  babel({
    extensions,
    babelHelpers: 'runtime',
    configFile: false,
    include: 'src',
    presets: [
      [
        '@babel/preset-react',
        { runtime: 'automatic', importSource: '@emotion/core' },
      ],
      [
        '@babel/preset-typescript',
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
      '@emotion/babel-preset-css-prop',
    ],
    plugins: ['@babel/plugin-transform-runtime', 'emotion'],
    exclude: 'node_modules/**',
  }),
]

const globals = {
  react: 'React',
  'react-doc': 'ReactDOM',
}

export default [
  {
    input,
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        name: '@globalunderdog/common-front',
        globals,
      },
      {
        dir: 'esm',
        format: 'esm',
        name: '@globalunderdog/common-front',
        globals,
      },
    ],
    plugins,
    // Please, never transform '@babel/runtime' to a string, as per documentation:
    // https://www.npmjs.com/package/@rollup/plugin-babel#babelhelpers
    external: [
      /@babel\/runtime/,
      // For some reason these are not being automatically imported
      '@babel/runtime/helpers/defineProperty',
      '@babel/runtime/helpers/extends',
      '@babel/runtime/helpers/esm/extends',
      'react/jsx-runtime',
      'next/head',
      ...Object.keys(pkg.peerDependencies || {}),
      'next/link',
      '@tianhuil/simple-trpc/dist/client',
    ],
  },
]
