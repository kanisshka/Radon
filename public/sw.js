if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        i[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const i = document.createElement("script");
              (i.src = e), document.head.appendChild(i), (i.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
          return i[e];
        })
      );
    },
    s = (s, i) => {
      Promise.all(s.map(e)).then((e) => i(1 === e.length ? e[0] : e));
    },
    i = { require: Promise.resolve(s) };
  self.define = (s, a, n) => {
    i[s] ||
      (i[s] = Promise.resolve().then(() => {
        let i = {};
        const c = { uri: location.origin + s.slice(1) };
        return Promise.all(
          a.map((s) => {
            switch (s) {
              case "exports":
                return i;
              case "module":
                return c;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = n(...e);
          return i.default || (i.default = s), i;
        });
      }));
  };
}
define("./sw.js", ["./workbox-ea903bce"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/06599e9b7e4619afe35348822645792a247b32b8.3e5d587f818acc6a9023.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/16.f1ffbf0feedef21bd425.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/35ac1d1c82ffabf4df797f45397377bc643d997a.cc70864af42c5a426b01.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/4b05817cff8afa43fd7d7e76daf673d0bc6ebf7c.ba73e2d46cf95459c1d0.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/5b2cc9ee259201d405a6f01ce0124d4c9f878601.eeb66227d92bffa47659.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/5c6bfb76e321174ef2cfc53e194e904c267450e6.bf2380c3f1100ba6ccff.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/63f3a80e7154d357c97cbb123248a459f800d742.65999963cbe9e0fd10d4.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/73aa2424849aedcbf5ab30761efda8c9e43b2bf0.d1086c17a12f1175f8d4.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/75fc9c18.1035252014c3089024e6.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/776e3cadf17ad075cc607b5ad3c431c88fe1051b.b35a817f491908e64d84.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/84f72f710ff8ce0fb18f62e2eedff713b686478c.b76f8338631dfd414fb4.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/8db729d1149d92dd6aae64d4f11c594264c819d8.aa7442e95ab7107e7d42.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/b0b6e529a29fed67670e325442374ee948de6db6.263d129320f810e9d875.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/b3b6bf18eb1baf6ae7c3d6ba4ccc144ed6cb7130.a39ffc27e9f9cd9746f4.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/d29cb943cd28777b308c218246035fb6e568b67e.5c3b22bc5e17b1375a1c.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/framework.f8bd46fc02868c500bda.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/main-0c24ab85506770218821.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/404-88b070127e3f5131e893.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/500-5bb01d82355afe5703b1.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/_app-0fbff5cf9b0f22e05e98.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/_error-4c26e56ec030d95b1635.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/about-bf1e353dd780fc079c9a.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/admin-bc9cddbd097580a04b55.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/admin/add-category-0d0294deae67b0be3d39.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/admin/add-product-cc751b39dacd876c0e68.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/admin/dashboard-a3fc78834e8010f97ad6.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/admin/products-8f801293e8b3c29415b4.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/admin/update-product/%5Bid%5D-9f59f320c7db9d9ce47a.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/admin/users-755761eb59cdb7d76e57.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/cart-729f2585534190e2f005.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/index-e5f4d2d0fb1ea126520a.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/order-details/%5Bid%5D-839897a2c48c8fc651ed.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/orders-d753b5c28a503ef11584.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/product-details/%5Bid%5D-00bba12fdac7f7d27dbc.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/profile-a3690a8a094d27b0dabf.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/pages/success-02a4bf22ffb72b5a85ca.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/polyfills-9833fce64ddcd9890799.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/chunks/webpack-c2d059098954899db168.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/css/3b14d587550b147bff4f.css",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/vh8e_tRifVUngSOTraP99/_buildManifest.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        {
          url: "/_next/static/vh8e_tRifVUngSOTraP99/_ssgManifest.js",
          revision: "vh8e_tRifVUngSOTraP99",
        },
        { url: "/img/Radon.svg", revision: "101b22c50a8621bbd312456d12a35b02" },
        {
          url: "/img/authentication.svg",
          revision: "fa4053c42eb8284549ed2c0aa6b6c150",
        },
        { url: "/img/empty.svg", revision: "b305789a59031cf0fe31885ed2ec3aa0" },
        {
          url: "/img/empty_cart.svg",
          revision: "1d5d13dce2ed9dee220ded46b074cc7d",
        },
        {
          url: "/img/favicons/android-chrome-192x192.png",
          revision: "236deea7d5a52b10b7fbae9fa58924aa",
        },
        {
          url: "/img/favicons/android-chrome-512x512.png",
          revision: "1cdb449bf5694fe7c3fa32f1f06dfe73",
        },
        {
          url: "/img/favicons/apple-touch-icon.png",
          revision: "2dae7ec1b88c3dbe921e227cca0275a5",
        },
        {
          url: "/img/favicons/browserconfig.xml",
          revision: "38e0d5e6889d7aa3815fe68056fb3fcc",
        },
        {
          url: "/img/favicons/favicon-16x16.png",
          revision: "6f050891ea8218c13a93f4edcbe658b3",
        },
        {
          url: "/img/favicons/favicon-32x32.png",
          revision: "365f2c8b3e493ee82416a874f7a8f06c",
        },
        {
          url: "/img/favicons/favicon.ico",
          revision: "b4c6b400421ada51c8d7e707461248d9",
        },
        {
          url: "/img/favicons/mstile-144x144.png",
          revision: "819b9e1e9ceab1d1d9bf9886f0a9728f",
        },
        {
          url: "/img/favicons/mstile-150x150.png",
          revision: "448ec3bcbf2618f97d5cebaa39056be7",
        },
        {
          url: "/img/favicons/mstile-310x150.png",
          revision: "0fe2c90b9709c90512df6b676c0899b3",
        },
        {
          url: "/img/favicons/mstile-310x310.png",
          revision: "f0192b30821faae3c434793aba3a2d1d",
        },
        {
          url: "/img/favicons/mstile-70x70.png",
          revision: "132d356fc19147eb27c4d91629e35596",
        },
        {
          url: "/img/favicons/safari-pinned-tab.svg",
          revision: "0af2867b804ab32494a7213317b4abdf",
        },
        {
          url: "/img/favicons/site.webmanifest",
          revision: "6af3409002f42715af1cf677837deb6b",
        },
        { url: "/img/hero.svg", revision: "c392a959fc1257205fc4f4fb7e177476" },
        {
          url: "/img/profile_pic.svg",
          revision: "4cef916b26cc5e5adc6545ccdc02b205",
        },
        {
          url: "/img/programming.svg",
          revision: "01a2c686cc3e525d2e920dbc99af6737",
        },
        {
          url: "/img/social/email.svg",
          revision: "4af15de585c06a5be03669d66eda3b1d",
        },
        {
          url: "/img/social/github.svg",
          revision: "c43c197b5418b5cbba66bb327ecdab2c",
        },
        {
          url: "/img/social/linkedin.svg",
          revision: "c6681bcbd77af1ba984875187d522485",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: i,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-media-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
