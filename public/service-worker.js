console.log("holi");

const cacheName = "v1";
const assets = ["offline.html"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(cacheName).then((cache) => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((cacheRes) => {
			if (cacheRes) {
				return cacheRes;
				// eslint-disable-next-line no-else-return
			} else if (!navigator.onLine) {
				return caches.match("/offline.html");
			} else {
				return fetch(event.request);
			}
		})
	);
});
