// // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";


// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeZ0zRhzZSb5Ga_kU8XS7LbCKBxb9q1x8",
    authDomain: "ecommerce-80d56.firebaseapp.com",
    projectId: "ecommerce-80d56",
    storageBucket: "ecommerce-80d56.appspot.com",
    messagingSenderId: "771485499061",
    appId: "1:771485499061:web:2260f4e61c1a49428ec8fc",
    measurementId: "G-C68DWE4265"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();