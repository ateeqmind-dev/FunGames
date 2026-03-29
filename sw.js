const CACHE_NAME = 'sensory-arcade-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/whisper.html',
    '/slingshot.html',
    '/plasma.html',
    '/gravity.html',
    '/rage.html',
    '/peekaboo.html',
    '/spin.html',
    '/vocal.html',
    '/spray.html',
    '/balance.html',
    '/shadow.html',
    '/compass.html',
    '/zen.html',
    '/balloon.html',
    '/fractal.html',
    '/icon-192.png',
    '/icon-512.png'
];

// Install Event: Cache all files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Caching app assets');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Fetch Event: Serve from cache if available, otherwise go to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});
