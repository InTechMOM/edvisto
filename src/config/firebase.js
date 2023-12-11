import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

// Add Firebase products that you want to use
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJNkX9GYXk4hJbd4kYzaCw5ppJR0f_vP8",
  authDomain: "team-9-back-asp.firebaseapp.com",
  projectId: "team-9-back-asp",
  storageBucket: "team-9-back-asp.appspot.com",
  messagingSenderId: "760161682996",
  appId: "760161682996:web:f64b84cb4f3b36b0222c61",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseProvider = new GoogleAuthProvider();

//provider.addScope("127.0.0.1");
firebaseProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export { firebaseAuth, firebaseApp, firebaseProvider };
