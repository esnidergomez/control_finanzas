import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage(
    "TODOS_V1",
    []
  );

  //Buscar
  const [serchValue, setSerchValue] = React.useState("");

  //Modal
  const [openModal, setOpenModal] = React.useState(false);

  //modalidad
  const [modalidad, setModalidad] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!serchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = serchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //Agregar
  const addTodo = (text, monto) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      monto
    });
    saveTodos(newTodos);
  };

  //Completado
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  //Eliminado
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        serchValue,
        setSerchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        modalidad,
        setModalidad
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
  {
    /*Para envolver nuestra aplicacion*/
  }
}

export { TodoContext, TodoProvider };
