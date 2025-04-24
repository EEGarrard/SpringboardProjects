import { useState } from 'react';

const Add = ({ setTasks }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    
    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        text: trimmedValue,
        completed: false
      }
    ]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        placeholder="e.g. Buy groceries"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Add;