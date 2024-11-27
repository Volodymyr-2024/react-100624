import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expenseSlice";

export default function ExpenseForm() {
  // Локальное состояние (state) для управления данными формы
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  // Ссылка на инпут (input) для фокуса после отправки формы
  const titleInputRef = useRef(null);

  // Получаем диспетчер (dispatch) из хука useDispatch
  const dispatch = useDispatch();

  // Функция-обработчик отправки формы
  const handleSubmit = (e) => {
    // Отменяем стандартное поведение формы
    e.preventDefault();
    // Удаляем лишние пробелы в начале и в конце строки
    const newTitle = title.trim();
    const newAmount = Number(amount);

    // Если не введён заголовок или сумма, то не добавляем расход
    if (!newTitle || !newAmount) {
      return;
    }

    // Отправляем экшен (action) на добавление нового расхода
    dispatch(
      addExpense({
        title: newTitle,
        amount: newAmount,
      })
    );

    // Очищаем форму после отправки
    setTitle("");
    setAmount(0);

    // Устанавливаем фокус на инпут (input) заголовка
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title of the expense"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        ref={titleInputRef}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
