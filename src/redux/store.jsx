import rootReducer from './reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  // other configuration options
});

export default store;
