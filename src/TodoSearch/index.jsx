import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearchStyle.css";

function TodoSearch() {
  const { searchValue, setSerchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSerchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Busca tu item"
      value={searchValue}
      onChange={onSearchValueChange}
    /> //onchange escucha cambios
  );
}

export { TodoSearch };
