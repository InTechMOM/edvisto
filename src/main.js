import {
  isUserLogged,
  loginWithGoogle,
  regularLogin,
} from "./pages/login/login.js";

export const serverUrl = "${serverUrl}";

if (isUserLogged()) {
  const redirectionUrl = `src/pages/${
    localStorage.getItem("rol") === "teacher" ? "misClases" : "estudiante"
  }.html`;

  location.href = redirectionUrl;
}

const googleLoginButton = document.getElementById("google_login_button");
googleLoginButton.addEventListener("click", (e) => {
  e.preventDefault();
  loginWithGoogle(e);
});

// Asignar la función login al evento 'submit' del formulario
document.getElementById("login_form").addEventListener("submit", async (e) => {
  e.preventDefault();
  await regularLogin(e);
});
