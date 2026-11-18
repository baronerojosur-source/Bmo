const CACHE_NAME = 'bmo-robot-v1';
const ASSETS = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('192.168.4.1')) return;
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
