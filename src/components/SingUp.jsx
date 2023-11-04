// RegistroUsuario.jsx

import React, { useState, useEffect } from 'react' //Para manejo de la logica de envio del formulario
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/SingUp.css'











const SingUp = () => {
    //Estado local para almacenar los valores del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        contrasena: '',
        telefono: '',
        direccion: '',
        tipoCuenta: 'Negocio' // Por defecto, se selecciona 'Negocio'
    });

    const { nombre, correo, contrasena, telefono, direccion, tipoCuenta } = formData;



    //Manejo de los cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    //Enviar el formulario al back
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/register', {
                email: correo,
                password: contrasena,
                userName: nombre,
                phoneNumber: telefono,
                direc: direccion,
                tipoCuenta: tipoCuenta
            });

            // Verificar si la solicitud fue exitosa
            if (response.status === 200) {
                console.log('Usuario registrado correctamente');
                setFormData({
                    nombre: '',
                    correo: '',
                    contrasena: '',
                    telefono: '',
                    direccion: '',
                    tipoCuenta: 'Negocio'
                });
            } else {
                console.error('Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error al conectar con el servidor: ', error);
        }
    };





    return (
        <div className="singup-container">
            <Helmet>
                <title>SingUp</title>
            </Helmet>
            <div className='singup-form-container'>
                <div className='singup-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='name-container'>
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                className='input-field'
                                type="text"
                                placeholder='Nombre de la cuenta'
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='name-container'>
                            <label htmlFor="Correo">Correo:</label>
                            <input
                                className='input-field'
                                type="email"
                                placeholder='Correo electrónico'
                                id="correo"
                                name="correo"  // Corrige la propiedad name aquí
                                value={correo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='name-container'>
                            <label htmlFor="contrasena">Contraseña:</label>
                            <input
                                className='input-field'
                                type="password"
                                placeholder='Contraseña'
                                id="contrasena"
                                name="contrasena"
                                value={contrasena}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='name-container'>
                            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                className='input-field'
                                type="tel"
                                placeholder='Número telefónico'
                                id="telefono"
                                name="telefono"
                                value={telefono}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='name-container'>
                            <label htmlFor="direccion">Dirección:</label>
                            <input
                                className='input-field'
                                type="text"
                                placeholder='Dirección'
                                id="direccion"
                                name="direccion"
                                value={direccion}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='name-container'>
                            <label htmlFor="tipoCuenta">Tipo de cuenta:</label>
                            <div id='accountType-container'>
                                <label>
                                    <input
                                        type="radio"
                                        name="tipoCuenta"
                                        value="Negocio"
                                        checked={tipoCuenta === 'Negocio'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Negocio
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="tipoCuenta"
                                        value="Estándar"
                                        checked={tipoCuenta === 'Estándar'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Estándar
                                </label>
                            </div>
                        </div>
                        <div className='btn-container'>
                            <Link to="/"><button className='btn-back' type="button" id='goToLogin'>Regresar</button></Link>
                            <button className='btn-singup' type="submit">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SingUp;
