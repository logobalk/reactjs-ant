/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
require('serviceworker-cache-polyfill');
const { SW_DISPATCH } = require('swStore');

function catchError(err) {
  console.error(err);
}

// Install Service worker
self.addEventListener('install', event => {
  console.log('Install by sw.js');
  event.waitUntil(
    self.skipWaiting()
  );
});

self.addEventListener('activate', event => {
  console.info('SW Activate');

  const activateCallbacks = [
    // Claim clients
    () => {
      self.clients.claim();
      console.log('Claim');
    },

    // Remove Old caches
    () => {
      caches.keys().then(keys => Promise.all(
        keys.map(key => {
          if (key.indexOf('api.github') > -1) {
            return caches.delete(key);
          }

          return null;
        })
      )).then(() => {
        console.info('Cleared GitHub caches');

        caches.open('github').then(cache => {
          console.debug('We r going to do Pre-Cache');
          // Test Pre-Cache
          cache.addAll([
            'comdet',
            'PromptPay',
          ].map(user => new Request(`https://api.github.com/users/${user}/repos?type=all&sort=updated`)));
        });
      });
    },
  ];

  event.waitUntil(
    activateCallbacks.forEach(cb => cb())
  );
});

// Fetch API Interceptor
self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);
  // console.log('SW FETCH', requestURL);
  // console.log('Origin', self.location);

  if (
    requestURL.host === 'api.github.com'
    || requestURL.host === 'github.com'
    // && requestURL.href.indexOf('.png') > -1
  ) {
    console.log('GitHub detected');
    event.respondWith(
      caches.open('github').then((cache) => cache.match(event.request.url)
        .then((response) => response || fetch(event.request)
          .then((response2) => {
            if (response2.ok || response2.status === 0) {
              cache.put(event.request.url, response2.clone());
              // console.log('Event request :', event.request);
            }

            return response2;
          })
        )
      )
    );
  } else if (requestURL.origin === self.location.origin) {
    // Web

    if (
      requestURL.pathname === '/api/product' ||
      requestURL.href.indexOf('/assets/') > -1
    ) {
      event.respondWith(
        caches.open('productinfo').then((cache) => cache.match(event.request.url)
          .then((response) => response || fetch(event.request)
            .then((response2) => {
              if (response2.ok || response2.status === 0) {
                cache.put(event.request.url, response2.clone());
                // console.log('Event request :', event.request);
              }

              return response2;
            })
          )
        )
      );
    }
  }
});

self.addEventListener('sync', event => {
  // console.debug('Sync :', event);
  console.log('Sync tag :', event.tag);
});

self.addEventListener('push', event => {
  // console.debug('Push :', event);
  try {
    event.data.json().then(value => {
      console.log('Push data :', value);
    });
  } catch (err) {
    const value = event.data.text();
    console.log('Push data :', value);
  }
});

// Listen message from clients
self.addEventListener('message', ev => {
  const msg = ev.data;
  console.log('Message from clients :', msg);
});
