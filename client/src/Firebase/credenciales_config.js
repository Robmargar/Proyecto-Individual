import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// const  APIKEY = process.env.REACT_APP_APIKEY;
// console.log(APIKEY);
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// const firebaseConfig = {
//   apiKey: REACT_APP_APIKEY,
//   authDomain: REACT_APP_AUTH_DOMAIN,
//   projectId: REACT_APP_PROJECT_ID,
//   storageBucket: REACT_APP_STORAGEBUCKET,
//   messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
//   appId: REACT_APP_APP_ID,
// };

// Your web app's Firebase configuration
// Insertar aquí las credenciales que se importaron al archivo de variables de entorno
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
