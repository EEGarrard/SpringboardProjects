import React from "react";

const TodoItem = ({ text, clickToToggle, clickToDelete, complete }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem',
      margin: '0.5rem 0',
      border: '1px solid #ddd',
      borderRadius: '4px'
    }}>
      <span style={{
        textDecoration: complete ? 'line-through' : 'none',
        color: complete ? '#4CAF50' : '#f44336',
        flexGrow: 1
      }}>
        {text}
      </span>
      <div>
        <button 
          onClick={clickToToggle}
          style={{
            margin: '0 0.5rem',
            padding: '0.25rem 0.5rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          {complete ? 'Undo' : 'Complete'}
        </button>
        <button 
          onClick={clickToDelete}
          style={{
            padding: '0.25rem 0.5rem',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;