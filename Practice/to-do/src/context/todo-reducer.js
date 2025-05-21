import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todo-actions';

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...action.payload,
            id: action.payload.id || Date.now(), // Ensure ID exists
            complete: action.payload.complete || false // Default to false
          }
        ]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
};

export default TodoReducer;