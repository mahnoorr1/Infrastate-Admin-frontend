import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import ConstructionMainScreen from '../pages/Construction/mainScreen';

export const ConstructionRoutes = () => {
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
            element={<ConstructionMainScreen toggle = {sidebarToggle}/>}
          />
          
        </Routes>
      </div>
  );
};
