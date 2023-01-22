import { useState } from "react";
import "./App.css";

import DashBoard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = useState([]); 
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="App">
      {isStarted ? (
        <DashBoard
          setIsStarted={setIsStarted}
          items={items}
          setItems={setItems}
        />
      ) : (
        <Home setIsStarted={setIsStarted} />
      )}
    </div>
  );
}

export default App;
