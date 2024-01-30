import React from 'react';
import "./../components/styles/productos.css"

function Productos() {
  
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 19.99 },
    { id: 2, nombre: 'Producto 2', precio: 24.99 },
    { id: 3, nombre: 'Producto 3', precio: 14.99 },
    
  ];

  return (
    <div>
      <h1>Nuestros Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <strong>{producto.nombre}</strong> - Precio: ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
