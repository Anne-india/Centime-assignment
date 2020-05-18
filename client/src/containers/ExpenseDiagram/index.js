import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Plot from 'react-plotly.js';
import { withTranslation } from 'react-i18next';

import { fetchExpenseData } from '../../actionCreators/fetchExpenses';
import Spinner from '../../component/Spinner';

const initialState = {
    label: [],
    source: [],
    target: [],
    value: []
};

const ExpenseDiagram = ({ fetchExpenseData, expenseData, isPending, error, t }) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        fetchExpenseData();
    }, []);

    const generateGraphData = (expenseData, isPending, error) => {
        if (expenseData.length !== 0 && !isPending && !error) {
            const label = [], source = [], target = [], value = [];

            expenseData.forEach(({ incomeType, expenseType }) => {
                if (label.indexOf(incomeType) === -1) {
                    label.push(incomeType);
                }
                if (label.indexOf(expenseType) === -1) {
                    label.push(expenseType);
                }
            });

            expenseData.forEach(({ incomeType, expenseType, expenseAmount }) => {
                source.push(label.indexOf(incomeType));
                target.push(label.indexOf(expenseType));
                value.push(expenseAmount);
            });

            setState({
                label,
                source,
                target,
                value
            });
        }
    }

    useEffect(() => {
        generateGraphData(expenseData, isPending, error);
    }, [expenseData, isPending, error]);

    return (
        <>
            <h1>
                {t('expense_analyser_text')}
            </h1>
            <h3>
                {t('analyse_your_monthly_expenses_text')}
            </h3>
            <div>
                {
                    expenseData.length === 0 ?
                        <Spinner />
                        :
                        < Plot
                            data={[
                                {
                                    type: "sankey",
                                    orientation: "h",
                                    valuesuffix: "Rs",
                                    valueformat: ".0f",
                                    node: {
                                        pad: 15,
                                        thickness: 30,
                                        line: {
                                            color: "black",
                                            width: 0.5
                                        },
                                        label: state.label
                                    },

                                    link: {
                                        source: state.source,
                                        target: state.target,
                                        value: state.value
                                    }
                                }
                            ]}
                            layout={{ width: 720, height: 440 }}
                            config={{ staticPlot: true }}
                        />
                }

            </div>
        </>

    );
}

const mapStateToProps = ({ expenses: { expenseData, isPending, error } }) => {
    return { expenseData, isPending, error };
}

const mapDispatchToProps = (dispatch) => ({
    fetchExpenseData: bindActionCreators(fetchExpenseData, dispatch)
});

export default withTranslation()
    (connect(mapStateToProps, mapDispatchToProps)(ExpenseDiagram));
