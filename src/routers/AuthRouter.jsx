import React from 'react';
import LoginScreen from '../pages/Auth/login';
import { Routes, Route } from 'react-router-dom';

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <Routes>
        <Route exact path="login" element={<LoginScreen />} />
        {/* <Route exact path="register" element={<RegisterPage />} /> */}
      </Routes>
    </div>
  );
};
