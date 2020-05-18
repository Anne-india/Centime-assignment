import axios from 'axios';
import { call, put, takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actionTypes';
import * as actionCreators from '../actionCreators/fetchExpenses';

function* addExpense(action) {
    console.log('action', action);
    const { formValues } = action;
    try {
        yield call(() => axios.post('http://localhost:3001/expenses', { ...formValues }));
        const response = yield call(() => axios.get('http://localhost:3001/expenses'));
        yield put(actionCreators.fetchExpenseDataSuccess(response.data));
    } catch (error) {
        yield put(actionCreators.fetchExpenseDataError(error));
    }
}

export function* addExpenseTakeEvery() {
    yield takeEvery(actionTypes.ADD_EXPENSE_START, addExpense);
}
