import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Notes from "./components/Notes/Notes.js";
import Welcome from "./components/Welcome/Welcome.js";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <Link to="/" className="title link">
            <span>CloudNote</span>
          </Link>
          <Link to="/welcome" className="link logout-link">
            <span>logout</span>
          </Link>
        </nav>

        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/:id?">
            <Notes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
