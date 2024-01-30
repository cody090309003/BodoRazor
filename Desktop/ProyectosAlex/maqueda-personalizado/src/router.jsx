
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'; 
import Home from "./pages/home";
import Productos from "./pages/productos";
import Contacto from "./pages/contacto";
import Mapa from "./pages/mapa"

function App() {
  return (
    <Router>
      <Layout/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
    </Router>
  );
}

export default App;
