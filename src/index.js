import React from 'react';
import {ReactDOM}from 'react-dom/client';
import App from './App';
import getStore  from './store/configureStore';


const store = getStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /* Gives the app access to the store */
    <Provider store={store}>
        <App/>    
    </Provider>    
);




