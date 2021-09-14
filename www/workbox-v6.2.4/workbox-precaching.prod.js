this.workbox=this.workbox||{},this.workbox.precaching=function(t,e,s,n,i,c,r,o){"use strict";try{self["workbox:precaching:6.2.4"]&&_()}catch(t){}function a(t){if(!t)throw new s.WorkboxError("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s.WorkboxError("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),c=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",e),{cacheKey:i.href,url:c.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class l{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=e&&e.cacheKey||this.Y.getCacheKeyForURL(t.url);return s?new Request(s):t},this.Y=t}}class u extends c.Strategy{constructor(t={}){t.cacheName=e.cacheNames.getPrecacheName(t.cacheName),super(t),this.Z=!1!==t.fallbackToNetwork,this.plugins.push(u.copyRedirectedCacheableResponsesPlugin)}async _handle(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.tt(t,e):await this.et(t,e))}async et(t,e){let n;if(!this.Z)throw new s.WorkboxError("missing-precache-entry",{cacheName:this.cacheName,url:t.url});return n=await e.fetch(t),n}async tt(t,e){this.st();const n=await e.fetch(t);if(!await e.cachePut(t,n.clone()))throw new s.WorkboxError("bad-precaching-response",{url:t.url,status:n.status});return n}st(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==u.copyRedirectedCacheableResponsesPlugin&&(n===u.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(u.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}u.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},u.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await i.copyResponse(t):t};class f{constructor({cacheName:t,plugins:s=[],fallbackToNetwork:n=!0}={}){this.nt=new Map,this.it=new Map,this.ct=new Map,this.rt=new u({cacheName:e.cacheNames.getPrecacheName(t),plugins:[...s,new l({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.rt}precache(t){this.addToCacheList(t),this.ot||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.ot=!0)}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:i}=a(n),c="string"!=typeof n&&n.revision?"reload":"default";if(this.nt.has(i)&&this.nt.get(i)!==t)throw new s.WorkboxError("add-to-cache-list-conflicting-entries",{firstEntry:this.nt.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.ct.has(t)&&this.ct.get(t)!==n.integrity)throw new s.WorkboxError("add-to-cache-list-conflicting-integrities",{url:i});this.ct.set(t,n.integrity)}if(this.nt.set(i,t),this.it.set(i,c),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return n.waitUntil(t,(async()=>{const e=new h;this.strategy.plugins.push(e);for(const[e,s]of this.nt){const n=this.ct.get(s),i=this.it.get(e),c=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:c,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return n.waitUntil(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.nt.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.nt}getCachedURLs(){return[...this.nt.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.nt.get(e.href)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new s.WorkboxError("non-precached-url",{url:t});return s=>(s.request=new Request(t),s.params=Object.assign({cacheKey:e},s.params),this.strategy.handle(s))}}let w;const d=()=>(w||(w=new f),w);class y extends o.Route{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const t of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const c=new URL(t,location.href);c.hash="",yield c.href;const r=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(c,e);if(yield r.href,s&&r.pathname.endsWith("/")){const t=new URL(r.href);t.pathname+=s,yield t.href}if(n){const t=new URL(r.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:c});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(t);if(e)return{cacheKey:e}}}),t.strategy)}}function p(t){const e=d(),s=new y(e,t);r.registerRoute(s)}function R(t){d().precache(t)}return t.PrecacheController=f,t.PrecacheFallbackPlugin=class{constructor({fallbackURL:t,precacheController:e}){this.handlerDidError=()=>this.Y.matchPrecache(this.at),this.at=t,this.Y=e||d()}},t.PrecacheRoute=y,t.PrecacheStrategy=u,t.addPlugins=function(t){d().strategy.plugins.push(...t)},t.addRoute=p,t.cleanupOutdatedCaches=function(){self.addEventListener("activate",(t=>{const s=e.cacheNames.getPrecacheName();t.waitUntil((async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t));return await Promise.all(s.map((t=>self.caches.delete(t)))),s})(s).then((t=>{})))}))},t.createHandlerBoundToURL=function(t){return d().createHandlerBoundToURL(t)},t.getCacheKeyForURL=function(t){return d().getCacheKeyForURL(t)},t.matchPrecache=function(t){return d().matchPrecache(t)},t.precache=R,t.precacheAndRoute=function(t,e){R(t),p(e)},t}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core,workbox.strategies,workbox.routing,workbox.routing);
//# sourceMappingURL=workbox-precaching.prod.js.map
