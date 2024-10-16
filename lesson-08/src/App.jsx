import { useState } from "react";
import CompWithFetchUser from "./components/CompWithFetchUser";
import CompWithProps from "./components/CompWithProps";
import SimpleComponent from "./components/SimpleComponent";

function App() {
  const [id, setId] = useState(1);

  function handleNextUser() {
    if (id < 10) {
      setId(id + 1);
    } else {
      setId(1);
    }
  }

  return (
    <>
      <h1>Lesson 08</h1>
      <SimpleComponent />
      <CompWithProps name="John Doe" />
      <CompWithFetchUser id={id} />
      <button onClick={handleNextUser}>Next user</button>
    </>
  );
}

export default App;
