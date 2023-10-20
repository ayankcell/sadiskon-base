const OFFLINE_VERSION = 4;
const CACHE_NAME = "offline";
// Customize this with a different URL if needed.
const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(["/ceurik.gif", OFFLINE_URL]);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          // catch is only triggered if an exception is thro
          console.log("Fetch failed; returning offline page instead.", error);

          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
        }
      })()
    );
  }
});

var version = "v2.0.4";
var swPath;
var urlObject = new URL(location);
var host;
if (urlObject.searchParams.get("swPath")) {
  swPath = urlObject.searchParams.get("swPath");
} else {
  if (urlObject.searchParams.get("version")) {
    version = urlObject.searchParams.get("version");
  }
  if (urlObject.searchParams.get("swJSHost")) {
    host = "https://" + urlObject.searchParams.get("swJSHost");
  } else {
    host = "https://sdki.truepush.com/sdk/";
  }
  swPath = host + version + "/sw.js";
}
importScripts(swPath);
