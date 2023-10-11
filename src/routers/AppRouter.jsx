import React from 'react';
import { UsersRoutes } from './UsersRoutes';
import { RulesRoutes } from './RulesRoutes';
import { TrackerRoutes } from './TrackerRoutes';
import { SupportRoutes } from './SupportRoutes';
import { DashboardRoutes } from './DashboardRoutes';
import { SubscriptionRoutes } from './subscriptionRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConstructionRoutes } from './ConstructionRoutes';
import { AuthRouter } from './AuthRouter';
import { RestrictionRoutes } from './RestrictionRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Auth/*" element={<AuthRouter />} />
        <Route path="/*" element={<DashboardRoutes />} />
        <Route path="/Tracker/*" element={<TrackerRoutes/>} />
        <Route path="/Support/*" element={<SupportRoutes/>}/>
        <Route path="/Rules/*" element={<RulesRoutes/>}/>
        <Route path="/restrictions/*" element={<RestrictionRoutes/>}/>
        <Route path="/Users/*" element={<UsersRoutes/>}/>
        <Route path="/Subscriptions/*" element={<SubscriptionRoutes/>}/>
        <Route path="/Construction" element={<ConstructionRoutes/>}/>
      </Routes>
    </BrowserRouter>
  );
};
