const CACHE_NAME = "win11-v2";

const urlsToCache = [
  "/Desktop/",
  "/Desktop/index.html",
  "/Desktop/manifest.json",
  "/Desktop/desktop.png"
];

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache => cache.addAll(urlsToCache))

);

});

self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)

.then(response => {

return response || fetch(event.request);

})

);

});
