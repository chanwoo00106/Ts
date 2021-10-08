import { combineReducers } from "redux";
import todo from "./todo";

const reducer = combineReducers({
    todo,
});

export default reducer;

export type reducerType = ReturnType<typeof reducer>;