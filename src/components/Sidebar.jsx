import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'

const userPost = [
  {
    id: 1,
    img: 'url_de_la_imagen_1',
    title: 'Titulo del post 1',
  },
  {
    id: 2,
    img: 'url_de_la_imagen_2',
    title: 'Titulo del post 2',
  },
  {
    id: 3,
    img: 'url_de_la_imagen_3',
    title: 'Titulo del post 3',
  },
  {
    id: 4,
    img: 'url_de_la_imagen_4',
    title: 'Titulo del post 4',
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Foto de perfil */}
      <div className="profile-picture">
        <img src="../../img/user_icon.png" alt="Foto de perfil" />
      </div>

      {/* Datos del usuario */}
      <div className="user-data">
        <p>Email: usuario@example.com</p>
        <p>Horario: 9:00 AM - 5:00 PM</p>
        <p>Dirección: Ciudad, País</p>
      </div>

      {/* Editar información de perfil */}
      {/* va a otra pantalla */}
      <Link to="/editar-perfil" className="edit-profile-button">
        Editar Perfil
      </Link>

      {/* Cantidad de posts del usuario */}
      <p className="publication-count">Post: {userPost.length}</p>

      {/* Posts del usuario*/}
      <div className="publication-list">
        {/* Mapeo de post (temporal por el arreglo ) */}
        {userPost.map((post) => (
          <div key={post.id} className="publication-card">
            <img src={post.img} alt={`Imagen del Post ${post.id}`} className="publication-image" />
            <div className="publication-content">
              <p className="publication-title">{post.title}</p>
              <button className="delete-publication-button">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
