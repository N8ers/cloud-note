import React, { useState } from "react";
import "./Welcome.css";

import { useDispatch } from "react-redux";

import { attemptLogin } from "./welcomeSlice";

function Welcome() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("tsuki@meow.mail");
  const [password, setPassword] = useState("pstpstpstpst");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(attemptLogin({ email, password }));
        }}
        className="login-container"
      >
        <h2>Log In</h2>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          type="text"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
          type="password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Welcome;
