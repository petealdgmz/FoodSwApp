import React from "react";
import PropTypes from "prop-types";
import "../../styles/ModalsStyles/postDetailModal.css";

const PostDetail = ({ onClose, postDetails }) => {
  console.log("Renderizando PostDetail");
  const {
    imageUrl,
    userProfileImage,
    userName,
    phoneNumber,
    title,
    description,
  } = postDetails;

  console.log("Modal mostrado", PostDetail);

  return (
    <div className="post-detail-modal">
      <div className="close-button" onClick={onClose}>
        X
      </div>
      <div className="post-image-container">
        <img src={imageUrl} alt="Post" className="post-image" />
      </div>
      <div className="user-info">
        <img src={userProfileImage} alt="User" className="user-profile-image" />
        <div className="user-details">
          <div className="user-name">{userName}</div>
          <div className="phone-number">{phoneNumber}</div>
        </div>
      </div>
      <div className="post-title">{title}</div>
      <div className="post-description">{description}</div>
    </div>
  );
};

PostDetail.propTypes = {
  onClose: PropTypes.func.isRequired,
  postDetails: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    userProfileImage: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostDetail;
