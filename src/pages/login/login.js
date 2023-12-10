import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import {
  firebaseAuth,
  firebaseApp,
  firebaseProvider,
} from "../../config/firebase.js";

export const loginWithGoogle = () => {
  signInWithPopup(firebaseAuth, firebaseProvider)
    .then((result) => {
      const credential = firebaseProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = firebaseProvider.credentialFromError(error);
      // ...
    });
};

export const regularLogin = async (e) => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const data = {
    email: email,
    password: password,
  };

  const { message, email: userEmail, name, course } = await loginUser(data);

  if (message === "Welcome teacher") {
    setUserData({ userEmail, name, message });

    location.href = "/src/pages/misClases.html";
  } else if (message === "Welcome student") {
    setUserData({ userEmail, name, message, course });

    //  ir a inicio para alumnos
    location.href = "/src/pages/estudiante.html";
  } else {
    alert("Usuario y/o contraseña equivocados");
  }
};

export const loginUser = async (data) => {
  const response = await fetch(`${serverUrl}/api/login`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match “Content-Type” header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

export const setUserData = ({ userEmail: email, name, message, course }) => {
  console.log({
    message,
    email,
    name,
    ...(course & { course }),
  });
  localStorage.setItem(
    "edVistoUser",
    JSON.stringify({
      rol: message === "Welcome student" ? "student" : "teacher",
      email,
      name,
      ...(course & { course }),
    })
  );
};

export const isUserLogged = () => {
  console.log(
    localStorage.getItem("edVistoUser"),
    !!localStorage.getItem("edVistoUser")
  );
  return !!localStorage.getItem("edVistoUser");
};
