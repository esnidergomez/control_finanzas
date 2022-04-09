import React from "react";
import "./CreateTodoButtonStyle.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    //Recordar que lo que hace JS al ver parentesis es ejecutarlo
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
