import React, { useReducer, useCallback } from 'react';
import TodoContext from './todo-context';
import TodoReducer from './todo-reducer';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todo-actions';

const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Memoized action creators for better performance
  const addTodo = useCallback((todo) => {
    if (!todo.text || !todo.text.trim()) return; // Skip empty todos
    
    dispatch({
      type: ADD_TODO,
      payload: {
        ...todo,
        id: todo.id || Date.now(), // Ensure ID exists
        text: todo.text.trim(),    // Trim whitespace
        complete: todo.complete || false // Default to false
      }
    });
  }, []);

  const toggleTodo = useCallback((todoId) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoId,
    });
  }, []);

  const deleteTodo = useCallback((todoId) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoId,
    });
  }, []);

  // Calculate derived state
  const completedTodosCount = state.todos.filter(todo => todo.complete).length;
  const remainingTodosCount = state.todos.length - completedTodosCount;

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        completedTodosCount,
        remainingTodosCount,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;