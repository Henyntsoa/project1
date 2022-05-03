// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB2IydaINhjqqJxJaqt3p8HhtnGRQVLG4",
  authDomain: "fireblogs-93e33.firebaseapp.com",
  projectId: "fireblogs-93e33",
  storageBucket: "fireblogs-93e33.appspot.com",
  messagingSenderId: "77277644954",
  appId: "1:77277644954:web:d02a8688c754c689387723",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
export { auth };
