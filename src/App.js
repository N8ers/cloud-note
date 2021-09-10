import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import NotePad from "./components/NotePad.js";
import Welcome from "./components/Welcome.js";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <Link className="title link" to="/">
            <span>CloudNote</span>
          </Link>
          <Link className="link logout-link" to="/welcome">
            <span>logout</span>
          </Link>
        </nav>

        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/">
            <NotePad />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
