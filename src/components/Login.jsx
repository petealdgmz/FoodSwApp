import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import FailedLogin from "./modals/FailedLogin";

const Login = () => {
  //Logica modales
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAccept = () => {
    closeModal();
  };

  const navigate = useNavigate();
  //logica

  //Manejar email y password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //inicio de sesion
  const handleLogin = async () => {
    try {
      // Validar campos vacíos antes de la solicitud
      if (email.trim() === "" || password.trim() === "") {
        console.log("Debe rellenar los campos");
        openModal();
        return;
      }

      // Solicitud HTTP al endpoint login [AHORA USANDO API DESDE SERVIDOR DEV EN LA NUBE]
      const response = await axios.post("https://fcc6dz-3000.csb.app/login", {
        email,
        password,
      });

      // Manejo de respuesta del servidor
      if (response.data.token) {
        navigate("/home");
      }
    } catch (error) {
      console.error(
        "Error al realizar la solicitud de inicio de sesión:",
        error,
      );
    }
  };

  //fin de logica
  return (
    <div className="login-container">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login-form-container">
        <div className="login-form">
          <img
            src="../../img/user_icon.png"
            alt="user-icon"
            className="up-icono"
          />
          <div className="input-container">
            <div id="emailInput" className="form-group">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Contraseña"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="passRecover-container">
            <p id="passRecover">Olvidé mi contraseña</p>
          </div>

          {/* boton maneja inicio de sesion */}
          <button className="btnInicio" type="button" onClick={handleLogin}>
            Iniciar
          </button>

          {/*MODAL DE FALLO AL INICIAR SESION*/}
          <FailedLogin
            isOpen={isModalOpen}
            onClose={closeModal}
            onAccept={handleAccept}
            errorMessage="Debe rellenar los campos"
          />

          <div className="goToSingUp-container">
            <h4>¿Aún no tiene una cuenta?</h4>
            <h4 id="goToSignUp">
              <Link to="/singup">REGISTRARSE</Link>
            </h4>
          </div>
        </div>
      </div>
      <div className="welcome-img">
        <br />
        <br />
        <br />
        <h1 id="welcome-name">BIENVENIDOS</h1>
        <img id="icon-img" src="../../FoodSwApp_icon.png" alt="" />
        <div className="">
          <h3>
            ¡FoodSwApp, la aplicación web que conecta a los amantes de la buena
            comida!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
