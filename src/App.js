import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

import NotePad from "./components/NotePad.js";
import Welcome from "./components/Welcome.js";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
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
            <h1>Counter: {counter}</h1>
            <button>+</button>
            <button>-</button>

            <h1>isLogged: </h1>
            {isLogged ? <div>yes</div> : <h1>no</h1>}
            <NotePad />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
