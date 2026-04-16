'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/config": "b885a014c4eec2f78d30e689802dfaab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a59838a1fc2dd95f7e8558aa0016550a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f899ef7e7402573e7ceab4b0a02e238",
".git/logs/refs/heads/gh-pages": "3f899ef7e7402573e7ceab4b0a02e238",
".git/logs/refs/remotes/origin/gh-pages": "27aef2aab8cd1443656a01a7e3e1c356",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/e777a56cc76b4f791726e40f138d94943503bf": "474a6ef5d9bbc560fe42f0d7bdf9df4d",
".git/objects/13/86124e134b2d9f7ade4589cc704c369decd4e9": "7b85a97cad29192fefd44fc594b1801d",
".git/objects/1b/d9a3f2f827bfdd75609e0d3328250eb146c390": "94be3d185fc99bb1d37cf0545532b0ee",
".git/objects/1b/de8b69bfca8a02baee184ebc9aada2cf878c34": "49692f2863c2df6c58d8acd5123603ce",
".git/objects/1f/1dcbc392578420b5c8bffdc58da4ea940f3d03": "2c5423dfb6b5328494505c3289a76455",
".git/objects/20/849a0e28f883a295c4f0b642a59ab6b520e906": "dee0b91c05271284004707d47ac32e15",
".git/objects/35/9f89bf8ecc49e6c83a8d6bd6d9a5f37edd806d": "0c0891e320fb5a11cc2976edfd32ec94",
".git/objects/36/68707fcb9c67036a4b59fc6fc67462d6cd4a2b": "7718880b2cd711ef5d5e7d2ea7b95849",
".git/objects/36/f9efa8c25c8845246b1c905bc450ca9e6b12aa": "757ca7ff82b7f0a241c32adbd1ac32de",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/36277b72c5adf31f997d80845709939ca8b5cf": "cd4d330982e6fb980168cd26ffaa2e0b",
".git/objects/45/b96fe8d5242e393cdc58db83487c8793cc20bb": "5b38c6815ca6f12cd51c458e2eba9bbf",
".git/objects/4e/1e54952977922e7f53adb5ac1dddc257e380a3": "bee9dabda0a6e8567e109db2c03367f7",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/54/09a768be330aeeaa8f10a7ffd294d0fa62568b": "1f558ec12af266baa9221585bc5ca8be",
".git/objects/5d/116d7aa1e8c7f5779fcc515724b0809f7ccb4b": "d05efd97ed18ce33dd3af607a0be1622",
".git/objects/60/45aba681ba90677db84d5727b63759c3f51ca7": "c392242fa7c88f00d6fb2269dc8f4e46",
".git/objects/62/ac22ae8b1aa9508c51ed6d5e039a0b9ab3b8e9": "078c04a1b77ec5dbfa68ec9ff30f1ecb",
".git/objects/65/40bdda670c4ddb96675a6f2fbf4b3f6265a977": "091e0b92a171322ae428a1036c56cb84",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/757c3ac50bd5da8498310c71657b0882d39363": "b67cdca7e9756db83955e261f8dfb05e",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/75/4d32770b383b6668431bb07280464e1c3acd20": "2da75cb07d77fd5dc9840aae81e3ecd7",
".git/objects/77/4b38210ae7a20f96a778556a68856bd88aafa0": "4301c288da28aea2dac868ebe2ec583b",
".git/objects/78/3b53027f94cfc6a6d0d5f54815f7648d2b329d": "581befaf25c6890d22f0662114494d5c",
".git/objects/7a/ee572a2c895d61f13af254f12ce4a7d74fcaf8": "143bc0eb1c796e978b0d654e5cc0bea9",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7f/94bf077d2af5f08dee67c0879276b459069387": "e1d925057cb724ec2d2fd9d34da6b584",
".git/objects/83/36cedf605c5205a82b0c5cdaf330b2dcc98364": "62ee9a91af13ad2739c2db51864a7dd7",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/6c713a1927de75132a09585348717561fc182a": "9797c60cd8fe968b54651a74d6e2241a",
".git/objects/92/99c558fa8adb2bb548ce04a9e1ce4e3f36a4cc": "d0bbefefe677a7f5e33bb5682a1f6cc6",
".git/objects/92/e6ae9ffc7cd87c78bda55e6bf29f7b8fe7a53f": "45c47a1868308276c90eda83d243b336",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/a3/662bf37e60c8080e4ed7defe7a6e6f3de04fa7": "ebfd98735ebde05025d4031b3e7cc0c4",
".git/objects/a4/e6f6984db9c0c9543a70146ca42b56af40e450": "ef3c9f16d0ba678a5d7127c02106eec7",
".git/objects/a5/0db082ed94b271ee280c56494cf56b64875eed": "508d77de62118eb24cea6378029ce271",
".git/objects/a6/ebbd7c51322c76b075e3eaec7980a826652aa2": "aeca9a649699e7ebf045aafe79f32186",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/b57e85a1dc4b7b7bada483b0af693a9cf260f7": "c6da3f48c8a4a3e676585e75e1a029e5",
".git/objects/ad/c7c6836cef1e869b137fb05f0a06d65be40c87": "b9e9d5e0d14559c299932e6eff08e54d",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b1/599af8628b2206c6c3e6fffdbce04dab2ebc36": "3fce4aa65f31e908c64d852008c79d16",
".git/objects/b1/6e94a267659432b622197a6b21b76ca34a27e1": "86e5377e9324fb4e8ba4331c3ea8eba5",
".git/objects/b2/f06fc5186778b8e423b839e9a2e9da943aa712": "ca7b5a52e826a37ce30e21e04ff68585",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ff14059bd703532f81fbfc28fabe7b373823d0": "c761f7c85f74efa7848fcb2b8ab1d551",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c6/fa5335220df924a1293a4b37078b448f12cf5b": "41ab185bf0f677ddb3f4dd2e7d28feea",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/828002071567375a35ad85b41f264e9be47488": "468220270c5e6317664ca33a3721eb92",
".git/objects/cb/cfba881474e9c1724372e2bcd882caa2168f8d": "98e258df6fb6928a5fc0f833390981c3",
".git/objects/cc/46f7304821963c25c2a2976c7e9a3577e8643f": "9823772f2aadf6f899325ba30b6fdaac",
".git/objects/cc/86fdc81326c75cde7b8b4c2d2f73930c6abb8e": "4b6f842a2b189353d09d2ef8d8965138",
".git/objects/cc/9a48413d469e6b597bc5d420ea3d00a62d0079": "8bf67722a8c9eb72e119b73bd23df602",
".git/objects/d3/78ee043ad76302ae4f86e45070f69185f8ea75": "866eed80a5c548834915a3278ebf6f8f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dd/924c1dc208973edeb7a261411d4d1626efadd7": "e946c3737e1291ac67a7fd2f581a12b7",
".git/objects/df/b3f847761148d521b8cfcc5e2560822f94c559": "8eeb6f5a6160fcd5df06fb38d1690fe8",
".git/objects/e1/43feba4faa8f26f7f8449c6995607f62a1eb5b": "cf4079c00e3c3769b6b87f5c6ec38400",
".git/objects/e3/35ce29ef86e08287370b50223f9c8cdd44e1c4": "1e7d9706487e53b6f14160e7ba0de7a4",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/7a132b390b2628ff07093287cbe33bc2a0bdec": "8bf79d090083979c1970e97fc0db6f71",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/12c90a3eff73d7ee7b85bf1c7629dee4e501bb": "ede02a38c6374ec11739d4ceb036f92f",
".git/objects/ef/7dde716de3eb7e707fefabe77bc5a799cce8f2": "ca69217f610bb834b46af34cefbc835e",
".git/objects/f2/4c3fe9f5ceef0ceb049089618c81788d8df07b": "28a10caf79cb01adea595cc195f0a44e",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/b8fdb6edbd27b729860fb6185be644079186aa": "3d71fcbe6ff4f5117766f64d607fd301",
".git/objects/fb/9a91140ff34a915e9fe4508a10c2716d5431bd": "3cac2df4d956b161759e8670c3594180",
".git/objects/fc/99090ed7a12f15b7c8a364c67c14d65a1b297f": "f3f8ce786555734796f354cd52246e75",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/cb150f219d5826118e5bb90795fd35ec3a5318": "6b520b0b68b05dd6d8cabba3b3160186",
".git/refs/heads/gh-pages": "4bc122d1e35200689c608b25a4b3ec80",
".git/refs/remotes/origin/gh-pages": "4bc122d1e35200689c608b25a4b3ec80",
"assets/AssetManifest.bin": "4316e05676dad4aa3322e14d76001c0b",
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
"flutter_bootstrap.js": "581d654d4dd1e3138cd15443cabc0fcf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a9f69b2eaf86acf31985e7c381fa47fd",
"/": "a9f69b2eaf86acf31985e7c381fa47fd",
"main.dart.js": "cf141d037138f5f95d37167290fc7e4d",
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
