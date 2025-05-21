import React, { useState } from "react";

const UserForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isInvalid, setIsInvalid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (formData.email === "") {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    if (!isInvalid) {
      alert(
        `Created username, ${username}, w/ email ${email}  password: ${password}`
      );
      setFormData(initialState);
    } 
  };
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        placeholder="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />
      {isInvalid && <span style={{ color: "red" }}>Email cannot be blank</span>}
      <br />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Add me to the list!</button>
    </form>
  );
};

export default UserForm;
