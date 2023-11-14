const staticDevMipe = "MIPE-site";
const assets = [
  "/MIPE",
  "/MIPE/index.html",
  "/MIPE/css/style.css",
  "/MIPE/js/app.js",
  "/MIPE/images/opera.jpg",
  "/MIPE/images/registro.jpg",
  "/MIPE/images/reporte.jpg",
  "/MIPE/images/clientes.jpg",
  "/MIPE/images/apoyo.jpg",
  "/MIPE/images/objetivo.jpg",
  "/MIPE/images/motivo.jpg",
  "/MIPE/images/info.jpg",
  "/MIPE/images/actualiza.jpg"
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
