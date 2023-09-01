import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

import Dashboard from '../pages/Dashboard/dashboard';
import TrackerScreen from '../pages/Tracking/trackerScreen';
import AddTracker from '../pages/Tracking/addTracker';
export const DashboardRoutes = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [activeClick, setActiveClick] = useState(false);

  return (
    <div style={{ backgroundColor: '#4b59f7' }}>
      <Header setToggle={setSidebarToggle} toggle={sidebarToggle} />
      <Sidebar toggle={sidebarToggle} active={setActiveClick} />

      <Routes>
        {/* GeneralPages(Limited) */}
        <Route
          exact
          path="Dashboard"
          element={<Dashboard toggle={sidebarToggle} />}
        />
        {/* <Route
          exact
          path="Tracker"
          element={<TrackerScreen toggle={sidebarToggle} />}
        />

        <Route
          exact
          path='addTracker'
          element = {<AddTracker></AddTracker>}
        ></Route> */}
        
      </Routes>
    </div>
  );
};
