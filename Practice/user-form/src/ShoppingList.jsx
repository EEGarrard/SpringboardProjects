import React, { useState } from "react";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { v4 as uuidv4 } from "uuid";

const ShoppingList = () => {
  const initialState = [
    {
      id: uuidv4(),
      name: "Peanut Butter",
      qty: 2,
    },
    {
      id: uuidv4(),
      name: "Whole Milk",
      qty: 1,
    },
  ];

  const [items, setItems] = useState(initialState);

  const addItem = (newItem) => {
    if (!newItem.name.trim()) return; // Skip empty items
    
    setItems(prevItems => [
      ...prevItems, 
      {
        ...newItem,
        id: uuidv4(),
        qty: Number(newItem.qty) || 1 // Ensure quantity is a number
      }
    ]);
  };

  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="shopping-list">
      <h3>Shopping List</h3>
      <NewItemForm addItem={addItem} />
      
      <div className="items-container">
        {items.length === 0 ? (
          <p>Your shopping list is empty</p>
        ) : (
          items.map(item => (
            <Item 
              key={item.id}
              id={item.id}
              name={item.name}
              qty={item.qty}
              onRemove={removeItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ShoppingList;