import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [newTodoNumber, setNewTodoNumber] = React.useState(0);
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onChangeNumber = (event) => {
    setNewTodoNumber(event.target.value);
    console.log(newTodoNumber);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue, newTodoNumber);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Concepto:</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Concepto"
      />
      <label>Monto:</label>
      <input type="number" value={newTodoNumber} onChange={onChangeNumber} />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
