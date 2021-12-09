'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "491f300584ee76691ac1f791d93d4b8e",
"assets/assets/logo.png": "8ecb28f2d00aa39839c894ef0bb35a6b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d16e888d643cd044d2fde922e653dc4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c98f92c94a8320e930dd51910b8f4c02",
"/": "c4b64b1faa01366bece835ada2d1c0e5",
"main.dart.js": "351706227e23e964b4ac76b6fdfc208a",
"manifest.json": "299d737e5b7da367a048ce8c0c171307",
"roblox_loginh/.git/COMMIT_EDITMSG": "d39ddf2fba7ec9e93336bbc5ecd89379",
"roblox_loginh/.git/config": "c9edeeb0a15046bb048263a1da992fe8",
"roblox_loginh/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"roblox_loginh/.git/FETCH_HEAD": "db9b28a626c97577649d292a9da97db3",
"roblox_loginh/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"roblox_loginh/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"roblox_loginh/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"roblox_loginh/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"roblox_loginh/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"roblox_loginh/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"roblox_loginh/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"roblox_loginh/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"roblox_loginh/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"roblox_loginh/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"roblox_loginh/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"roblox_loginh/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"roblox_loginh/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"roblox_loginh/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"roblox_loginh/.git/index": "e2aad1c424201424373b607d2258357b",
"roblox_loginh/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"roblox_loginh/.git/logs/HEAD": "107e10eb0018fbe01111102288228528",
"roblox_loginh/.git/logs/refs/heads/main": "107e10eb0018fbe01111102288228528",
"roblox_loginh/.git/logs/refs/remotes/origin/main": "504d27dbed65c33dcca3d32684b2d623",
"roblox_loginh/.git/objects/0f/608e8c48af663ef7d2341d382e80f3e566f690": "00deb400422164a052e8aa52b1eceba2",
"roblox_loginh/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"roblox_loginh/.git/objects/25/b029af40f77445c671a8e9e484d266976242f0": "c208f1226beb6be15fb91f50029fe9af",
"roblox_loginh/.git/objects/2c/3d1c141f811aa841c3a5c455de5a952da6e335": "3394112f077a0a9279e221c34c75d226",
"roblox_loginh/.git/objects/2c/e9a9ff4f122154b9f7dc8e7e8dd1ba3034f4cb": "f1f4d26c792dea95ff83cd7c2e8eb954",
"roblox_loginh/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"roblox_loginh/.git/objects/39/224fd8b61c5f329c3a50af0c272a533d16c86d": "5fc59550b155b5ff16a640d5f7ca15b0",
"roblox_loginh/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"roblox_loginh/.git/objects/46/4fd623b637e2bc2e40cc766f48ee951068a815": "df3ac2ae16e488c5ca72ab6cb00079f6",
"roblox_loginh/.git/objects/49/9cfaeb293f426490d8d8fd69a818074018ed88": "956ab5a45b328baa14c6d0c6bd6ad922",
"roblox_loginh/.git/objects/55/e28e750a04ff38b457edb91c866c026b8e5f29": "af1f887f260ec47284ae6e9cc90f69af",
"roblox_loginh/.git/objects/5f/9a60f03c67a07fc4c368eb24e1742a8e732660": "0a7e6427198a2abeceecc7cb38ce3eb1",
"roblox_loginh/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"roblox_loginh/.git/objects/73/d53049ad18214ba676c60b9a528a0be6ec0e78": "64e5409775f92deb54311079f91f57b9",
"roblox_loginh/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"roblox_loginh/.git/objects/7c/17fb65b59646124decc350ba881f2eacc3881d": "7a176f4d590f62e883c58c1f27e20e79",
"roblox_loginh/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"roblox_loginh/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"roblox_loginh/.git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
"roblox_loginh/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"roblox_loginh/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"roblox_loginh/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"roblox_loginh/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"roblox_loginh/.git/objects/cb/79b3b5a5326c8207f0d51e453cd432465273ad": "b894ab903b68624ff9b0c0a1959da3a7",
"roblox_loginh/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"roblox_loginh/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"roblox_loginh/.git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
"roblox_loginh/.git/refs/heads/main": "5db88ebd7591612d349784787ecbbe55",
"roblox_loginh/.git/refs/remotes/origin/main": "5db88ebd7591612d349784787ecbbe55",
"roblox_loginh/assets/AssetManifest.json": "491f300584ee76691ac1f791d93d4b8e",
"roblox_loginh/assets/assets/logo.png": "8ecb28f2d00aa39839c894ef0bb35a6b",
"roblox_loginh/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"roblox_loginh/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"roblox_loginh/assets/NOTICES": "d16e888d643cd044d2fde922e653dc4d",
"roblox_loginh/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"roblox_loginh/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"roblox_loginh/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"roblox_loginh/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"roblox_loginh/index.html": "c4b64b1faa01366bece835ada2d1c0e5",
"roblox_loginh/main.dart.js": "4aed359b095f2d75d82db798e4c1202c",
"roblox_loginh/manifest.json": "299d737e5b7da367a048ce8c0c171307",
"roblox_loginh/version.json": "12b02558e4d8bf9ec677808599399f20",
"version.json": "12b02558e4d8bf9ec677808599399f20"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
