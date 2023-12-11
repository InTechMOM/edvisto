import { getLoginUserData } from "../login/login.js";

export const setUserNameInNavBar = () => {
  const { name } = getLoginUserData();

  document.getElementById("nombreUsuario").innerText = name;
};

const irPaginaProyectos = () => {
  window.location.href = "/src/pages/proyectos.html";
};

setUserNameInNavBar();

document
  .getElementById("irProyecto")
  .addEventListener("click", irPaginaProyectos);

function irPaginaCalificaciones() {
  window.location.href = "/src/pages/calificaciones.html";
}

document
  .getElementById("irCalificacion")
  .addEventListener("click", irPaginaCalificaciones);
