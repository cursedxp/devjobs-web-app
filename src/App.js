import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App light">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={""}></Route>
      </Routes>
    </div>
  );
}

export default App;
