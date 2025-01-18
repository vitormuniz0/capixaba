const webpack = require('webpack');

module.exports = function override(config) {
  // Adicionando polyfills para os módulos do Node.js
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve('crypto-browserify'),
    path: require.resolve('path-browserify'),
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
    process: require.resolve('process/browser'),
    os: require.resolve('os-browserify/browser'),
    vm: require.resolve('vm-browserify'), // Adicionei o polyfill para 'vm'
  };

  // Certificando que as extensões para '.mjs' e '.js' estão configuradas
  config.resolve.extensions = [...config.resolve.extensions, '.mjs', '.js'];

  // Adicionando os polyfills para as dependências no Webpack
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ]);

  return config;
};
