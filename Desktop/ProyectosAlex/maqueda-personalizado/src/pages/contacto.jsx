import React, { useState } from 'react';
import '../components/styles/contactos.css';

function Contacto() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega lógica para manejar el envío del formulario aquí
    console.log('Datos del formulario:', formData);
    // Puedes agregar una función para limpiar los campos después de enviar
    // setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2 className='contactoT'>Contactanos</h2>
 

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>
            Nombre:
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
           
            />
          </label>
          <label>
            Apellido:
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Correo Electrónico:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Mensaje:
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Escribe tu mensaje aquí'
            ></textarea>
          </label>
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
