// src/firebaseService.js
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  startAt,
  endAt
} from "firebase/firestore";
import { db } from "./firebase";

// Colección en Firestore donde guardamos los restaurantes
const restaurantsCollection = collection(db, "restaurants");

// Crear un nuevo restaurante
export const createRestaurant = async (restaurant) => {
  try {
    const docRef = await addDoc(restaurantsCollection, restaurant);
    return { id: docRef.id, ...restaurant };
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

// Listar todos los restaurantes
export const getRestaurants = async () => {
  try {
    const querySnapshot = await getDocs(restaurantsCollection);
    const restaurants = [];
    querySnapshot.forEach((doc) => {
      restaurants.push({ id: doc.id, ...doc.data() });
    });
    return restaurants;
  } catch (e) {
    console.error("Error getting documents: ", e);
    throw e;
  }
};

// Buscar restaurantes por nombre
export const searchRestaurantsByName = async (nombre) => {
  try {
    const q = query(restaurantsCollection, where("nombre", "==", nombre));
    const querySnapshot = await getDocs(q);
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
    return results;
  } catch (e) {
    console.error("Error searching documents: ", e);
    throw e;
  }
};

// Buscar restaurantes por nombre (búsqueda parcial)
export const searchRestaurantsByNamePartial = async (nombreParcial) => {
  try {
    const q = query(
      restaurantsCollection,
      orderBy("nombre"),
      startAt(nombreParcial),
      endAt(nombreParcial + '\uf8ff')
    );
    const querySnapshot = await getDocs(q);
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
    return results;
  } catch (e) {
    console.error("Error searching documents partially: ", e);
    throw e;
  }
};
