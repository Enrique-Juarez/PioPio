import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import HomeLogin from './HomeLogin/HomeLogin.js';
import HomeSinLogin from './HomeSinLogin/HomeSinLogin.js';

import Login from './Login/Login.js';
import MiPerfil from './MiPerfil/MiPerfil.js';
import PerfilUsuario from './PerfilUsuario/PerfilUsuario.js';
import Registro from './Registro/Registro.js';


export default function App() {
  return (
    <Router>
      <Header></Header>
      <div style={{ backgroundColor: "yellow", width: "100%", height: "150px" }}>
      <Routes>
        <Route path="/" element={<HomeSinLogin />} />
        <Route path="/homelogin" element={<HomeLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/miperfil" element={<MiPerfil />} />
        <Route path="/perfilusuario" element={<PerfilUsuario />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      </div>
      
      <Footer></Footer>
    </Router>
  );
}
