import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import ConstructionMainScreen from '../pages/Construction/mainScreen';
import ManualTracking from '../pages/Construction/manualTracking';
import TrackerDetailsAndApply from '../pages/Construction/detailsAndApply';
import AddTrackerOnZoneSegment from '../pages/Construction/addTrackerOnZoneSegment';

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
          
          <Route exact path='/manualTracking' element = {<ManualTracking/>}/>
          <Route exact path='/trackerDetails' element={<TrackerDetailsAndApply/>}/>
          <Route path="/trackerDetails/addTracker" element={<AddTrackerOnZoneSegment/>}/>
        </Routes>
      </div>
  );
};
