import React from "react";
import "./Welcome.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordCange = this.handlePasswordCange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  handlePasswordCange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form className="login-container">
          <h2>Log In</h2>
          <input
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="email"
            type="text"
          />
          <input
            value={this.state.password}
            onChange={this.handlePasswordCange}
            placeholder="password"
            type="password"
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Welcome;
