import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  //children
  return ReactDOM.createPortal(
    //Portales en REACT
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
