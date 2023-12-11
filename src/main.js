import {
  getLoginUserData,
  loginWithGoogle,
  regularLogin,
} from "./pages/login/login.js";

export const serverUrl = "http://localhost:3000";

export const isUserLogged = () => {
  return !!localStorage.getItem("edVistoUser");
};

if (isUserLogged() && location.pathname === "/index.html") {
  const { rol } = getLoginUserData();

  const redirectionUrl = `src/pages/${
    rol === "teacher" ? "misClases" : "estudiante"
  }.html`;

  location.href = redirectionUrl;
} else if (location.pathname === "/index.html") {
  const googleLoginButton = document.getElementById("google_login_button");
  googleLoginButton.addEventListener("click", (e) => {
    e.preventDefault();
    loginWithGoogle(e);
  });

  // Asignar la función login al evento 'submit' del formulario
  document
    .getElementById("login_form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      await regularLogin(e);
    });
}
