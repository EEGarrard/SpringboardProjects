import React, { useState } from "react";

const NewItemForm = ({ addItem }) => {  // Changed to camelCase
  const initialState = {  // Fixed spelling
    name: "",
    qty: 1,  // Default to min value
  };
  
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "qty" ? parseInt(value) : value  // Ensure qty is number
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;  // Basic validation
    addItem({ ...formData });  // Changed to camelCase
    setFormData({ ...initialState, qty: 1 });  // Reset with qty=1
  };

  return (
    <div className="item-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Item Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter item name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="qty">
            Quantity: {formData.qty}  {/* Display current value */}
          </label>
          <input 
            id="qty"
            name="qty"
            type="range"
            min="1"
            max="10"
            value={formData.qty}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItemForm;