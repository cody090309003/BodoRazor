import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <h1 className="header-title"> </h1>
      <div className={` ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className="menu-container">
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a href="/" className="nav-link active" onClick={closeMenu}>
            INICIO
          </a>
          <a href="/productos" className="nav-link" onClick={closeMenu}>
            PRODUCTOS
          </a>
          <a href="/contacto" className="nav-link" onClick={closeMenu}>
            CONTACTO
          </a>
          <a href="/mapa" className="nav-link" onClick={closeMenu}>
         MAPA
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
