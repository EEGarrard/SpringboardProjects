import React, { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";  // Add this import

const SpacecraftBuilder = () => {
  const [inventory, setInventory] = useState([]);

  const addItem = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  const deleteItem = (itemId) => {
    setInventory(inventory.filter((item, index) => index !== itemId));
  };

  return (
    <div>
      <h1>Spacecraft Builder</h1>
      <ItemForm addItem={addItem} />
      <InventoryDisplay inventory={inventory} deleteItem={deleteItem} /> {/* Updated */}
    </div>
  );
};

export default SpacecraftBuilder;