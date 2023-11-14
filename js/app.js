const container = document.querySelector(".container");
const icons = [
  {
    name: "Ventas",
    image: "images/ventas.jpg",
    link: "Ingresos/ventas.html"
  },
  {
    name: "Gastos",
    image: "images/gastos.jpg",
    link: "Gastos/index.html"
  },
  {
    name: "Alta de productos",
    image: "images/registro.jpg",
    link: "Productos/index.html"
  },
  {
    name: "Clientes",
    image: "images/clientes.jpg",
    link: "Clientes/index.html"
  },
  {
    name: "Reporte Ventas",
    image: "images/reporte.jpg",
    link: "ReporteV/index.html"
  },
  {
    name: "Reporte Gastos",
    image: "images/apoyo.jpg",
    link: "ReporteG/index.html"
  },
  {
    name: "Historial Ventas",
    image: "images/objetivo.jpg",
    link: "HistoriaV/index.html"
  },
  {
    name: "Historial Gastos",
    image: "images/motivo.jpg",
    link: "HistoriaG/index.html"
  },
  {
    name: "Sobre Nosotros",
    image: "images/actualiza.jpg",
    link: "Actualizar/index.html"
  }
];
const showIcon = () => {
  let output = "";
  icons.forEach(
    ({ name, image, link}) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${link}>IR</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showIcon);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/MIPE/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
