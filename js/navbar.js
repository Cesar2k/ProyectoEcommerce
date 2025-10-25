// === NAVBAR DINÁMICO === //
const estoyEnPages = window.location.pathname.includes("/pages/");
const baseHome   = estoyEnPages ? "../index.html"      : "./index.html";
const baseImg    = estoyEnPages ? "../img/"            : "./img/";
const basePages  = estoyEnPages ? "./"                 : "./pages/"; // para catmates, login, etc.

const NavItems = [
  { titulo: "Home",        url: baseHome },
  { titulo: "Mates",       url: basePages + "catmates.html" },
  { titulo: "Bombillas",   url: basePages + "catbombillas.html" },
  { titulo: "Extras",      url: basePages + "catextras.html" },
  { titulo: "Ingreso",     url: basePages + "login.html" },
  { titulo: "Registro",    url: basePages + "registrarse.html" },
  { titulo: "Cerrar sesión", url: "#", accion: "logout()" }
];

function CrearNavBar() {
  const header = document.querySelector("header");
  if (!header) return;

  const usuario = localStorage.getItem("usuario");
  const items = usuario ? NavItems : NavItems.filter(i => i.titulo !== "Cerrar sesión");

  header.innerHTML = `
    <nav>
      <a href="${baseHome}">
        <img src="${baseImg}leufumates.png" alt="Logo Leufu Mates" width="100" height="100">
      </a>
      <ul>
        ${items.map(item =>
          `<li><a href="${item.url}" ${item.accion ? `onclick="${item.accion}"` : ""}>${item.titulo}</a></li>`
        ).join("")}
      </ul>
    </nav>
  `;
}

document.addEventListener("DOMContentLoaded", CrearNavBar);

// === LOGIN === //
function login() {
  const email = document.getElementById("email")?.value || "";
  const password = document.getElementById("password")?.value || "";

  if (email === "admin@leufu.com" && password === "1234") {
    localStorage.setItem("usuario", email);
    alert("Inicio de sesión exitoso");
    window.location.href = baseHome; // vuelve al home según dónde estés
  } else {
    alert("Email o contraseña incorrectos");
  }
}

// === LOGOUT === //
function logout() {
  localStorage.removeItem("usuario");
  alert("Sesión cerrada");
  const loginUrl = basePages + "login.html";
  window.location.href = loginUrl;
}
