const productos = [
  //MATES
  { id: 1, nombre: "Mate Torpedo", descripcion: "Calabaza natural con virola de acero", precio: 30000, tipo: "mate", imagen: "../img/torpedo.jpg" },
  { id: 2, nombre: "Mate Imperial Base Alpaca", descripcion: "Calabaza pulida con base de alpaca artesanal", precio: 40000, tipo: "mate", imagen: "../img/imperial base alpaca.JPEG" },
  { id: 3, nombre: "Mate Camionero", descripcion: "Mate robusto de calabaza con boca ancha", precio: 25000, tipo: "mate", imagen: "../img/camionero.JPEG" },
  { id: 4, nombre: "Mate Calabaza", descripcion: "Mate clásico de calabaza con base de bolitas", precio: 45000, tipo: "mate", imagen: "../img/imperial base bolita.JPEG" },

  //BOMBILLAS
  { id: 5, nombre: "Bombilla Pico Loro 17cm", descripcion: "Acero inoxidable, filtro desmontable", precio: 12000, tipo: "bombilla", imagen: "../img/bombilla 17.jpg" },
  { id: 6, nombre: "Bombilla Pico Loro 15cm", descripcion: "Acero inoxidable, diseño compacto", precio: 10000, tipo: "bombilla", imagen: "../img/bombilla 15.jpg" },
  { id: 7, nombre: "Bombilla Plana", descripcion: "Acero inoxidable, estilo clásico", precio: 8000, tipo: "bombilla", imagen: "../img/plana.jpg" },

  //EXTRAS
  { id: 8, nombre: "Tapa Antiviento", descripcion: "Protege la yerba del viento", precio: 20000, tipo: "extra", imagen: "../img/tapa anti viento.jpg" },
  { id: 9, nombre: "Canasto para palanca de cambios", descripcion: "Accesorio de cuero artesanal", precio: 20000, tipo: "extra", imagen: "../img/canasto cuero para auto.jpg" },
  { id: 10, nombre: "Canasto cuero color Borravino", descripcion: "Hecho a mano, ideal para guardar bombillas", precio: 30000, tipo: "extra", imagen: "../img/canasto cuero.jpg" }

  
];

function mostrarProductos(tipo) {
  const contenedor = document.querySelector(".card-container");
  if (!contenedor) return;

  const filtrados = productos.filter(p => p.tipo === tipo);
  contenedor.innerHTML = "";

  filtrados.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" width="250" height="300">
      <h2>${p.nombre}</h2>
      <p>${p.descripcion}</p>
      <p><strong>$${p.precio.toLocaleString("es-AR")}</strong></p>
      <div class="contador">
        <button class="menos">-</button>
        <span class="cantidad">1</span>
        <button class="mas">+</button>
      </div>
      <button class="agregar">Añadir al carrito</button>
    `;
    contenedor.appendChild(card);
  });

  // Funcionalidad de los botones
  contenedor.querySelectorAll(".card").forEach(card => {
    const span = card.querySelector(".cantidad");
    card.querySelector(".mas").onclick = () => span.textContent = +span.textContent + 1;
    card.querySelector(".menos").onclick = () => {
      if (+span.textContent > 1) span.textContent--;
    };
  });
}
