import React, { useState } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { ThemeProvider } from 'styled-components';
import theme from "./configs/theme";

export default function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
}
