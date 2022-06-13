import {configureStore} from '@reduxjs/toolkit';  
import rootReducer from '../reducers/';  

/*Create a function called getStore */

export default function getStore() {  
  return configureStore(rootReducer);
}

