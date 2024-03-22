// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPJarCTbL3QhfeyuXRJrGd3sbJotwKdzY",
  authDomain: "restaurant-gericht.firebaseapp.com",
  projectId: "restaurant-gericht",
  storageBucket: "restaurant-gericht.appspot.com",
  messagingSenderId: "475319212100",
  appId: "1:475319212100:web:6389bac872d28af7b0c411",
  measurementId: "G-8CM2C43WEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);