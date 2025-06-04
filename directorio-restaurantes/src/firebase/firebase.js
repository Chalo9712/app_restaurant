// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔧 Reemplaza con tu configuración real de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJ_90NnoxdXjz5tSEKZ7G2yOYWfWYS2AQ",
  authDomain: "restaurantes-app-26960.firebaseapp.com",
  projectId: "restaurantes-app-26960",
  storageBucket: "restaurantes-app-26960.firebasestorage.app",
  messagingSenderId: "525009315336",
  appId: "1:525009315336:web:b01dffcc9b4830b36753bd"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos
const db = getFirestore(app);

export { db };
