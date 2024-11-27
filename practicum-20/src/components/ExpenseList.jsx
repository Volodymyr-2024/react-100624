import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../redux/expenseSlice";

export default function ExpenseList() {
  // Получаем список расходов из хранилища (store) с помощью селектора (selector)
  const expenses = useSelector((state) => state.expense.expenses);
  // Получаем диспетчер (dispatch) из хука useDispatch
  const dispatch = useDispatch();

  return (
    <ul>
      {/* Получили список из Редакс, отрисовываем */}
      {expenses.map((expense) => (
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
          key={expense.id}
        >
          <span>
            {expense.title} - {expense.amount}
          </span>
          <button
            onClick={() => {
              // Отправляем экшен (action) на удаление расхода с определённым id
              dispatch(deleteExpense(expense.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
