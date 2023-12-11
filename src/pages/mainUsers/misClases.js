import { getLoginUserData } from "../login/login.js";

export const setUserNameInNavBar = () => {
  const { name } = getLoginUserData();

  document.getElementById("nombreUsuario").innerText = name;
};

const irPaginaProyectos = () => {
  window.location.href = "../proyectos.html";
};

setUserNameInNavBar();

document
  .getElementById("irProyecto")
  .addEventListener("click", irPaginaProyectos);

function irPaginaCalificaciones() {
  window.location.href = "../calificaciones.html";
}

document
  .getElementById("irCalificacion")
  .addEventListener("click", irPaginaCalificaciones);
