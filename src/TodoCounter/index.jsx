import React from "react";
import { TodoContext } from "../TodoContext";

import "./TodoCounterStyle.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Compraste {completedTodos} de {totalTodos}
    </h2>
  );
}

export { TodoCounter };
