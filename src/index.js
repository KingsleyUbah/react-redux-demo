import React from 'react';
import {ReactDOM}from 'react-dom/client';
import App from './App';
import getStore  from './store/configureStore';
import { useDispatch, useSelector, Provider } from 'react-redux'
import {toggleContactForm, handleInputChange} from './actions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /* Gives the app access to the store */
    <Provider store={getStore()}>
        <App/>    
    </Provider>    
);

const dispatch = useDispatch()
const store = getStore()

/* get application state tree */
const state = useSelector(state => state)

 store.subscribe(() =>
  console.log(store.getState())
)

/* returns isContactFormHidden returns false */
dispatch(toggleContactForm());
/* returns isContactFormHidden returns false */
dispatch(toggleContactForm());
dispatch(handleInputChange('email', 'ubahkingsley4@gmail.com'))

