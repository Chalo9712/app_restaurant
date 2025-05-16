import { restaurantes } from "../data";

export default function Home() {
  return (
    <div className="container">
      <h2 className="mb-4 text-center">🍽️ Restaurantes Destacados</h2>
      <div className="row">
        {restaurantes.map(r => (
          <div className="col-md-4 mb-4" key={r.id}>
            <div className="card h-100 shadow-sm">
              <img src={r.imagen} className="card-img-top" alt={r.nombre} />
              <div className="card-body">
                <h5 className="card-title">{r.nombre}</h5>
                <p className="card-text">{r.descripcion}</p>
                <p><i className="bi bi-geo-alt-fill text-danger"></i> {r.direccion}</p>
                <button className="btn btn-outline-primary w-100">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
