import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </div>
  );
}

export default App;
