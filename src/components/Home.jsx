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
      userProfileImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC",
      userPhoneNumber: "0123456789",
    },
    {
      id: 2,
      title: "Post 2",
      nombre: "Usuario 2",
      descrip: "Descripción del Post 2",
      img1: "https://www.saborusa.com/ni/wp-content/uploads/sites/19/2019/11/Calma-tus-antojos-con-deliciosas-y-rapidas-recetas-Foto-destacada.png",
      userProfileImage:
        "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg",
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
            onClick={() => openPostModal(post)} //Maneja evento para click
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
