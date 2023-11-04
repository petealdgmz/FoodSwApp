import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/Login.css'

const Login = () => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className='login-form-container'>
        <div className='login-form'>
          <img src="../../img/user_icon.png" alt="user-icon" className='up-icono' />
          <div className='input-container'>
          <div id = 'emailInput' className='form-group'>
            <input type='email' placeholder='Correo electrónico' className='input-field' />
          </div>
          <div className='form-group'>
            <input type='password' placeholder='Contraseña' className='input-field' />
          </div>
          </div>

          <div className='passRecover-container'>
            <p id='passRecover'>Olvidé mi contraseña</p>
          </div>

          <button className='btnInicio' type='button'>Iniciar</button>

          <div className='goToSingUp-container'>
            <h4>¿Aún no tiene una cuenta?</h4>
            <h4 id='goToSignUp'><Link to="/singup">REGISTRARSE</Link></h4>
          </div>

        </div>
      </div>
      <div className='welcome-img'>
        <br />
        <br />
        <br />
        <h1 id='welcome-name'>BIENVENIDOS</h1>
        <img id='icon-img' src="../../FoodSwApp_icon.png" alt="" />
        <h3>¡FoodSwApp, la aplicación web que conecta a los amantes de la buena comida!</h3>
      </div>
    </div>
  );
}

export default Login;