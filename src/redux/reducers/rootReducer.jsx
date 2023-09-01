// rootReducer.js
import { combineReducers } from 'redux';
import registerReducer from './register.reducer'; // Import the register slice reducer
import loginReducer from './authentication.reducer'; // Import the login slice reducer

const rootReducer = combineReducers({
  register: registerReducer, // Use the imported reducer
  login: loginReducer,
});

export default rootReducer;
