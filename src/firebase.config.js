// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATwhtPtSto0QrtnCvWdftzc8h9S0sMVrM",
  authDomain: "event-management-61f07.firebaseapp.com",
  projectId: "event-management-61f07",
  storageBucket: "event-management-61f07.appspot.com",
  messagingSenderId: "300810523601",
  appId: "1:300810523601:web:86342b19d893ff1ff186f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
