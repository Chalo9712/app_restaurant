import { useState } from "react";
import { toast } from "react-toastify";
import { createRestaurant } from "../firebase/firebaseService";


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

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await createRestaurant(form);
      toast.success("✅ Restaurante creado correctamente");

      // Limpiar formulario después de guardar
      setForm({
        nombre: "",
        descripcion: "",
        direccion: "",
        imagen: ""
      });
    } catch (error) {
      console.error("Error al crear restaurante:", error);
      toast.error("❌ Error al crear restaurante. Intenta de nuevo.");
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4 text-center">➕ Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="direccion"
            className="form-control"
            placeholder="Dirección"
            value={form.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <textarea
            name="descripcion"
            className="form-control"
            placeholder="Descripción"
            value={form.descripcion}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>
        <div className="col-12">
          <input
            type="url"
            name="imagen"
            className="form-control"
            placeholder="URL de la imagen"
            value={form.imagen}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12 text-center">
          <button className="btn btn-success px-4">Guardar</button>
        </div>
      </form>
    </div>
  );
}
