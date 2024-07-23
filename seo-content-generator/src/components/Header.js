import React from 'react';
import '../styles/Header.css'; // Si usas CSS modularizado

function Header() {
  return (
    <header className="header">
      <h1>Mi Aplicación</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/features">Características</a></li>
          <li><a href="/pricing">Precios</a></li>
          <li><a href="/login">Iniciar Sesión</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
