/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "02d53be752683473d28f0562e06f29f0"
  },
  {
    "url": "annotations.html",
    "revision": "05f6c1ce5223a38b08d949ce25929c4c"
  },
  {
    "url": "assets/css/0.styles.a357b656.css",
    "revision": "5d23dac85e0b08630c2b1f84949a016c"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.5f71d4e0.js",
    "revision": "0c0ec91d9ef05f97dd0e89e6e7570d1a"
  },
  {
    "url": "assets/js/11.eac7b4d2.js",
    "revision": "8fccb54d5ce91766c7ebe64b6af2f547"
  },
  {
    "url": "assets/js/12.c3cdf6e9.js",
    "revision": "de4ce551be0f5534196b3f52c1ece259"
  },
  {
    "url": "assets/js/13.9855fe0b.js",
    "revision": "7e6235f30e74ab986c38f45cddb7f754"
  },
  {
    "url": "assets/js/14.19995241.js",
    "revision": "685846c68b0b7a38eaafc1d19b5494f6"
  },
  {
    "url": "assets/js/15.351d3a10.js",
    "revision": "5c0c00997da5879a00cee6e0d04505fe"
  },
  {
    "url": "assets/js/16.2f6205a4.js",
    "revision": "86d6da6bca9be850ab1de0248f2aeb3a"
  },
  {
    "url": "assets/js/17.e6e88f5b.js",
    "revision": "39cd4cdc185ee3eab1e8d57f9faef1ae"
  },
  {
    "url": "assets/js/18.ad6b4ca3.js",
    "revision": "ecaf9d03f29474b3a4d19696e69f8cc8"
  },
  {
    "url": "assets/js/19.5f01507f.js",
    "revision": "32acb559e74c0572583efc89e9c9b92f"
  },
  {
    "url": "assets/js/2.ab57128e.js",
    "revision": "ba451933d5e22ba6a4d2f555b5dfe670"
  },
  {
    "url": "assets/js/20.71ce4d63.js",
    "revision": "c73ee0c2271fd21d80e1feb4ba42494f"
  },
  {
    "url": "assets/js/21.e6831800.js",
    "revision": "4f84bfa0a8bc7a8a7c1afbfbdc25d902"
  },
  {
    "url": "assets/js/22.99809c02.js",
    "revision": "3a1339dfc24856d71f6495ffba87d880"
  },
  {
    "url": "assets/js/23.85b8787d.js",
    "revision": "7749ec6c2b1ef846a7dc40956a55c1e9"
  },
  {
    "url": "assets/js/24.2eda5f6c.js",
    "revision": "9d894077eb64facc719b0872a77504d6"
  },
  {
    "url": "assets/js/25.983e246c.js",
    "revision": "00428c9440900f0ffa019865c73795f3"
  },
  {
    "url": "assets/js/26.dba59441.js",
    "revision": "75d9631cad38a7f4cf4773a3a6701dfc"
  },
  {
    "url": "assets/js/3.52dba517.js",
    "revision": "fae6523b80baa5f7dafce71fcadd106c"
  },
  {
    "url": "assets/js/4.031e9d49.js",
    "revision": "0e527dfb88cad497c83796bd9fa2f76c"
  },
  {
    "url": "assets/js/5.c2aa3cf6.js",
    "revision": "78c846ee6169769b75d7f2115011d925"
  },
  {
    "url": "assets/js/6.c07319d3.js",
    "revision": "0d65c98e84d4d7138dbb983f7cd4ff11"
  },
  {
    "url": "assets/js/7.4c1bf811.js",
    "revision": "b9f980ff418a55dc941eb7272ad0533a"
  },
  {
    "url": "assets/js/8.917ad71a.js",
    "revision": "c0d385fa1af27cdc0874037530a2178c"
  },
  {
    "url": "assets/js/9.012233c7.js",
    "revision": "ef3341727fb2ae47297b6a8cc55fc655"
  },
  {
    "url": "assets/js/app.fc707742.js",
    "revision": "fdcc5fbb99f8e0a927fed6b065809a65"
  },
  {
    "url": "authentication.html",
    "revision": "b0d65f448ef0c0a3cfdff8d2f1768c36"
  },
  {
    "url": "decorators.html",
    "revision": "9a8c9a05332dade673e4eeacbecbf352"
  },
  {
    "url": "descriptions.html",
    "revision": "710e607c21ce399d97dc9f52d6a16407"
  },
  {
    "url": "di.html",
    "revision": "c8d7c9cd88d8637fc5bb0428ece28c2a"
  },
  {
    "url": "error-handling.html",
    "revision": "3254a339c4230d0107928090afc85d98"
  },
  {
    "url": "examples.html",
    "revision": "66122d555f352b2b3504b5786c546f9d"
  },
  {
    "url": "faq.html",
    "revision": "f3447dc8b3197585f82f1199fcfa41cb"
  },
  {
    "url": "file-upload.html",
    "revision": "a8c5b906e6057697479707e877c40d45"
  },
  {
    "url": "generating.html",
    "revision": "9b73a2adcb345cd4675353924d1b86b7"
  },
  {
    "url": "getting-started.html",
    "revision": "f77daddd3556a376d156c66506b24f35"
  },
  {
    "url": "index.html",
    "revision": "efa0778c8066054455cf08d1c4be559a"
  },
  {
    "url": "introduction.html",
    "revision": "b073f35ce6f82d1afff56a5e8c81d312"
  },
  {
    "url": "live-reloading.html",
    "revision": "c2f87de648f314ed8ddb2f25100e2b5f"
  },
  {
    "url": "path-mapping.html",
    "revision": "235c6afe3182ee196673cc3ab8e75db1"
  },
  {
    "url": "routes.html",
    "revision": "4c8a7329269eced8714497b73b065fc4"
  },
  {
    "url": "templates.html",
    "revision": "239ac0e4004dc3871ad3ec87848dd4e3"
  },
  {
    "url": "upgrading.html",
    "revision": "2e1bbbd529ae3544a03194f2df6314b2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
