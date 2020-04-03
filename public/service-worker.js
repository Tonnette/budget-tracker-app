const FILES_TO_CACHE=["/","/index.html","/style.css","/index.js","/db.js","favicon.ico"],
​
const CACHE_NAME = "static-cache-v1";

self.addEventListener("install", function (event) {
    console.log("service worker installing");
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Your files were pre-cached successfully!");
            return cache.addAll(FILES_TO_CACHE);
        })
    );
​
});
​
self.addEventListener("fetch", function (event) {
    console.log("event: " + JSON.stringify(event));
    event.respondWith(
        fetch(event.request).catch(function () {
            console.log("event.request: " + JSON.stringify(event.request));
            return caches.match(event.request).then(function (response) {
                if (response) {
                    return response;
                } else if (event.request.headers.get("accept").includes("text/html")) {
                    return caches.match("/index.html");
                }
            });
        })
    );
});
