import React from 'react';
import { UsersRoutes } from './UsersRoutes';
import { RulesRoutes } from './RulesRoutes';
import { TrackerRoutes } from './TrackerRoutes';
import { SupportRoutes } from './SupportRoutes';
import { DashboardRoutes } from './DashboardRoutes';
import { SubscriptionRoutes } from './subscriptionRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConstructionRoutes } from './ConstructionRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/auth/*" element={<AuthRouter />} /> */}
        <Route path="/*" element={<DashboardRoutes />} />
        <Route path="/Tracker/*" element={<TrackerRoutes/>} />
        <Route path="/Support/*" element={<SupportRoutes/>}/>
        <Route path="/Rules/*" element={<RulesRoutes/>}/>
        <Route path="/users/*" element={<UsersRoutes/>}/>
        <Route path="/subscriptions/*" element={<SubscriptionRoutes/>}/>
        <Route path="/construction" element={<ConstructionRoutes/>}/>
      </Routes>
    </BrowserRouter>
  );
};
