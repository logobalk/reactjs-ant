const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const publicPath = process.env.CONTEXT_ROOT || '/';

module.exports = {
  getOfflinePlugins() {
    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    return new OfflinePlugin({
      ServiceWorker: {
        events: true,
        entry: 'sw.js',
      },
      relativePaths: false,
      publicPath,
      appShell: '/',

      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: ['.htaccess'],

      caches: {
        main: [':rest:'],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],
      },

      /* cacheMaps: [
        {
          match: (reqUrl) => new URL('/', location), // eslint-disable-line
          requestTypes: ['navigate'],
        },
        {
          match: (reqUrl) => 'api.github.com',
          requestTypes: ['navigate', 'cross-origin'],
        },
      ], */

      // Removes warning for about `additional` section usage
      safeToUseOptionalCaches: true,
    });
  },

  getPwaManifestPlugin() {
    return new WebpackPwaManifest({
      name: 'React Boilerplate',
      short_name: 'React BP',
      description: 'My React Boilerplate-based project!',
      background_color: '#fafafa',
      theme_color: '#b1624d',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('app/images/icon-512x512.png'),
          sizes: [72, 96, 128, 144, 192, 384, 512],
        },
        {
          src: path.resolve('app/images/icon-512x512.png'),
          sizes: [120, 152, 167, 180],
          ios: true,
        },
      ],
    });
  },
};
