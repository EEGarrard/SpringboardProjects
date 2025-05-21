import React, { useState, useContext } from "react";
import TodoContext from "../../context/todo-context";

const TodoInput = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Don't add empty todos
    if (!todoText.trim()) return;
    
    const newTodo = {
      id: Date.now(), // Better than Math.random() for IDs
      text: todoText.trim(),
      complete: false
    };
    
    addTodo(newTodo);
    setTodoText(""); // Clear input after submission
  };

  return (
    <div className="todo-input">
      <h3>useContext + useReducer TO-DO LIST</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          placeholder="Enter a to-do..."
          onChange={handleChange}
          aria-label="Todo input"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoInput;