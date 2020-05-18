import * as actionTypes from '../actionTypes';

export const fetchExpenseData = () => {
    return {
        type: actionTypes.FETCH_EXPENSE_START
    }
}

export const fetchExpenseDataSuccess = (expenseData) => {
    return {
        type: actionTypes.FETCH_EXPENSE_SUCCEEDED,
        expenseData
    }
}

export const fetchExpenseDataError = (error) => {
    return {
        type: actionTypes.FETCH_EXPENSE_FAILED,
        error
    }
}