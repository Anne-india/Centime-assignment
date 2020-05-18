import { combineReducers } from 'redux';
import ExpenseReducer from './fetchExpenseReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    expenses: ExpenseReducer,
    form: formReducer
});
