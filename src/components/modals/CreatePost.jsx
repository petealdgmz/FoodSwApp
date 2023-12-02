import React from "react";
import "../../styles/ModalsStyles/CreatePost.css";

const CreatePost = ({ onClose }) => {
  console.log("Renderizando CreatePost");

  return (
    <div className="create-post-modal-container">
      <div className="close-create-post-modal" onClick={onClose}>
        X
      </div>
      <div className="upload-image-box-container">
        <img
          id="addImageIcon"
          src="../../../img/addImage.png"
          alt="adImageIcon"
        />
      </div>
      <div className="post-input-container">
        <label htmlFor="postContent" className="create-post-label">
          ¿Qué publicas?
        </label>
        <input type="text" id="postContent" className="create-post-input" />
      </div>
      <div className="post-input-container">
        <label htmlFor="postDescription" className="create-post-label">
          Descripción
        </label>
        <textarea id="postDescription" className="create-post-textarea" />
      </div>
      <div className="delivery-options-container">
        <label className="delivery-option-label">
          <input type="radio" name="delivery" value="delivery" />
          Servicio a domicilio
        </label>
        <label className="delivery-option-label">
          <input type="radio" name="delivery" value="noDelivery" />
          Sin servicio
        </label>
      </div>
      <div className="category-options-container">
        <label className="category-option-label">
          <input type="radio" name="category" value="comida" />
          Comida
        </label>
        <label className="category-option-label">
          <input type="radio" name="category" value="bebidas" />
          Bebidas
        </label>
        <label className="category-option-label">
          <input type="radio" name="category" value="snacks" />
          Snacks
        </label>
        <label className="category-option-label">
          <input type="radio" name="category" value="postres" />
          Postres
        </label>
      </div>
    </div>
  );
};

export default CreatePost;
