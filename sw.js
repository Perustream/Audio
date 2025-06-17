self.addEventListener('install', (e) => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker activado');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
