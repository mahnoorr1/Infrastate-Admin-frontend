import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

import Dashboard from '../pages/Dashboard/dashboard';
import TrackerScreen from '../pages/Tracking/trackerScreen';
import AddTracker from '../pages/Tracking/addTracker';
export const TrackerRoutes = () => {
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
          path=""
          element={<TrackerScreen toggle={sidebarToggle} />}
        />
        <Route
          exact
          path="/addTracker"
          element={<AddTracker/>}
        />
        
      </Routes>
    </div>
  );
};
