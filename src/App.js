import "./App.css";
import Routing from "./Routing";
import { Link } from "react-router-dom";
import Todo from "./Todo";

function App() {
  return (
    <div>
      <h1>From App.js</h1>
      <Todo/>
      <Routing/>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/about/projects">Projects</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}

export default App;
