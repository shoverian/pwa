/* Service worker should be added to the root directory to have access to all application assets */

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker...')
})

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker...')
  return self.clients.claim();
})

/* Executes whenever a server call is made - every outgoing request goes through service worker */
self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching: ' + event.request.url)

  // Pass-through fetch event handler
  // event.respondWith(fetch(event.request));
})