import React, { useState } from 'react';
import { Card } from '@mui/material';
import { Trackers } from "../../configs/defaultData";
import { MainContainer } from "../../components/Contents/Contents.elements"
import TopNavBar from "../../components/CustomComponents/simpleNavBar";
import TrackerCard from './Components/detailedTrackerCard';

const AllTrackers = () => {
    const categories = ['All', 'Restrictive', 'Allowed']
    const [data, setData] = useState(Trackers);
    var restrictive = Trackers.filter((tracker)=> tracker.zone == 'zone 1' || tracker.zone == 'zone 3');
    var allowed = Trackers.filter((tracker) => 
     tracker.zone == 'zone 2'
     || tracker.zone == 'zone 4'
     || tracker.zone == 'zone 5');
    const handleCategoryChange = (newCategory) => {
      if (newCategory === 'All') {
        setData(Trackers);
      } else if (newCategory === 'Restrictive') {
        setData(restrictive); 
      } else if (newCategory === 'Allowed'){
        setData(allowed);
      }
    };
    return(
        <MainContainer>
            <TopNavBar categories={categories} onCategoryChange={handleCategoryChange}></TopNavBar>
            <Card sx={{
                width: '90%',
                margin: '10px',
                padding: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    md: '1fr 1fr',
                    lg: '1fr 1fr 1fr',
                },
                gap: '20px',
            }}>
                {
                    data.map((tracker) => {
                        return(
                            <TrackerCard tracker={tracker}></TrackerCard>
                        );
                    })
                }
            </Card>
        </MainContainer>
    )
}

export default AllTrackers;