importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
const CACHE_NAME = "firstpwa1.8";
var urlsToCache = [
    "icon.png",
    "assets/image/shandy.png",
    "assets/image/spongebob.jpeg",
    "manifest.json",
    "nav.html",
    "index.html",
    "article.html",
    "pages/home.html",
    "pages/favorite.html",
    "pages/characters.html",
    "pages/contact.html",
    "css/materialize.min.css",
    "js/materialize.min.js",
    "js/nav.js",
    "js/idb.js",
    "js/custom.js",
    "js/api.js",
    "css/custom.css",
];
  
workbox.precaching.precacheAndRoute(urlsToCache);

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName : CACHE_NAME,
    })
);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
        }),
      ],
    }),
  )

// self.addEventListener("install", function (event) {
//     event.waitUntil(
//         caches.open(CACHE_NAME).then(function (cache) {
//             return cache.addAll(urlsToCache);
//         })
//     );
// });

// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request, { cacheName: CACHE_NAME })
//             .then(function (response) {
//                 if (response) {
//                     return response;
//                 }
//                 var fetchRequest = event.request.clone();
//                 return fetch(fetchRequest).then(
//                     function (response) {
//                         if (!response || response.status !== 200) {
//                             return response;
//                         }
//                         var responseToCache = response.clone();
//                         caches.open(CACHE_NAME)
//                             .then(function (cache) {
//                                 cache.put(event.request, responseToCache);
//                             });
//                         return response;
//                     }
//                 );
//             })
//     );
// });

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + " dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('push', function (event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: 'img/notification.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});