'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/logs/HEAD": "f904c4fc54f40a186b1e70915feb7383",
".git/logs/refs/remotes/origin/main": "274100d0eb92ba7d336f06f5003f72bb",
".git/logs/refs/heads/main": "add6d44ed5b958ea7e1757a4a691e62f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/config": "28c0bfc378743c2a14919cfe0fede989",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/refs/remotes/origin/main": "2d318a765492b2096845411b243c07a5",
".git/refs/heads/main": "2d318a765492b2096845411b243c07a5",
".git/objects/2d/662563e3ff05e6acbd5591cec785d3be718900": "18ffd22a2c352143226400465291d541",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/3b/7315332e9db78aa55a8bcd3ca043635aa1e646": "9d79e091efe69a5c1ccb090ab606f54f",
".git/objects/3b/56e13d5525d3f183e699a18b6a6741203d727b": "ee9b4c68c257f60313527171c19abe6f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/e4/04f05d070fccdf8cb890b7596fe87a2f4952b4": "54d4bca91f38dee3044f4b2c97f05ae7",
".git/objects/dd/8c2dfb889d68758af5e558759205ffe6d66337": "af393bb503e43dd37c157b5d2c0cf928",
".git/objects/09/3777e03fab633bdea725165474328bb92ed8b0": "99189084cfc1355ef119df2228324f79",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/8b/ca5f5714626721350b19a2f13e054c0a59c170": "b123076c24979f65b2e1d05de2268db9",
".git/objects/cd/e4f937e49c53e2a44d8bfac702a13d289a2ef0": "c4ad34362ce63bbe7f25fdcbb6f550d7",
".git/objects/5d/d8930e899bfaaeb670c757ac4ab60f07343f2d": "1d1e3a69ec03b089276c00a7dcfac08e",
".git/objects/5d/c07972415c91751daa2b026d5df86cafa0eedd": "eec86749468a6269acadd6001d7eb498",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ce/b8a7e97fe43d5f61ab28838188f54c582e1923": "b535119368842717ce0726d6ad766614",
".git/objects/d3/6597040c38cb499cfbce2fcfdb18cadff2dc56": "16f87d9cc4611f549e13081599be5f6c",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/b9/58e4d1c05c2df1c44ab78c08a4c00575829b7f": "0475443a6a96b4fdb09bb60906b55f19",
".git/objects/19/1ae83cb6a44364b45840f464ca31fadbcd53eb": "3b8926c503a72db667b203ec0dac12a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/9f82389379e674a21c91cbb25ec99790fee01d": "ba851fec2a2858cbc09504312a6be27a",
".git/objects/c5/c3d97377770f019dda4d87e33ec19065ed8a04": "e27736ecfa2d7cd0fd2719e9504bd4e8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/bb/8cdee558cdc99b229c2e8377574bef23c3b68e": "739526a605a67ca99451a12ecc1f46e5",
".git/objects/23/940349c5b9a320133c2e34205ab0f460c3ac0a": "4fac83a29b151a8d23a2d326a98b93f9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/17/dd1eba363e10076133298abb950d151bbe5a25": "270c8103905f7643c1f85a1147e4a879",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/3e/0a72706bbe117ae58d2b0c213dd533cddafb7a": "76cabf281bf547ed81960c2e2600e9a0",
".git/objects/a0/8519fc2b2af8d7ed64867afd1aff3613ce8a85": "ffe30982d17ddd9f004542523ef0e040",
".git/objects/0b/eb8e12ffcde8e231b73fee7f5c4fbaed430dbc": "3d85a459a003a03f3dc65ceff6be8c83",
".git/objects/16/994abd375c2c20a766cb13d9e9d95789283379": "5b3a71bce232b9c3ce623949f9081220",
".git/index": "e74318c787be08f1adac4abb66ade4b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "6433850f1f517cee461bd4e71911189e",
"assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"assets/images/message.png": "ff869b731418f1d4a9fd6b12bafe9ed8",
"assets/images/safari.png": "67213965574d3844ec7de81d0b324ac1",
"assets/images/music.png": "958ad17ec455134e9807078637bf57c8",
"assets/images/setting.png": "b369c2fae9c5c1ca4b7fad6a8353ad57",
"assets/images/apps_store.png": "25ee056ea0ef7a3dbc05c29c7cbe92dd",
"assets/images/phone_call.png": "e6c9a67a1d7260dac7660a4be66cbd2f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"main.dart.js": "3a0bef67fbb3866b5ec7b2f744d94959",
"manifest.json": "9308ff03899babf0a708f3544e2554c3",
"README.md": "fe75ef0b3c8c4887491f83310ab506e9",
"index.html": "b33a1f8cc78abeefe5a370661f55c341",
"/": "b33a1f8cc78abeefe5a370661f55c341",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "e9ac73b9138da99d584ec2af5d619f29"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
