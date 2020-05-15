//@flow

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/syntax-dynamic-import',
  ],
  presets: ['@babel/react', '@babel/flow'],
  env: {
    'production:cjs': {
      plugins: [
        'babel-plugin-jsx-remove-data-test-id',
        '@babel/transform-runtime',
        ['styled-components', { minify: isProduction }],
        'transform-dynamic-import',
      ],
      presets: [['@babel/env', { modules: 'commonjs' }]],
      ignore: [
        '**/__mocks__',
        '**/__tests__',
        '**/__fixtures__',
        'node_modules',
      ],
    },
    'production:esm': {
      plugins: [
        '@babel/transform-runtime',
        ['styled-components', { minify: isProduction }],
      ],
      presets: [['@babel/env', { modules: false }]],
      ignore: [
        '**/__mocks__',
        '**/__tests__',
        '**/__fixtures__',
        'node_modules',
      ],
    },
    test: {
      presets: ['@babel/env'],
      // There is no @babel/ scoped transform for this plugin
      plugins: ['transform-dynamic-import'],
    },
  },
};
