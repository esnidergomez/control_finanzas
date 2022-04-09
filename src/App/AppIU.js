import React from "react";
import { TodoContext } from "../TodoContext";

import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { TodoForm } from "../TodoForm";
import { SelectFecha } from "../SelectFecha";

import { CreateTodoButton } from "../CreateTodoButton/index";

import { Modal } from "../Modal";

import "./App.css";

function AppIU() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <>
      <h1>CONTROLA TUS FINANZAS</h1>
      <SelectFecha />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <p>Estamos cargando, no desesperes . . .</p>}
        {error && <p>Desesperate, ocurrio un error . . .</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer Todo</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}
export { AppIU };
