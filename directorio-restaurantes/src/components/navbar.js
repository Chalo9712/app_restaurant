// src/components/Navbar.js
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Directorio Restaurantes</Link>
        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buscar">Buscar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nuevo">Nuevo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
