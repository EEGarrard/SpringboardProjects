import React from "react";
import "./App.css";
import TodoState from "./context/todo-state";
import TodoInput from "./Components/todoInput/todoInput";
import TodoList from "./Components/todoList/todoList";

function App() {

  return (
    <div className="App">
      <div className="app_todoApp">
        <TodoState>
          <TodoInput />
          <TodoList />
        </TodoState>
      </div>
    </div>
  );
}

export default App;
