const RemoveTask = ({ taskId, onRemove }) => {
    return (
      <button 
        onClick={() => onRemove(taskId)}
        className="remove-btn"
        aria-label={`Remove task`}
      >
        ×
      </button>
    );
  };
  
  export default RemoveTask;