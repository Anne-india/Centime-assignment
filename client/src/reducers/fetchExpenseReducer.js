import * as actionTypes from '../actionTypes';

const initialState = {
    expenseData: [],
    isPending: true,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_EXPENSE_START:
            return { ...state };
        case actionTypes.FETCH_EXPENSE_SUCCEEDED:
            return { ...state, expenseData: action.expenseData, isPending: false };
        case actionTypes.FETCH_EXPENSE_FAILED:
            return { ...state, isPending: false, error: action.error };
        default:
            return state;
    }
}