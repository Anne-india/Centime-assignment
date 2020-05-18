import { all } from 'redux-saga/effects';
import { getExpensesTakeEvery } from './fetchExpenseData';
import { addExpenseTakeEvery } from './addExpenseData';

export default function* rootSaga() {
    yield all([
        getExpensesTakeEvery(),
        addExpenseTakeEvery()
    ])
}
