//ARRAY DE PRODUCTOS
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

  //EXTRASs
  { id: 8, nombre: "Tapa Antiviento", descripcion: "Protege la yerba del viento", precio: 20000, tipo: "extra", imagen: "../img/tapaantiviento.jpg" },
  { id: 9, nombre: "Canasto para palanca de cambios", descripcion: "Accesorio de cuero artesanal", precio: 20000, tipo: "extra", imagen: "../img/canasto cuero para auto.jpg" },
  { id: 10, nombre: "Canasto cuero color Borravino", descripcion: "Hecho a mano, ideal para guardar bombillas", precio: 30000, tipo: "extra", imagen: "../img/canasto cuero.jpg" }

  
];
//FUNCION PARA MOSTRAR PRODUCTOS SEGUN TIPO
function mostrarProductos(tipo) {                            //Recibe "mate", "bombilla" o "extra" y genera las cards 
  const contenedor = document.querySelector(".card-container");
  if (!contenedor) return;                                   //si el contenedor no existe, sale de la función

  const filtrados = productos.filter(p => p.tipo === tipo);  //filtra el array por el tipo recibido
  contenedor.innerHTML = "";                                 //limpia el contenedor antes de agregar nuevos productos

  filtrados.forEach(p => {                                   //por cada producto filtrado, crea una card
    const card = document.createElement("div");              // crea un div para la card
    card.classList.add("card");                              // agrega la clase "card" al div
    card.innerHTML =                                         
    `                                       
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
    contenedor.appendChild(card);                           //agrega la card al contenedor
  });

  // Funcionalidad de los botones
  contenedor.querySelectorAll(".card").forEach(card => {     //para cada card, agrega funcionalidad a los botones
    const span = card.querySelector(".cantidad");           // selecciona el span que muestra la cantidad
    card.querySelector(".mas").onclick = () => span.textContent = +span.textContent + 1;  //incrementa la cantidad al hacer clic en "+"
    card.querySelector(".menos").onclick = () => {          //decrementa la cantidad al hacer clic en "-"
      if (+span.textContent > 1) span.textContent--;        // no permite que la cantidad sea menor a 1
    };
  });
}
