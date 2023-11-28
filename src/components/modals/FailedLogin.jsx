// FailedLogin.jsx
import React from "react";
import "../../styles/ModalsStyles/FailedLogin.css";

const FailedLogin = ({ isOpen, onClose, onAccept, errorMessage }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="error-message">{errorMessage}</p>
        <button id="acceptbutton" onClick={onAccept}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default FailedLogin;
