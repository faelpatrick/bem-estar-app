import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page478 from "./Pages/478";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page478 />
      </header>
    </div>
  );
}

export default App;
