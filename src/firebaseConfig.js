import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB11jpkVmin_pyqRAJ6h_ybVJ5PSOv73vQ",
  authDomain: "electronics-shop-rj.firebaseapp.com",
  projectId: "electronics-shop-rj",
  storageBucket: "electronics-shop-rj.firebasestorage.app",
  messagingSenderId: "206220899869",
  appId: "1:206220899869:web:a08e51d4a8f5b54f64f8f4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
