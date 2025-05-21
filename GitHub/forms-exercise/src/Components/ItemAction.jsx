import React from "react";

const ItemAction = ({ onDelete }) => {
  return (
    <button className="delete-btn" onClick={onDelete}>
      Delete
    </button>
  );
};

export default ItemAction;
