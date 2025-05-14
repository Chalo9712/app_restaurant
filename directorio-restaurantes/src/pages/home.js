// src/pages/Home.js
import { restaurantes } from "../data";

export default function Home() {
  return (
    <div className="container">
      <h2 className="mb-4">Listado de Restaurantes</h2>
      <div className="row">
        {restaurantes.map(r => (
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
