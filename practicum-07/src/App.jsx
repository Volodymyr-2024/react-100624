import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoProvider from "./components/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <h1>Context todos</h1>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
