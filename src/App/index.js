import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppIU } from "./AppIU";

function App() {
  return (
    <TodoProvider>
      <AppIU />
    </TodoProvider>
  );
}

export default App;
