import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store'
import { BrowserRouter } from 'react-router-dom'
require('dotenv').config();

const rootElement : any = document.getElementById('root')
const {store, persistor } = configureStore();

if (rootElement.hasChildNodes()) {
    hydrate(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </BrowserRouter>
        </PersistGate>
        
    </Provider>,
        rootElement
    )
} else {
    render(
    
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <React.StrictMode>
                        <App/>
                    </React.StrictMode>
            </BrowserRouter> 
        </PersistGate>
    </Provider>,
    rootElement
        
    )
}
