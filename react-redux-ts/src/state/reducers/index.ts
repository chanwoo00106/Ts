import { combineReducers } from 'redux';
import bankReducer from './BankReducer'


const reducers = combineReducers({
    bank: bankReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>