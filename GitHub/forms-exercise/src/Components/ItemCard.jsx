import React from "react";
import ItemAction from "./ItemAction";

const ItemCard = ({item, index, deleteItem}) => {
  return (
    <li key={index} className="inventory-item">
      <div>
        <strong>{item.name}</strong> (Qty: {item.qty})
      </div>
      <div>Purpose: {item.purpose}</div>
   <ItemAction onDelete={() => deleteItem(index)} />
    </li>
  );
};

export default ItemCard