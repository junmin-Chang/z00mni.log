import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'redux';
import { createStore } from 'react-redux';
import { rootReducer } from './rootReducer';
require('dotenv').config();

const devTools  =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)