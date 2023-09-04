import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import HelpAndSupport from '../pages/HelpAndSupport/supportMainScreen';
import { SupportNotificationProvider } from '../context/supportNotifContext';
export const SupportRoutes = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [activeClick, setActiveClick] = useState(false);

  return (
    <SupportNotificationProvider>
      <div style={{ backgroundColor: '#4b59f7' }}>
        <Header setToggle={setSidebarToggle} toggle={sidebarToggle} />
        <Sidebar toggle={sidebarToggle} active={setActiveClick} />

        <Routes>
          {/* GeneralPages(Limited) */}
          <Route
            exact
            path=""
            element={<HelpAndSupport toggle={sidebarToggle}/>}
          />
          
        </Routes>
      </div>
    </SupportNotificationProvider>
  );
};
