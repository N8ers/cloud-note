import React from "react";
import "./Welcome.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form class="login-container">
          <h2>Log In</h2>
          <input placeholder="email" type="text" />
          <input placeholder="password" type="password" />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Welcome;
