import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import RestrictionScreen from '../pages/Restrictions/mainScreen';
export const RestrictionRoutes = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [activeClick, setActiveClick] = useState(false);

  return (
    <div style={{ backgroundColor: '#4b59f7' }}>
      <Header setToggle={setSidebarToggle} toggle={sidebarToggle} />
      <Sidebar toggle={sidebarToggle} active={setActiveClick} />

      <Routes>
        <Route
          exact
          path=""
          element={<RestrictionScreen toggle={sidebarToggle}/>}
        />
      </Routes>
    </div>
  );
};
