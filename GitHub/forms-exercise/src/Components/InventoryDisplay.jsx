import React from "react";
import ItemCard from "./ItemCard";

const InventoryDisplay = ({ inventory, deleteItem }) => {
  return (
    <div className="inventory-display">
      <h2>Current Inventory</h2>
      {inventory.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul className="inventory-list">
          {inventory.map((item, index) => (
            <ItemCard
              key={index}
              item={item}
              index={index}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default InventoryDisplay;
