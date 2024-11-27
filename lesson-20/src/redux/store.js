import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { languageSlice } from "./languageSlice";
import { dataSlice } from "./dataSlice";

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    language: languageSlice.reducer,
    data: dataSlice.reducer,
  },
});
