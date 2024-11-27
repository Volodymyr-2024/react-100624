import { configureStore } from "@reduxjs/toolkit";

import { expenseSlice } from "./expenseSlice";

// Создаём хранилище (store) с редьюсерами (reducers) для сущностей
// Объеденяем все редьюсеры (reducers) в один главный редьюсер (reducer)
export const store = configureStore({
  reducer: {
    expense: expenseSlice.reducer,
  },
});
