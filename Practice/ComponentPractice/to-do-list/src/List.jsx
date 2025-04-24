import RemoveTask from './RemoveTask';

const List = ({ tasks, onRemoveTask, onToggleComplete }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="empty-message">No tasks yet!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
          <span>{task.text}</span>
          <RemoveTask taskId={task.id} onRemove={onRemoveTask} />
        </li>
      ))}
    </ul>
  );
};

export default List;