import { useState } from 'react';
import './App.css';
import Add from './AddTask';
import List from './List';

function App() {
  const [tasks, setTasks] = useState([
    { id: Date.now(), text: "Walk Dog", completed: false }
  ]);

  const handleRemove = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <Add setTasks={setTasks} />
      <List 
        tasks={tasks} 
        onRemoveTask={handleRemove} 
        onToggleComplete={toggleComplete} 
      />
    </div>
  );
}

export default App;