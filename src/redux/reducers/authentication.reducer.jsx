// loginSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { LOGIN } from '../actions/authentication.action';

const initialState = {
  email: '',
  pass: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload.email;
      state.pass = action.payload.password;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
