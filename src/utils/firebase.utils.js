// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJXV3rN_dmsLldKlhz0R1VAs9NSasMfJY",
  authDomain: "sheela-showcase.firebaseapp.com",
  projectId: "sheela-showcase",
  storageBucket: "sheela-showcase.firebasestorage.app",
  messagingSenderId: "16489798240",
  appId: "1:16489798240:web:201341b6e67152ae0b8105",
  measurementId: "G-V16C4Q9J0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);