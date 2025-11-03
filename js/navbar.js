  //  NAVBAR DINÁMICO  //  
  // Detecta si está en una página dentro de /pages/ para ajustar rutas. Importante para que no se rompan las imagenes  y links.
  const estoyEnPages = window.location.pathname.includes("/pages/");
  const baseHome   = estoyEnPages ? "../index.html" : "./index.html";
  const baseImg    = estoyEnPages ? "../img/" : "./img/";
  const basePages  = estoyEnPages ? "./" : "./pages/"; // para catmates, login, etc.

  const NavItems = [  //todos los elementos/items del navbar
    { titulo: "Home",        url: baseHome },
    { titulo: "Mates",       url: basePages + "catmates.html" },
    { titulo: "Bombillas",   url: basePages + "catbombillas.html" },
    { titulo: "Extras",      url: basePages + "catextras.html" },
    { titulo: "Ingreso",     url: basePages + "login.html" },
    { titulo: "Registro",    url: basePages + "registrarse.html" },
    { titulo: "Cerrar sesión", url: "#", accion: "logout()" }
  ];

  function CrearNavBar() {                                  //genera el navbar dinámicamente
    const header = document.querySelector("header");        //selecciona el header
    if (!header) return;                                    //si no existe el header, sale de la función

    const usuario = localStorage.getItem("usuario");       //verifica si hay un usuario logueado
    const items = usuario ? NavItems : NavItems.filter(i => i.titulo !== "Cerrar sesión");  //si hay usuario, muestra todo; si no, oculta "Cerrar sesión"

    header.innerHTML =                                    //genera el HTML del navbar
     `
      <nav>
        <a href="${baseHome}">
          <img src="${baseImg}leufumates.png" alt="Logo Leufu Mates" width="100" height="100">
        </a>
        <ul>
          ${items.map(item =>
            `<li><a href="${item.url}" ${item.accion ? `onclick="${item.accion}"` : ""}>${item.titulo}</a></li>` //si el item tiene una acción, la agrega al enlace
          ).join("")} 
        </ul>
      </nav>
    `;  
  } //aunque lo hice con .map y .join, tambien podemos armar el navbar con un forEach y concatenando strings.

  document.addEventListener("DOMContentLoaded", CrearNavBar);  //crea el navbar cuando el DOM esté cargado. DOM = Document Object Model(API que representa la estructura del documento HTML)

  //  LOGIN  //
  function login() {                                                     //función para manejar el login
    const email = document.getElementById("email")?.value || "";         //obtiene el valor del email
    const password = document.getElementById("password")?.value || "";    //obtiene el valor de la contraseña

    if (email === "admin@leufu.com" && password === "1234") {             //verifica las credenciales (con mail y contraseña fijas para este ejemplo)
      localStorage.setItem("usuario", email);                             //guarda el usuario en localStorage
      console.log("Inicio de sesión exitoso");                            // muestra un mensaje de éxito
      window.location.href = baseHome;                                   // vuelve al home según dónde estés
    } else {
      alert("Email o contraseña incorrectos");
    }
  }

  // LOGOUT CIERRE //
  function logout() {                                               //función para manejar el logout
    localStorage.removeItem("usuario");                             //elimina el usuario de localStorage
    console.log("Sesion cerrada con exito");                                       // muestra un mensaje de cierre de sesión. tambien se puede usar alert()
    const loginUrl = basePages + "login.html";                      // redirige a la página de login
    window.location.href = loginUrl;                                // redirige a login según dónde estés
  }
