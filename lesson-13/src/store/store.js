import { createStore } from "redux";
import { balanceReducer } from "../reducers/balanceReducer";

export const store = createStore(balanceReducer);
