import React, { useState, useEffect } from "react";
import { getRestaurants } from "../firebase/firebaseService";

export default function Home() {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const lista = await getRestaurants();
        setRestaurantes(lista);
      } catch (error) {
        console.error("Error cargando restaurantes:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4 text-center">🍽️ Restaurantes Destacados</h2>
      <div className="row">
        {restaurantes.length === 0 && <p>Cargando restaurantes...</p>}

        {restaurantes.map((r) => (
          <div className="col-md-4 mb-4" key={r.id}>
            <div className="card h-100 shadow-sm">
              {/* Si tienes imágenes en Firestore, usa r.imagen */}
              <img src={r.imagen || "https://via.placeholder.com/150"} className="card-img-top" alt={r.nombre} />
              <div className="card-body">
                <h5 className="card-title">{r.nombre || r.name}</h5>
                <p className="card-text">{r.descripcion || r.description || "Sin descripción"}</p>
                <p><i className="bi bi-geo-alt-fill text-danger"></i> {r.direccion || r.address}</p>
                <button className="btn btn-outline-primary w-100">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
