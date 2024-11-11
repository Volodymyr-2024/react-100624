import PropTypes from "prop-types";

import DashboardOptimized from "./components/DashboardOptimized.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { useState, useCallback } from "react";
import MemoizedComponent from "./components/MemoizedComponent.jsx";
import CallbackComponent from "./components/CallbackComponent.jsx";
import UserList from "./components/UserList.jsx";

const names = ["Olga", "Hugo", "Ana", "Jorge", "Sara", "Pedro"];

function App() {
  const [name, setName] = useState("Olga");
  const [counter, setCounter] = useState(0);

  console.log("Rendering <App />");

  function setRandomName() {
    setName(names[Math.floor(Math.random() * names.length)]);
  }

  const memoizedSetRandomName = useCallback(setRandomName, []);

  return (
    <div>
      <h1>useMemo and Memoization</h1>

      <Dashboard />
      <hr />
      <DashboardOptimized />
      {/* <MemoizedComponent name={name} />
      <button onClick={() => setCounter(counter + 1)}>
        Increment {counter}
      </button>
      <hr />
      <CallbackComponent func={memoizedSetRandomName} /> */}
      <UserList />
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
