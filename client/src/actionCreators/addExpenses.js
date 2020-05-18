import * as actionTypes from '../actionTypes';

export const addExpense = formValues => {
    return {
        type: actionTypes.ADD_EXPENSE_START,
        formValues
    }
}

export const addExpenseSuccess = (expenseData) => {
    return {
        type: actionTypes.ADD_EXPENSE_SUCCEEDED,
        expenseData
    }
}

export const addExpenseError = (error) => {
    return {
        type: actionTypes.ADD_EXPENSE_FAILED,
        error
    }
}