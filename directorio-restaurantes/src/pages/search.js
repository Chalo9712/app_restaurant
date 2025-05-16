import { useState } from "react";
import { restaurantes } from "../data";

export default function Search() {
  const [busqueda, setBusqueda] = useState("");

  const resultados = restaurantes.filter(r =>
    r.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="mb-4 text-center">🔍 Buscar Restaurante</h2>

      <div className="input-group mb-4">
        <span className="input-group-text"><i className="bi bi-search"></i></span>
        <input
          type="text"
          className="form-control"
          placeholder="Escribe el nombre del restaurante..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>

      <div className="row">
        {resultados.length > 0 ? (
          resultados.map(r => (
            <div className="col-md-4 mb-4" key={r.id}>
              <div className="card h-100 shadow-sm">
                <img src={r.imagen} className="card-img-top" alt={r.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{r.nombre}</h5>
                  <p className="card-text">{r.descripcion}</p>
                  <p><i className="bi bi-geo-alt-fill text-danger"></i> {r.direccion}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="text-muted">No se encontraron restaurantes.</p>
          </div>
        )}
      </div>
    </div>
  );
}
