import React from 'react';
import '../../styles/PostCard.css'

const PostCard = ({ image, title, creator, description, addRightMargin }) => {
  return (
    <div className={`post-card ${addRightMargin ? 'with-margin' : ''}`}>
      <img src={image} alt="Post" className="post-image" />
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <p className="post-creator">Creador: {creator}</p>
        <p className="post-description">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
