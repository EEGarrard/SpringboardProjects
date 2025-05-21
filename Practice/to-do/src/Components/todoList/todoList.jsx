import React, { useContext } from "react";
import TodoContext from "../../context/todo-context";
import TodoItem from "./TodoItems/TodoItem";

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  // Sort todos - incomplete first, then completed
  const sortedTodos = [...todos].sort((a, b) => 
    a.complete === b.complete ? 0 : a.complete ? 1 : -1
  );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h3 style={{ 
        textAlign: "center", 
        color: "#333",
        marginBottom: "1.5rem"
      }}>
        {todos.length === 0 ? "No tasks yet!" : "Your Tasks"}
      </h3>
      
      <div style={{ 
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            complete={todo.complete}
            clickToDelete={() => deleteTodo(todo.id)}
            clickToToggle={() => toggleTodo(todo.id)}
          />
        ))}
      </div>
      
      {todos.length > 0 && (
        <p style={{ 
          textAlign: "center", 
          color: "#666",
          marginTop: "1rem"
        }}>
          {todos.filter(t => !t.complete).length} remaining tasks
        </p>
      )}
    </div>
  );
};

export default TodoList;