// src/pages/Search.js
import { useState } from "react";
import { restaurantes } from "../data";

export default function Search() {
  const [busqueda, setBusqueda] = useState("");

  const resultados = restaurantes.filter(r =>
    r.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="mb-4">Buscar Restaurante</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Escribe el nombre del restaurante..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

      <div className="row">
        {resultados.map(r => (
          <div className="col-md-4 mb-3" key={r.id}>
            <div className="card h-100">
              <img src={r.imagen} className="card-img-top" alt={r.nombre} />
              <div className="card-body">
                <h5 className="card-title">{r.nombre}</h5>
                <p className="card-text">{r.descripcion}</p>
                <p><strong>Dirección:</strong> {r.direccion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
