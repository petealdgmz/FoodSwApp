import React, { useState } from "react";
import "../../styles/Navbar.css";
import Sidebar from "../Sidebar"; //importe del menu lateral

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="../../../img/fsa_menu.png"
            alt="fsa-menu"
            className="fsa_menu"
          />

          <img
            src="../../../img/fsa_name.png"
            alt="Logo"
            className="fsa_logo"
          />
          <div className="nav-item">Inicio</div>
          <div className="nav-item">Categorías</div>
          <div className="nav-item">Ayuda</div>
        </div>
        <div className="navbar-right">
          <input type="text" placeholder="Buscar" className="search-bar" />
          <button className="search-button">🔍︎</button>
          <div className="user-button" onClick={toggleSidebar}>
            <img
              src="../../../img/user_icon.png"
              alt="fsa-logo"
              className="fsa_logo2"
            />
          </div>
        </div>
      </nav>
      {sidebarVisible && <Sidebar />}
    </div>
  );
};

export default Navbar;
