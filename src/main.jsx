import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MarkerProvider } from './context/mapMarkerContext';
import App from './App.jsx';

const currentRoute = window.location.pathname;

if (currentRoute.startsWith('/auth')) {
  ReactDOM.createRoot(document.getElementById('auth-root')).render(
    <React.StrictMode>
      <MarkerProvider>
        <App />
      </MarkerProvider>
    </React.StrictMode>,
  );
} else {
  ReactDOM.createRoot(document.getElementById('main-root')).render(
    <React.StrictMode>
      <MarkerProvider>
        <App />
      </MarkerProvider>
    </React.StrictMode>,
  );
}
