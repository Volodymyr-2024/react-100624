import { useContext } from "react";
import TodoContext from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  function handleCheckboxClick() {
    toggleTodo(todo.id);
  }

  function handleDeleteClick() {
    deleteTodo(todo.id);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onClick={handleCheckboxClick}
      />
      <p
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </p>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}
