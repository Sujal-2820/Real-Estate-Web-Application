// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-7f4cd.firebaseapp.com",
  projectId: "real-estate-7f4cd",
  storageBucket: "real-estate-7f4cd.appspot.com",
  messagingSenderId: "947255063354",
  appId: "1:947255063354:web:85c909be66ceae560a9603"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);