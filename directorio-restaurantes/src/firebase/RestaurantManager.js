// src/components/RestaurantManager.js
import React, { useState, useEffect } from "react";
import { createRestaurant, getRestaurants, searchRestaurantsByName } from "../firebaseService";

const RestaurantManager = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const list = await getRestaurants();
      setRestaurants(list);
    } catch (error) {
      console.error("Failed to fetch restaurants", error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!name || !address) return alert("Por favor llena todos los campos");
    try {
      await createRestaurant({ name, address });
      setName("");
      setAddress("");
      fetchRestaurants();
    } catch (error) {
      alert("Error creando restaurante");
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchName) return alert("Escribe un nombre para buscar");
    try {
      const results = await searchRestaurantsByName(searchName);
      setSearchResults(results);
    } catch (error) {
      alert("Error buscando restaurantes");
    }
  };

  return (
    <div>
      <h2>Crear nuevo restaurante</h2>
      <form onSubmit={handleCreate}>
        <input
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Crear</button>
      </form>

      <h2>Lista de Restaurantes</h2>
      <ul>
        {restaurants.map((r) => (
          <li key={r.id}>
            {r.name} - {r.address}
          </li>
        ))}
      </ul>

      <h2>Buscar restaurante por nombre</h2>
      <form onSubmit={handleSearch}>
        <input
          placeholder="Nombre a buscar"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <h3>Resultados de búsqueda</h3>
      <ul>
        {searchResults.map((r) => (
          <li key={r.id}>
            {r.name} - {r.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantManager;
