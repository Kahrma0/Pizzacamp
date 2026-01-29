const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    '/',
    'cocina.html',
    'cicuba.css',
    'manifest.json',
    'app.js',
    'agr_btn_car.js',
    // Agrega más si es necesario
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache abierto');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});