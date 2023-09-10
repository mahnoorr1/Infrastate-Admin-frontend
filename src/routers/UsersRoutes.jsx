import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import ManageUsers from '../pages/UsersManagement/manageUsers';
import ManageAdmins from '../pages/UsersManagement/manageAdmins';

export const UsersRoutes = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [activeClick, setActiveClick] = useState(false);

  return (
    <div style={{ backgroundColor: '#4b59f7' }}>
      <Header setToggle={setSidebarToggle} toggle={sidebarToggle} />
      <Sidebar toggle={sidebarToggle} active={setActiveClick} />
      <Routes>
        <Route
          path="/manageUsers"
          element={<ManageUsers toggle={sidebarToggle} />}
        />
        <Route
          path="/manageAdmins"
          element={<ManageAdmins toggle={sidebarToggle} />}
        />
      </Routes>
    </div>
  );
};
