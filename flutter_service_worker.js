'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4316e05676dad4aa3322e14d76001c0b",
"assets/AssetManifest.bin.json": "a269d64953c0aaa790eaaf7da40ed325",
"assets/assets/fonts/Raleway-Black.ttf": "0560c808e614a5550655e58cf7ff4ed7",
"assets/assets/fonts/Raleway-Bold.ttf": "9aefa157ae4a8f7ff923dd88cee3917f",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "4e37fffb940ad5e5b9b96f59079e2014",
"assets/assets/fonts/Raleway-ExtraLight.ttf": "62b913f174cc545320b160b3a64dc6bb",
"assets/assets/fonts/Raleway-Light.ttf": "1aa2abd0c1ee7d067e6df27f82f1f0b2",
"assets/assets/fonts/Raleway-Medium.ttf": "28ea37f0eb58c57e01eed0b06fc359d6",
"assets/assets/fonts/Raleway-Regular.ttf": "6310192cd2011f527e18b1586a1245c8",
"assets/assets/fonts/Raleway-SemiBold.ttf": "66c9748f1e4aae2e764d5c50c05f7841",
"assets/assets/fonts/Raleway-Thin.ttf": "d10da33944a69e7951077d2e9c1fdd16",
"assets/assets/images/png/1.jpeg": "ad8b9ba3adc822d0796ce481ede80ca7",
"assets/assets/images/png/10.jpeg": "38d5ff47cda10b286c04ff722a37fc84",
"assets/assets/images/png/11.jpeg": "420136f3a46d90b1d4f58db3179afeb5",
"assets/assets/images/png/12.jpeg": "7140c9364aa189e9e957850d3212abe2",
"assets/assets/images/png/13.jpeg": "1984fe80619cc0e302ec76fb8d3d3e0c",
"assets/assets/images/png/14.jpeg": "4c0ff26783a807c76227ba5eda06a987",
"assets/assets/images/png/15.jpeg": "c1d974d7883ff1dc6d2d083092f7f99e",
"assets/assets/images/png/16.jpeg": "ef0797c56cd01996863f03e5b781e91e",
"assets/assets/images/png/2.jpeg": "4e2c79e0cf365e5dd6d67c4f44ddf212",
"assets/assets/images/png/3.jpeg": "3ce6f129779a89bf79fdf7e927a4fb65",
"assets/assets/images/png/4.jpeg": "491fa9217d3d9cd7ea4600a398776351",
"assets/assets/images/png/6.jpeg": "845ed97115ce4e664fc7a06def8979a9",
"assets/assets/images/png/7.jpeg": "5b980c3d321778029d0960e727a576da",
"assets/assets/images/png/8.jpeg": "85f62f11b8f8252748d90224fa71eecd",
"assets/assets/images/png/9.jpeg": "fd38465b2fa99d4bd3660e4c2db02a0e",
"assets/assets/images/png/bishSubLogo.png": "a3c96b3b9e1ffc007d552f5985e4e27f",
"assets/assets/images/png/blackCard.png": "5fe3962cce2f00a594980715b8c84ac5",
"assets/assets/images/png/logo.png": "f7d4d6e9b63e8f8dcd107b028f710576",
"assets/assets/images/png/refer.jpg": "211f2de15d4b6fd7bf4f5afa4383006c",
"assets/assets/images/svg/arrowUp.svg": "b0f3df3afdb3a817ce71f8549ad07e27",
"assets/assets/images/svg/details.svg": "53ebc597107dcb16f99568c3e4f4679f",
"assets/assets/images/svg/home.svg": "2a0975c14c1c502350ff8ea6491bfde2",
"assets/assets/images/svg/menu.svg": "eee592866e5daa7892d0328b8a364fa1",
"assets/assets/images/svg/message.svg": "5da420b423465266c9ea299f3d93e5a2",
"assets/assets/images/svg/share.svg": "0eb5d8a7f6f4f27a84409401b54fda15",
"assets/assets/images/svg/wallet.svg": "02173d17d0c301eb718946608c9ec525",
"assets/FontManifest.json": "3c6d15c52f32fbc6b3527ba7d7f9a680",
"assets/fonts/MaterialIcons-Regular.otf": "b603ab5405a2c0ce3416a0620effefaf",
"assets/NOTICES": "1dd7b89f1e73ef63dac366b9899aca72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "b577089c66b40f74e1f3b7aae0073e3d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a9f69b2eaf86acf31985e7c381fa47fd",
"/": "a9f69b2eaf86acf31985e7c381fa47fd",
"main.dart.js": "a8dae648b91b42fbcba5364423212c9f",
"manifest.json": "8e7af5da82ba0b73e094734dbf90da71",
"version.json": "f7fb0d1787ff02ede3a88617c7460f83"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
