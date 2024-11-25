import CounterButtons from "./components/CounterButtons";
import CounterNumber from "./components/CounterNumber";
import Language from "./components/Language";

function App() {
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <CounterNumber />
      <CounterButtons />
      <Language />
    </div>
  );
}

export default App;
