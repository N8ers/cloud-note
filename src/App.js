import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import NotePad from "./components/NotePad/NotePad.js";
import Welcome from "./components/Welcome/Welcome.js";

function App() {
  // const isLogged = useSelector((state) => state.isLogged);

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
            {/* <h1>isLogged: </h1>
            {isLogged ? <div>yes</div> : <div>no</div>} */}
            <NotePad />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
