import React, { useState } from 'react';
import '../../styles/Navbar.css'
import Sidebar from '../Sidebar'; //importe del menu lateral

const Navbar = () => {
  const[sidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible)
  }




  return (
    <div>
      <nav className="navbar" >
        <div className="navbar-left">
          <div className="more-button">&#9776;</div>
          <img src="ruta-de-tu-logo.png" alt="Logo" className="logo" />
          <div className="nav-item">Inicio</div>
          <div className="nav-item">Categorías</div>
          <div className="nav-item">Ayuda</div>
        </div>
        <div className="navbar-right">
          <input type="text" placeholder="Buscar" className="search-bar" />
          <button className="search-button">Buscar</button>
          <div className="user-button" onClick={toggleSidebar}>Usuario</div>
        </div>
      </nav>
      {sidebarVisible && <Sidebar />}
    </div>
  );
};

export default Navbar;
