import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm: confirmRef.current.value,
    });
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" ref={nameRef} placeholder="Full Name" />
        <br />
        <input id="email" type="email" ref={emailRef} placeholder="Email" />
        <br />
        <input
          id="password"
          type="password"
          ref={passwordRef}
          placeholder="Password"
        />
        <br />
        <input
          id="password_confirmation"
          type="password"
          ref={confirmRef}
          placeholder="Confirm Password"
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;
