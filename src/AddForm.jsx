import React, { useState } from "react";

export default function AddForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [form, setForm] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input type="text" id="name" name="name" onChange={handleChange} />
      <label htmlFor="email">email:</label>
      <input type="email" id="email" name="email" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
