'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/logs/HEAD": "9be060bfe7aeb57b71512053a2e565ae",
".git/logs/refs/remotes/origin/main": "c87291ef18c87e5b25c4c184e7b92189",
".git/logs/refs/heads/main": "ab8fe4535d2790c50a2dc2e1180a1742",
".git/FETCH_HEAD": "394956a5f54ca1bf6da895f08e6a4a52",
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
".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/refs/remotes/origin/main": "12d4bc641ccdcc3b7f765fa1d3941901",
".git/refs/heads/main": "12d4bc641ccdcc3b7f765fa1d3941901",
".git/ORIG_HEAD": "545c55a6d882e60579c15d9fa11fbdea",
".git/objects/2d/662563e3ff05e6acbd5591cec785d3be718900": "18ffd22a2c352143226400465291d541",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/01/fccbabb4b850dc0bd7563c9e3739a70438502b": "dbba31be47d1b32358b2174715beadf4",
".git/objects/15/6e6d2126341fa05c84f7d4a790672b7a5acffd": "d13b745213e6a6d972ac7e865f7eb0d6",
".git/objects/3b/7315332e9db78aa55a8bcd3ca043635aa1e646": "9d79e091efe69a5c1ccb090ab606f54f",
".git/objects/3b/56e13d5525d3f183e699a18b6a6741203d727b": "ee9b4c68c257f60313527171c19abe6f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/e4/04f05d070fccdf8cb890b7596fe87a2f4952b4": "54d4bca91f38dee3044f4b2c97f05ae7",
".git/objects/dd/8c2dfb889d68758af5e558759205ffe6d66337": "af393bb503e43dd37c157b5d2c0cf928",
".git/objects/54/468d05ac91d25994e85b759a0dbe94b0c49d18": "6679f5069fabf594b4a4c145afd9d2ab",
".git/objects/34/8caf2756c61c0f6205a1dd1f7bdf8d4d3fbba2": "a4978c852f7158284281d7be834db37a",
".git/objects/34/fff04bbc6d2c27646b9818b86361c5d82e3470": "6c9bd0ef289795b8f42e3d09e489074e",
".git/objects/3a/893bd6cc9e4471935b2fdbdcb049bb9d39e6af": "b94c962c6017b7b270cd24575f2c8921",
".git/objects/3a/11619d3a45ec6d827ee9196ed888e55751c59d": "fedd98adf9d0f67e15467a77142d31df",
".git/objects/d6/410f881d3b1a481cf20b311d81449590b2f154": "4a0e5fed07a2c742eb122541da147a67",
".git/objects/09/3777e03fab633bdea725165474328bb92ed8b0": "99189084cfc1355ef119df2228324f79",
".git/objects/9f/03072d53ece4075b95a4e7665b6ed8ce7e1b84": "0eac9c0517067cb8f4bf47d0324d8431",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/9d/f8b712e584eb083cc9a8ab834945fc59ca7150": "f914a27ece2ee438b93707c630f779ad",
".git/objects/8b/ca5f5714626721350b19a2f13e054c0a59c170": "b123076c24979f65b2e1d05de2268db9",
".git/objects/cd/e4f937e49c53e2a44d8bfac702a13d289a2ef0": "c4ad34362ce63bbe7f25fdcbb6f550d7",
".git/objects/5d/d8930e899bfaaeb670c757ac4ab60f07343f2d": "1d1e3a69ec03b089276c00a7dcfac08e",
".git/objects/5d/c07972415c91751daa2b026d5df86cafa0eedd": "eec86749468a6269acadd6001d7eb498",
".git/objects/43/5b158ab661130e6fdba41850e605f344c43421": "92cbc62fbaf499e3ad34f065272a08fc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/cf984771fa7cc755ae0b93525057c6a7630698": "9d775660a26e605a871cac09c6508c61",
".git/objects/ce/b8a7e97fe43d5f61ab28838188f54c582e1923": "b535119368842717ce0726d6ad766614",
".git/objects/d3/6597040c38cb499cfbce2fcfdb18cadff2dc56": "16f87d9cc4611f549e13081599be5f6c",
".git/objects/d3/c1a0d77f3ac43835773b145d98f3f2f0442f19": "e3e431f44d4874eaee1dc5a6139ec7f3",
".git/objects/83/328d06cc9c15aad522943bfdea8174c1bb7e9f": "52a6c7d2ac781e52c68de620b73c0c1d",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/b9/58e4d1c05c2df1c44ab78c08a4c00575829b7f": "0475443a6a96b4fdb09bb60906b55f19",
".git/objects/77/10d345d822dda7ded1b7942918cb9a5860a876": "d2d620e12775445a8caeba2c575d4ed1",
".git/objects/08/c60299d70f06a52135da65892c0398551f4344": "7355c14b57557f7363a79f4fddef14e4",
".git/objects/19/1ae83cb6a44364b45840f464ca31fadbcd53eb": "3b8926c503a72db667b203ec0dac12a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/90/cb6c4d7dcf7393ffd3ae68b6dc3764291a8ffe": "a459a8f4653e9b3806aab080536deb6e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/69/33d131b831304507379614b7fc5f718d1e3a3c": "5a50d564ba2ece7f4d8750e250f31cfb",
".git/objects/8e/9f82389379e674a21c91cbb25ec99790fee01d": "ba851fec2a2858cbc09504312a6be27a",
".git/objects/d9/514a92573833549525577e2f0e926ab7c16599": "049d7c0e6ea08ea732d0bdf2dfe419d9",
".git/objects/0d/8c2b287489f4111c69f14893a0bcc4cc160163": "690a7ca93c4ec80556d42f8ef879055e",
".git/objects/c5/c3d97377770f019dda4d87e33ec19065ed8a04": "e27736ecfa2d7cd0fd2719e9504bd4e8",
".git/objects/31/3a7b46db4619293b03ad2f2cdbd28316b38d3d": "efdc44116107d59c50786216eff17f9a",
".git/objects/11/bd5ba08a380edef62ce7d4e48e8a3acdeb0e9a": "2e7390d59a658e7cc7c8d4e451649064",
".git/objects/97/45f26b6c1242e11d6960d5606e4800fda6d132": "b364009bde78c323e555f5c205cc6963",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/71/20e6d9124394a6ff0112024561fea7d10a5df0": "ecb9150c19ec44f13a2fd793638c6c84",
".git/objects/71/38399b095b1021d7bd3afbb9aa2cd8300e7c6b": "31e48280845e519f1ea99bcccb2270d6",
".git/objects/96/1773caa5deee9eea06548a00e56d0e78133a8e": "a0ec5fb83037e1219cbdf16985aa9a14",
".git/objects/bb/8cdee558cdc99b229c2e8377574bef23c3b68e": "739526a605a67ca99451a12ecc1f46e5",
".git/objects/66/f40a15d7377decd63dfc065c9aaddba35ab79e": "0c1931eb6a70083cb6dd283aa0228722",
".git/objects/28/4e044c2cd894826e7273911beee90da992d5c1": "dc61ffdf20cfa86db995d6044bb54fe4",
".git/objects/1b/50836e4a8b2121df367c718b5aa2be7c4845d4": "895b9e3c4d0d44a1b8976574963a4c5c",
".git/objects/23/940349c5b9a320133c2e34205ab0f460c3ac0a": "4fac83a29b151a8d23a2d326a98b93f9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/9a/37623294850ad637dd6fdd574bf79c703a22b2": "95d7a6637fa5d3572739839a193f0475",
".git/objects/17/0d5a2e2f99220c589c3dd57f5b4d073873ad21": "48b6063bfcb2a2ff5b1363ed5f860b6c",
".git/objects/17/dd1eba363e10076133298abb950d151bbe5a25": "270c8103905f7643c1f85a1147e4a879",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/3e/0a72706bbe117ae58d2b0c213dd533cddafb7a": "76cabf281bf547ed81960c2e2600e9a0",
".git/objects/21/c5690a6800d95133a714d1d42526676e43f22e": "a6d685e3b391a2a19195271a0f72e838",
".git/objects/c1/8a98112e95e4079bc8d87d76aceff0e7a3bc8d": "9cc1146c009fa918ac5422da79b3e731",
".git/objects/45/31d93881122ea665797d4b890f2183c8608a27": "7886326b9b43a0e2c0993053f0b1feb3",
".git/objects/a0/8519fc2b2af8d7ed64867afd1aff3613ce8a85": "ffe30982d17ddd9f004542523ef0e040",
".git/objects/0b/eb8e12ffcde8e231b73fee7f5c4fbaed430dbc": "3d85a459a003a03f3dc65ceff6be8c83",
".git/objects/16/994abd375c2c20a766cb13d9e9d95789283379": "5b3a71bce232b9c3ce623949f9081220",
".git/objects/44/4d04d6ca9c2312e8dba2371e2e3f60848b314c": "b6f7c8f60aab253af1d25625c613c50a",
".git/objects/2b/2454e16911c396c775e7038a2b18a656f65db7": "d0b8bcdc2fe5c23b70b8c279d0fe9e99",
".git/index": "628df2e19579675ee04744d324313de3",
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
"main.dart.js": "c101d4e65761449ac040c89d6d74ea94",
"manifest.json": "9308ff03899babf0a708f3544e2554c3",
"README.md": "fe75ef0b3c8c4887491f83310ab506e9",
"index.html": "329777e02ee1ee8a5e622296c9090bcd",
"/": "329777e02ee1ee8a5e622296c9090bcd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "e9ac73b9138da99d584ec2af5d619f29",
"CNAME": "7c6aeabc1ee086274a9fba0d95e6175c"
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
