// src/pages/NewRestaurant.js
import { useState } from "react";

export default function NewRestaurant() {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    direccion: "",
    imagen: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Nuevo restaurante:", form);
    alert("Restaurante creado (simulado en consola)");
  };

  return (
    <div className="container">
      <h2 className="mb-4">Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          className="form-control mb-2"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          className="form-control mb-2"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="direccion"
          className="form-control mb-2"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagen"
          className="form-control mb-2"
          placeholder="URL de la imagen"
          value={form.imagen}
          onChange={handleChange}
          required
        />
        <button className="btn btn-success">Guardar</button>
      </form>
    </div>
  );
}
