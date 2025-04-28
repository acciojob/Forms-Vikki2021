import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input
          id="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <br/>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br/>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <br/>
        <input
          id="password_confirmation"
          type="password"
          value={formData.password_confirmation}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;
