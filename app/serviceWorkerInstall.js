// ESLINT Disable rule for this file
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
const OfflinePluginRuntime = require('offline-plugin/runtime');

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
OfflinePluginRuntime.install({
  onInstalled: (event) => {
    console.info('Offline plugin runtime install !', event);

    /* caches.open('ext').then(cache => cache.addAll([
      'http://api.github.com',
      'https://api.github.com',
    ])); */
  },
  onUpdating: () => {
    console.info('Offline plugin runtime update !');
  },
  onUpdateReady: () => {
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: () => {
    console.info('Updated ');
    // location.reload();
  },
});
