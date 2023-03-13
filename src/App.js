import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </div>
  );
}

export default App;
