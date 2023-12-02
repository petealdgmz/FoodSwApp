//link de la app: https://ldvvnm-5173.csb.app/
import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Navbar from "./homeComponents/Navbar";
import PostCard from "./PostComponents/PostCard";
//import axios from "axios";
import PostDetail from "./modals/PostDetail";
//import Posts from './Posts'

const Home = () => {
  console.log("log de prueba para ver en la consola");
  const fakePostsData = [
    {
      id: 1,
      title: "Post 1",
      nombre: "Usuario 1",
      descrip: "Descripción del Post 1",
      img1: "https://c.files.bbci.co.uk/DBBF/production/_105055265_bandejapaisa.jpg",
      userProfileImage: "../../img/user_icon.png",
      userPhoneNumber: "0123456789",
    },
    {
      id: 2,
      title: "Post 2",
      nombre: "Usuario 2",
      descrip: "Descripción del Post 2",
      img1: "https://www.saborusa.com/ni/wp-content/uploads/sites/19/2019/11/Calma-tus-antojos-con-deliciosas-y-rapidas-recetas-Foto-destacada.png",
      userProfileImage: "../../img/user_icon.png",
      userPhoneNumber: "9876543210",
    },
  ];
  //Nueva extraccion de datos desde la api (omitir mientras se usen datos ficticios)
  //const [postsData, setPostsData] = useState([]);
  //--------------------------------------------
  //Estado para el post seleccionado
  const [selectedPost, setSelectedPost] = useState(null);

  //llamada a la api (omitir mientras se usen datos ficticios)
  /*
  useEffect(() => {
    axios
      .get("https://fcc6dz-3000.csb.app/posts")
      .then((response) => {
        setPostsData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos desde la API:", error);
      });
  }, []);
 */

  //agrega clase para estilos
  useEffect(() => {
    document.body.classList.add("home-page");

    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  //funciones del modal
  const openPostModal = (post) => {
    console.log("Open post modal:", post);
    setSelectedPost(post);
    console.log("selectedPost después de actualizar:", selectedPost);
  };
  const closePostModal = () => {
    setSelectedPost(null);
  };
  //cuerpo
  return (
    <div className="home-container">
      <Navbar />

      <div className="post-container">
        {fakePostsData.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            creator={post.nombre}
            description={post.descrip}
            image={post.img1}
            onClick={() => {
              console.log("Click en PostCard:", post);
              openPostModal(post);
            }}
          />
        ))}
      </div>
      {/* Muestra modal solo con post seleccionado */}
      {selectedPost && (
        <PostDetail
          onClose={closePostModal}
          postDetails={{
            imageUrl: selectedPost.img1,
            userProfileImage: selectedPost.userProfileImage,
            userName: selectedPost.nombre,
            userPhoneNumber: selectedPost.userPhoneNumber,
            title: selectedPost.title,
            description: selectedPost.descrip,
          }}
        />
      )}
      {/* Log para verificar si PostDetail está siendo renderizado */}
      {selectedPost && console.log("selectedPost:", selectedPost)}
      {selectedPost && console.log("PostDetail renderizado")}
    </div>
  );
};

export default Home;
