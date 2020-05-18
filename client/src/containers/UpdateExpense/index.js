import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';

import { addExpense } from '../../actionCreators/addExpenses';
import UpdateForm from './UpdateForm';
import './styles.css';

const UpdateExpense = ({ t, addExpense, expenseData, isPending, error }) => {

    const onSubmit = (formValues) => {
        addExpense(formValues);
    }
    return (
        <>
            <h3 style={{ marginBottom: 0 }}>
                {t('add_new_expense')}
            </h3>
            <UpdateForm
                onSubmit={onSubmit}
                expenseData={expenseData}
                isPending={isPending}
                error={error}
            />
        </>

    );
}

const mapStateToProps = ({ expenses: { expenseData, isPending, error } }) => {
    return { expenseData, isPending, error };
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: bindActionCreators(addExpense, dispatch)
});

export default withTranslation()
    (connect(mapStateToProps, mapDispatchToProps)(UpdateExpense));