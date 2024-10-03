import "./App.css";
import ClickCounter from "./components/ClickCounter.jsx";
import MouseTracker from "./components/MouseTracker.jsx";
import KeyPressExample from "./components/KeyPressExample.jsx";
import FormExample from "./components/FormExample.jsx";
import DragAndDropExample from "./components/DragAndDropExample.jsx";
import AutoSaveForm from "./components/AutoSaveForm.jsx";
import ClickList from "./components/ClickList.jsx";
import Counter from "./components/Counter.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import NotesApp from "./components/NotesApp/NotesApp.jsx";

function App() {
  return (
    <>
      <h1>События и Реакт</h1>
      <div className="card">
        <NotesApp />
        <ClickCounter />
        <Counter />
        <ColorPicker />
        <ClickList />
        <MouseTracker />
        <KeyPressExample />
        <FormExample />
        <DragAndDropExample />
        <AutoSaveForm />
      </div>
    </>
  );
}

export default App;
