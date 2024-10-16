import { useContext } from "react";
import PropTypes from "prop-types";
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

// TodoItem.propTypes = {
//   todo: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//   }),
// };
