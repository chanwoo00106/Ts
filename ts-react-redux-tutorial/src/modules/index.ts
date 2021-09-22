import { combineReducers } from "redux";
import counter from './counter';

const rootReducer = combineReducers({
    counter,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;