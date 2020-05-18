import axios from 'axios';
import { call, put, takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actionTypes';
import * as actionCreators from '../actionCreators/fetchExpenses';

function* getExpenses() {
    try {
        const response = yield call(() => axios.get('http://localhost:3001/expenses'));
        yield put(actionCreators.fetchExpenseDataSuccess(response.data));
    } catch (error) {
        yield put(actionCreators.fetchExpenseDataError(error));
    }
}

export function* getExpensesTakeEvery() {
    yield takeEvery(actionTypes.FETCH_EXPENSE_START, getExpenses);
}
