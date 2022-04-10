import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButtonStyle.css";

function CreateTodoButton(props) {
  const { modalidad, setModalidad } = React.useContext(TodoContext);

  const onClickButtonIngreso = () => {
    //Recordar que lo que hace JS al ver parentesis es ejecutarlo
    props.setOpenModal((prevState) => !prevState);
    setModalidad("Ingreso");
    console.log(modalidad);
  };

  const onClickButtonEgreso = () => {
    //Recordar que lo que hace JS al ver parentesis es ejecutarlo
    props.setOpenModal((prevState) => !prevState);
    setModalidad("Egreso");
    console.log(modalidad);
  };

  return (
    <>
      <button className="CreateTodoButtonIngeso" onClick={onClickButtonIngreso}>
        +
      </button>
      <button className="CreateTodoButtonEgreso" onClick={onClickButtonEgreso}>
        -
      </button>
    </>
  );
}

export { CreateTodoButton };
