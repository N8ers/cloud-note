import React from "react";
import "./Welcome.css";

import { useSelector, useDispatch } from "react-redux";

import { updateEmail, updatePassword } from "./welcomeSlice";

function Welcome() {
  const { email, password } = useSelector((state) => state.welcome);
  const dispatch = useDispatch();

  return (
    <div>
      <form className="login-container">
        <h2>Log In</h2>
        <input
          value={email}
          onChange={(event) => dispatch(updateEmail(event.target.value))}
          placeholder="email"
          type="text"
        />
        <input
          value={password}
          onChange={(event) => dispatch(updatePassword(event.target.value))}
          placeholder="password"
          type="password"
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Welcome;
