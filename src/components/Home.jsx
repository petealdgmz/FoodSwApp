import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Navbar from "./homeComponents/Navbar";
import PostCard from "./PostComponents/PostCard";
import axios from "axios";
//import Posts from './Posts'

const Home = () => {
  //Nueva extraccion de datos desde la api
  const [postsData, setPostsData] = useState([]);

  //llamada a la api
  axios
    .get("https://fcc6dz-3000.csb.app/posts")
    .then((response) => {
      setPostsData(response.data);
    })
    .catch((error) => {
      console.error("Error al obtener datos desde la API:", error);
    });

  //Arreglo de informacion para post (temporal)

  //agrega clase para estilos
  useEffect(() => {
    document.body.classList.add("home-page");

    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  //cuerpo
  return (
    <div className="home-container">
      <Navbar />

      <div className="post-container">
        {postsData.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            creator={post.userName}
            description={post.descrip}
            image={post.img1}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
