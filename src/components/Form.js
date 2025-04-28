import React from "react";
import Card from "./Card";

function Form() {
  const form = (
    <form id="info-form">
      <div>
        <input id="full_name" placeholder="Full Name" />
      </div>
      <div>
        <input id="email" type="email" placeholder="Email" />
      </div>
      <div>
        <input id="password" type="password" placeholder="Password" />
      </div>
      <div>
        <input
          id="password_confirmation"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );

  return <Card children={form} />;
}

export default Form;
