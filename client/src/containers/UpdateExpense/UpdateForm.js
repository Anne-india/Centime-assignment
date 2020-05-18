import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { withTranslation } from 'react-i18next';

import Select from '../../component/Select';
import Input from '../../component/Input';

const UpdateForm = (props) => {

    const renderSelect = ({ input, id, label, menuItem, meta: { touched, error } }) => {
        const className = `field ${error && touched ? 'error' : ''}`;
        return (
            <Select
                id={id}
                label={label}
                className={className}
                formHelperText={touched && error}
                menuItem={menuItem}
                {...input}
            />
        );
    }

    const renderInput = ({ input, id, label, type, meta: { error, touched } }) => {
        const className = `field ${error && touched ? 'error' : ''}`;
        return (
            <Input
                id={id}
                className={className}
                label={label}
                helperText={touched && error}
                type={type}
                {...input}
            />
        );
    }

    const onSubmit = (formValues) => {
        console.log('formValues', formValues);
        props.onSubmit(formValues);
    }
    const { t, handleSubmit, expenseData, isPending, error } = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
            <Field
                name="incomeType"
                id="income_type"
                component={renderSelect}
                label={t('select_income_type_text')}
                menuItem={expenseData.length !== 0 && !isPending && !error ? expenseData : ''}
            />
            <Field
                name="expenseType"
                type="string"
                id="expense_name"
                component={renderInput}
                label={t('enter_expense_name_text')}
            />
            <Field
                name="expenseAmount"
                type="number"
                id="expense_amount"
                component={renderInput}
                label={t('enter_expense_amount_text')}
            />
            <div className="buttonWrapper">
                <button className="button primary">{t('submit_button_text')}</button>
            </div>
        </form>
    );
}

const validate = (formValues, props) => {
    const errors = {};
    const { t } = props;
    if (!formValues.incomeType) {
        errors.incomeType = t('error_income_text');
    }
    if (!formValues.expenseType) {
        errors.expenseType = t('error_expense_type_text');
    }
    if (!formValues.expenseAmount) {
        errors.expenseAmount = t('error_expense_amount_text');
    }
    return errors;
};

const afterSubmit = (result, dispatch) =>
    dispatch(reset('updateform'));

export default withTranslation()
    (reduxForm({
        form: 'updateform',
        onSubmitSuccess: afterSubmit,
        validate
    })(UpdateForm));
