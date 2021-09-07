import "./App.css";
import NotePad from "./components/NotePad.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="title">CloudNote</span>
        <span className="logout-link">logout</span>
      </header>
      <NotePad />
    </div>
  );
}

export default App;
