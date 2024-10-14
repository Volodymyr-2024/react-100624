import { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");

  const { addTodo } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
