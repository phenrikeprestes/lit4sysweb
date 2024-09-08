'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "451d9bede8f571d68e59a6e805e3a411",
"icons/Icon-maskable-192.png": "451d9bede8f571d68e59a6e805e3a411",
"icons/Icon-512.png": "9993fed07bb25aff589c1e060ae5e190",
"icons/Icon-maskable-512.png": "9993fed07bb25aff589c1e060ae5e190",
"manifest.json": "8d69d508bc712565716434256b533919",
"version.json": "3488143481b2fc8e1711df6b933507a4",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"main.dart.js": "56efbb26b84ff1e5f9f17438b06fed0d",
"index.html": "336f337606961b97d4b54bff829a2b04",
"/": "336f337606961b97d4b54bff829a2b04",
"flutter_bootstrap.js": "262c70128c0955c8ebeef30e28d809a6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"assets/images/cel2.png": "13e19b2c91f3b982ae9f19473e2b413b",
"assets/images/en_logo.png": "11a923e1be5e8f3683b698c0a8b62e4a",
"assets/images/computer11.png": "de819a7b95000c6d10c20ae2b498ba61",
"assets/images/calc.png": "f943f42da4e6818f8273cc29149e5ae8",
"assets/images/services.png": "5ee40e0cee6f54c46dd9b675fdc03fd5",
"assets/images/lit4sys.png": "5a654d1f3b657c9a2bd5b894c7afb98e",
"assets/images/computer13.png": "554c74ed88d0dc3deca0e18bf7d7382d",
"assets/images/arte.png": "b4946107c69629c6e1c574496044e0ee",
"assets/images/boy2.png": "fa00c3efd8cf3e0bd26b20a9f03c3a97",
"assets/images/computer3.png": "a13aaf0b1f1fe0e2de54a0af96814070",
"assets/images/boy.png": "dff776063372b9f469cc003622b85b43",
"assets/images/atm.png": "41521792e9b21eb4d65ae3c73c12d1ea",
"assets/images/eu2.png": "6f39860ce1b268f4f800b82096d609a6",
"assets/images/computer15.png": "47c6036482d7645e4df83582cdc34c81",
"assets/images/placa.png": "63e7fbf8119cfc265d854502ee69178a",
"assets/images/robot2.png": "b9ff51f6f31783de53b6669022495d93",
"assets/images/computer4.png": "464d1a8a3acaedfbea97f7316a88141a",
"assets/images/kingdom.png": "0539d02ef61b3eebe52137e134bb1751",
"assets/images/lamp2.png": "0396b6ecba5447a8ebff547a52b18e32",
"assets/images/computer8.png": "bc226545d824a0313c554c5fd137c27d",
"assets/images/fr.png": "bdceecd04ecbc9ea4c68e4d63d05894b",
"assets/images/eu.png": "cf8474b47f5c753d882aa10f4ab9baec",
"assets/images/cara_coroa.png": "a81590fedf25a5d24467c1db450cac5f",
"assets/images/github.png": "a17150d90465d2bb381781ab5baf0147",
"assets/images/qrcode.png": "3dd491bdfd15ab30a89638ab82e1b5ce",
"assets/images/imc.png": "e6d1b98987b2c4cd76ae39602022f975",
"assets/images/tombola2.png": "f91f672ad47a9c31ec31e6271f273654",
"assets/images/english.png": "0b8fd27f0120a724f808f2f2d7e72f6b",
"assets/images/logo.png": "61c169f1e2249135f03287f8b071d47d",
"assets/images/robot.png": "fc156424ccc08b9d00fedc7873c0a6a1",
"assets/images/linkedin.png": "eaf39320e628f8e417be3078335df699",
"assets/images/computer14.png": "e57e6349b90394e0406e0ca82c548e7e",
"assets/images/cel.png": "4e2069fd2f1c5e292788ba01b1353cd6",
"assets/images/lamp.png": "a986657924339e32f8718c488f486491",
"assets/images/telegram.png": "c0ff1cace75598219eb45d5cd0d6cb2e",
"assets/images/en.png": "648cc063e344c88bb5d68d7fce3dffcf",
"assets/images/contact3.png": "8610910ef0c239b7885b7bb31e86f84a",
"assets/images/great.png": "bfade170a637d1b352ee17e3b9b482e3",
"assets/images/computer9.png": "c3b01f9a1f094e68db862748135e9f79",
"assets/images/france.png": "d9164cbc264ddb4ece1f4c2649d46aff",
"assets/images/new_logo.png": "660ec13b76cdc972c57daa59992dd416",
"assets/images/computer16.png": "f9fe4b1b4758232a5b527eeaa3e34c79",
"assets/images/fr_logo.png": "df1c802095475fd9e0e6e3924f9f5296",
"assets/images/computer7.png": "89d5c6d4d366c9edd21d95fd83767c6b",
"assets/images/computer12.png": "edf468f13343cf87c202c18a01b9646a",
"assets/images/beer.png": "e7cd7f8f01fba76b51bfd1cdf71ff683",
"assets/images/computer5.png": "073951dc3004fd774d3892042d900a0a",
"assets/images/delivery.png": "f7fa2da66257d0eb041d9b07501c05f0",
"assets/images/lit4sys_screen.png": "0c042f876457ff30a9b4b6c32c5755d4",
"assets/images/tablet2.png": "4eb2ad6b3f5d70b8c07f00ac6cb5c373",
"assets/images/contact2.png": "49bb1cd33cfe74a2b3e4d899fbc6255a",
"assets/images/thing.png": "10452230a94c1088a4e7c6c9455cb91e",
"assets/images/cel5.png": "ee080a2d4cb1c136a5e549045169c4a9",
"assets/images/computer.png": "66312e15dab3fa98bbe9ea2c31c96546",
"assets/images/email.png": "ba45a1047667b72517d429ec2b3bb881",
"assets/images/movie3.png": "db52002f3b6947068b81a76aeba347ab",
"assets/images/programmer.jpg": "60e33f5f7c327c1f5f56d52526a1fbb9",
"assets/images/cpumonitor.png": "1890fb8d4d624c8feed3b68d05d113f5",
"assets/images/boy4.png": "04da55eaa979c497a35a3d250d52e885",
"assets/images/tablet.png": "193f6b007c6b3155d1e1b71415e4cfb8",
"assets/images/computer10.png": "15cfc581bb1eef3d26aed7350bd08d84",
"assets/images/mail2.png": "c251366c432947ff6ef8496b72976796",
"assets/images/circuit.png": "b521e25635f463c6f73529e3baf0a125",
"assets/images/boy3.png": "e54daa0c09b366291292a79ede574631",
"assets/images/computer6.png": "081cb002e15f0e446b2e1954dd0aec9d",
"assets/images/computer2.png": "baa21cd9b3b6ccd5f11f911bfae6b07f",
"assets/AssetManifest.bin": "5dc9b1cfac348f8371b420e8e0171ae1",
"assets/fonts/MaterialIcons-Regular.otf": "f688d7460ae28a368764808595dca3c7",
"assets/AssetManifest.json": "343ab858fc6b6ac4ca71bfa90ac5420d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/NOTICES": "3b28601ec220b714ba3049c66ba7e2b7",
"assets/AssetManifest.bin.json": "47ec5ff53e012cf6b18f9420400948f9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"favicon.png": "ce6a4b6bbf12c3d9b9cd7c03d18940ff"};
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
