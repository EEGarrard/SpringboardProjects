import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { name: "Dog Treats", count: 1 }
  ]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { name: newItem, count: 1 }]);
      setNewItem("");
    }
  };

  const updateCount = (index, change) => {
    const newCount = items[index].count + change;
    
    if (newCount <= 0) {
      // Remove item if count reaches 0
      setItems(items.filter((_, i) => i !== index));
    } else {
      // Update count otherwise
      setItems(items.map((item, i) => 
        i === index ? { ...item, count: newCount } : item
      ));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addItem()}
        placeholder="Add item"
      />
      <button onClick={addItem}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {item.name} : {item.count}
            <button onClick={() => updateCount(index, 1)} style={{ marginLeft: 10 }}>+</button>
            <button onClick={() => updateCount(index, -1)} style={{ marginLeft: 5 }}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;