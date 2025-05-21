import React, { useState } from "react";
import SpacecraftBuilder from "./SpacecraftBuilder";

const ItemForm = ({ addItem }) => {
  const [formData, setFormData] = useState({
    name: "",
    qty: 0,
    purpose: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert("Name is required");
    }
    if (formData.qty < 1) {
      alert("Quantity must be greater than 0");
    }
    addItem({
        name: formData.name,
        qty: formData.qty,
        purpose: formData.purpose
    });
    setFormData({name: "", qty: 0, purpose: ""})
  };

  return (
    <div>
      <h2>Add an Item to the Inventory</h2>
      <label htmlFor="name">Name: </label>
      <input
        name="name"
        type="text"
        placeholder="item name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="qty">Quantity: </label>
      <input
        name="qty"
        type="number"
        value={formData.qty}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="purpose">Purpose: </label>
      <input
        name="purpose"
        type="text"
        placeholder="item purpose"
        value={formData.purpose}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ItemForm;
