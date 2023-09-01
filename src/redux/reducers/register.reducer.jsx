// registerSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from '../actions/register.action';

const initialState = {
  user: '',
  email: '',
  password: '',
  passwordConf: '',
  terms: false,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    createUser: (state, action) => action.payload,
    deleteUser: (state) => state,
    updateUser: (state) => {
      console.log('UPDATE_USER');
      return state;
    },
  },
});

export const {
  createUser,
  deleteUser,
  updateUser,
} = registerSlice.actions;
export default registerSlice.reducer;
