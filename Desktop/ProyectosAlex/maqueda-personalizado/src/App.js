
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Productos from "./pages/productos";
import Contacto from "./pages/contacto";
import Mapa from "./pages/mapa";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/mapa" element={<Mapa/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
