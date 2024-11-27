import { createSlice } from "@reduxjs/toolkit";

// Создаём новый срез (слайс) для сущности "расход" (expense)
export const expenseSlice = createSlice({
  // Название среза (слайса)
  name: "expense",
  // Начальное состояние (state) среза (слайса)
  initialState: {
    expenses: [],
  },
  // Редьюсеры (reducers) для изменения состояния (state) среза (слайса)
  reducers: {
    // Каждый редьюсер (reducer) - это функция, которая принимает два аргумента:
    addExpense: (state, action) => {
      // Можно мутировать (изменять) state напрямую - особенность Redux Toolkit
      // { type: "...", payload: { title: "...", amount: xx } }
      const newExpense = {
        id: Date.now(),
        title: action.payload.title,
        amount: action.payload.amount,
      };
      state.expenses.push(newExpense);
    },
    deleteExpense: (state, action) => {
      // { type: "...", payload: 123123123123 }
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    resetExpenses: (state) => {
      state.expenses = [];
    },
  },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;

// actions - это объект, который содержит все экшены (actions) среза (слайса)
expenseSlice.actions;
// reducer - главный редьюсер (reducer) среза (слайса)
expenseSlice.reducer;
