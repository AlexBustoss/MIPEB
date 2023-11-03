const staticDevMipe = "MIPE-site-v3";
const assets = [
  "/MIPEv3",
  "/MIPEv3/index.html",
  "/MIPEv3/css/style.css",
  "/MIPEv3/js/app.js",
  "/MIPEv3/images/opera.jpg",
  "/MIPEv3/images/registro.jpg",
  "/MIPEv3/images/reporte.jpg",
  "/MIPEv3/images/clientes.jpg",
  "/MIPEv3/images/apoyo.jpg",
  "/MIPEv3/images/objetivo.jpg",
  "/MIPEv3/images/motivo.jpg",
  "/MIPEv3/images/info.jpg",
  "/MIPEv3/images/actualiza.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevMipe).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
