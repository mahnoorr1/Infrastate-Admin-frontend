import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import RulesMainScreen from '../pages/CDA_Rules/rulesMainScreen';
export const RulesRoutes = () => {
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
          element={<RulesMainScreen toggle={sidebarToggle}/>}
        />
      </Routes>
    </div>
  );
};
