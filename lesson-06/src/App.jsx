import axios from "axios";
import { useState } from "react";
import SimpleComponent from "./components/SimpleComponent";
import ColorChangeComponent from "./components/ColorChangeComponent";
import Interval from "./components/Interval";
import DataFetcher from "./components/DataFetcher";

function App() {
  const [showInterval, setShowInterval] = useState(false);

  return (
    <div>
      Hello
      <SimpleComponent />
      <ColorChangeComponent />
      <button
        onClick={() => {
          setShowInterval(!showInterval);
        }}
      >
        Toggle Interval
      </button>
      {showInterval && <Interval />}
      <DataFetcher />
    </div>
  );
}

export default App;
