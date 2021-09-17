import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

import "./App.css";

import NotePad from "./components/NotePad.js";
import Welcome from "./components/Welcome.js";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

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
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(increment(5))}>+5</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(decrement(5))}>-5</button>

            <h1>isLogged: </h1>
            {isLogged ? <div>yes</div> : <div>no</div>}
            <NotePad />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
