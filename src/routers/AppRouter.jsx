import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { DashboardRoutes } from './DashboardRoutes';
import { TrackerRoutes } from './TrackerRoutes';
import { SupportRoutes } from './SupportRoutes';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/auth/*" element={<AuthRouter />} /> */}
        <Route path="/*" element={<DashboardRoutes />} />
        <Route path="/Tracker/*" element={<TrackerRoutes/>} />
        <Route path="/Support/*" element={<SupportRoutes/>}/>
      </Routes>
    </BrowserRouter>
  );
};
