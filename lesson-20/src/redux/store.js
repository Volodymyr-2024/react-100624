import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { languageSlice } from "./languageSlice";

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    language: languageSlice.reducer,
  },
});
