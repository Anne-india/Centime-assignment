import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import * as serviceWorker from './serviceWorker';
import { store } from './store/configureStore';

import Container from '@material-ui/core/Container';
import ExpenseDiagram from './containers/ExpenseDiagram';
import UpdateExpense from "./containers/UpdateExpense";


import './index.css';

import i18n from './i18n';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Container maxWidth="md">
        <ExpenseDiagram />
        <UpdateExpense />
      </Container>
    </I18nextProvider>
  </Provider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
