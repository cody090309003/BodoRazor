import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer-section">
        <div className="quick-links">
          <div>
            <p>Nosotros</p>
            <p className="link-description">Somos vendedores de productos y articulos para Gaming </p>
          </div>

          <div>
            <p>Servicios</p>
            <p className="link-description">Nuestro servicio es brindarte los mejores productos para gaming y poder mejorar las opciones de busqueda para mas comodidad y confianza</p>
          </div>

          <div>
            <p>Contacto</p>
            <p className="link-description">
              ¿Cómo puedo ponerme en contacto con el equipo de soporte?<br />
              ¿Cuál es el tiempo de respuesta típico para consultas de contacto?<br />
              ¿Qué información debo proporcionar al comunicarme con ustedes?<br /></p>
          </div>
        </div>
        <div className="footer-section">
          <div className="social-icons">
            <p className="follow-text">Síguenos</p>
            <a href="URL_DE_TU_FACEBOOK" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="URL_DE_TU_TWITTER" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="URL_DE_TU_INSTAGRAM" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
          <div className="newsletter">
            <p><strong>Recibe nuestras novedades:</strong></p>
            <form>
              <input type="email" placeholder="Tu correo electrónico" />
              <button type="submit">Suscribirse</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
