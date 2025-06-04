import { useState, useEffect } from "react";
import { getRestaurants } from "../firebase/firebaseService";

export default function Search() {
  const [busqueda, setBusqueda] = useState("");
  const [restaurantes, setRestaurantes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const lista = await getRestaurants();
        setRestaurantes(lista);
      } catch (error) {
        console.error("Error cargando restaurantes:", error);
      } finally {
        setCargando(false);
      }
    }
    fetchData();
  }, []);

  // Filtrar restaurantes según busqueda (insensible a mayúsculas)
  const resultados = restaurantes.filter((r) =>
    (r.nombre || r.name || "")
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="mb-4 text-center">🔍 Buscar Restaurante</h2>

      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Escribe el nombre del restaurante..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {cargando ? (
        <p>Cargando restaurantes...</p>
      ) : resultados.length > 0 ? (
        <div className="row">
          {resultados.map((r) => (
            <div className="col-md-4 mb-4" key={r.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={r.imagen || "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt={r.nombre || r.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{r.nombre || r.name}</h5>
                  <p className="card-text">{r.descripcion || r.description}</p>
                  <p>
                    <i className="bi bi-geo-alt-fill text-danger"></i>{" "}
                    {r.direccion || r.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-muted">No se encontraron restaurantes.</p>
        </div>
      )}
    </div>
  );
}
