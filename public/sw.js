if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const o=e=>a(e,c),t={module:{uri:c},exports:r,require:o};s[c]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(i(...e),r)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/S-aw-raozkUKnfNWDHs25/_buildManifest.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/S-aw-raozkUKnfNWDHs25/_middlewareManifest.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/S-aw-raozkUKnfNWDHs25/_ssgManifest.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/27-4e2edac4f3be31aa.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/304-0a384c7b1252cce4.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/37-22f6c51ffda8df1c.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/509-fcbb1583f1dea53a.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/518-ae2a3b43cb46cc43.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/593-cf472b79a6c93fd8.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/722-42485a8b73c68595.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/754.f4ef2670733aa20a.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/916-880272c1dfb54356.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/935.eee2fe396efacb35.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/981-e8e4c03544c5d340.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/framework-84f2ad681109ba1f.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/main-50770868367ef490.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/404-d9f71509e988656a.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/_app-8a7a25d96e84dc0b.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/dashboard-fdfc2c4588dc2e23.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/dashboard/one-30a2b4b285ea85a5.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/dashboard/three-2e7ee2e6fe165f0c.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/dashboard/two-367a47f343440f6c.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/dashboard/user-582b40d24ab1963b.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/dashboard/user/five-f3167838e634a793.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/dashboard/user/four-9ee6402524077ff3.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/dashboard/user/six-d120fd4d798e68da.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/imouto-4b559b6775630112.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/pages/index-8331d8e75bf01f8d.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/chunks/webpack-61ed4329b47a6a5f.js",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/_next/static/css/0b47a339b9d73995.css",revision:"S-aw-raozkUKnfNWDHs25"},{url:"/browserconfig.xml",revision:"66a5fc21c50233f9ffdf973a0aaded6e"},{url:"/favicon/android-chrome-192x192.png",revision:"1b46c388d26aff2f140bb26bf26587c5"},{url:"/favicon/android-chrome-512x512.png",revision:"7eb069cf3b940a46d16331ef03362848"},{url:"/favicon/apple-touch-icon.png",revision:"fe10556dfc8412701e7b156d8a7d5a6f"},{url:"/favicon/favicon-16x16.png",revision:"48f0189b23a034b4b4258060ffab8c89"},{url:"/favicon/favicon-32x32.png",revision:"3f241cf1f31d46cde48290cb1fc4527e"},{url:"/favicon/favicon.ico",revision:"d93279bede2de201947d25b6b2be17df"},{url:"/favicon/mstile-150x150.png",revision:"c7d9d7c3c5b792bb4d2f29f13abf8223"},{url:"/favicon/safari-pinned-tab.svg",revision:"a7a99c0d390ec20a7d472372eca5c6fd"},{url:"/fonts/CircularStd-Bold.otf",revision:"e7d8d6236925285b4445f933aebb68f3"},{url:"/fonts/CircularStd-Book.otf",revision:"4f84355b5c00ed31cdcf994158c0af39"},{url:"/fonts/CircularStd-Medium.otf",revision:"35be8fce7bdccf610b76528990f76136"},{url:"/fonts/Roboto-Bold.ttf",revision:"e07df86cef2e721115583d61d1fb68a6"},{url:"/fonts/Roboto-Regular.ttf",revision:"11eabca2251325cfc5589c9c6fb57b46"},{url:"/fonts/index.css",revision:"4c7a5e4920b4530b112c04a9c760b0b4"},{url:"/icons/ic_analytics.svg",revision:"356b7f532a580f07b8b7e0f86fe5ceea"},{url:"/icons/ic_banking.svg",revision:"2fbef8a04e04326f2a917543e6722cfb"},{url:"/icons/ic_blog.svg",revision:"a34c0d3046096c4dc3a90e79ab57a6c3"},{url:"/icons/ic_booking.svg",revision:"19db467e176f85ee8aaace5b967cafef"},{url:"/icons/ic_calendar.svg",revision:"e821271a8dc5273615571b7d283e9242"},{url:"/icons/ic_cart.svg",revision:"aa9740e3d3a44f6c9cb3f98f2c0f781e"},{url:"/icons/ic_chat.svg",revision:"704e574bfeb926d5cdc389c5d2c38813"},{url:"/icons/ic_dashboard.svg",revision:"bd60ee7c05e71db0a13684ec8180729c"},{url:"/icons/ic_ecommerce.svg",revision:"5989fd7d993b35515795eed22e988e27"},{url:"/icons/ic_kanban.svg",revision:"331ede8aa99ae81f26b7b81dc941690c"},{url:"/icons/ic_mail.svg",revision:"0422394bed25c0bbd0f2f9e7ba17e01e"},{url:"/icons/ic_user.svg",revision:"46ef665540a7ecf243bd91a44e35b570"},{url:"/logo/logo_full.jpg",revision:"ea3206d2edb3605cefbd555ccaf919b2"},{url:"/logo/logo_full.svg",revision:"b3225e6e195eb86367125f7a8cd94ba1"},{url:"/logo/logo_single.svg",revision:"117be1751c5e71cf16f6ea4792afc55b"},{url:"/manifest.json",revision:"c59cbcd2b8516819c402993987ab09a7"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
