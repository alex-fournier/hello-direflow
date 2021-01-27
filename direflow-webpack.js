const path = require('path');
const { webpackConfig } = require('direflow-scripts');

// IE 11 polyfills
function configWithIE11(config) {
  config.entry = [
    path.join(__dirname, 'node_modules', 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'),
    path.join(__dirname, 'node_modules', 'proxy-polyfill'),
    path.join(__dirname, 'node_modules', 'react-app-polyfill/ie11'),
    path.join(__dirname, 'node_modules', 'react-app-polyfill/stable'),
    ...config.entry];
  return config;
}

/**
 * Webpack configuration for Direflow Component
 * Additional webpack plugins / overrides can be provided here
 */
module.exports = (config, env) => ({
  ...configWithIE11(webpackConfig(config, env)),
  // Add your own webpack config here (optional)
});
