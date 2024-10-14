import { useState } from "react";
import TodoContext from "../context/TodoContext";

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Молоко", completed: false },
    { id: 2, text: "Яйца", completed: true },
    { id: 3, text: "Хлеб", completed: false },
  ]);

  function addTodo(newTodoText) {
    // Добавить новый todo в список
    const newTodo = { id: Date.now(), text: newTodoText, completed: false };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(todoId) {
    // Удаляем туду по id
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function toggleTodo(todoId) {
    // Переключаем флаг completed у туду по id
    const newTodos = todos.map((todo) => {
      // Если id не совпадает, то возвращаем туду без изменений
      if (todo.id !== todoId) return todo;
      // Если id совпадает, то возвращаем туду с измененным флагом completed
      return { ...todo, completed: !todo.completed };
    });
    setTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
