import React from 'react';
import { RulesRoutes } from './RulesRoutes';
import { TrackerRoutes } from './TrackerRoutes';
import { SupportRoutes } from './SupportRoutes';
import { DashboardRoutes } from './DashboardRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsersRoutes } from './UsersRoutes';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/auth/*" element={<AuthRouter />} /> */}
        <Route path="/*" element={<DashboardRoutes />} />
        <Route path="/Tracker/*" element={<TrackerRoutes/>} />
        <Route path="/Support/*" element={<SupportRoutes/>}/>
        <Route path="/Rules/*" element={<RulesRoutes/>}/>
        <Route path="/*" element={<UsersRoutes/>}/>
      </Routes>
    </BrowserRouter>
  );
};
