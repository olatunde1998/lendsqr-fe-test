// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1WWImWMpCZ2_iba8ZBcjgQ0ya-NgZUvc",
  authDomain: "ledsqr-fe-login-db.firebaseapp.com",
  projectId: "ledsqr-fe-login-db",
  storageBucket: "ledsqr-fe-login-db.appspot.com",
  messagingSenderId: "215662960298",
  appId: "1:215662960298:web:41de768f1456cd469dfad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
