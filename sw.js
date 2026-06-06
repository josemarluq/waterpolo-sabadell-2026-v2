const CACHE='wp-sabadell-2026-v1';
const ASSETS=['./','./index.html','./campeonato.json','./manifest.json','./icon-192.png','./icon-512.png','./logos/generic.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
