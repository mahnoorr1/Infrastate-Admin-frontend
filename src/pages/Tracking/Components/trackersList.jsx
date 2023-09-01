import { Card } from "@mui/material";
import React, { useState } from 'react';
import theme from "../../../configs/theme";
import { TrackerListItem } from "./trackerListItem";
import { Trackers } from "../../../configs/defaultData";
import TopNavBar from "../../../components/CustomComponents/simpleNavBar";

const categories = ['All', 'Restrictive', 'Allowed']
const TrackersList = () => {
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
        <Card sx={{
            backgroundColor: theme.palette.cards.main,
            width: '98%',
            flexDirection: 'column',
            padding: '20px',
            border: 'none',
            boxShadow: 'none',
            height: '98%',
            marginBottom: '10px',
        }}>
            <TopNavBar categories={categories} onCategoryChange={handleCategoryChange}></TopNavBar>
            <div style={{
                height: '95%',
                flexDirection: 'column',
                overflow: 'auto',
            }}>
                {data.map((tracker)=> {
                return(
                    <TrackerListItem 
                        id={tracker.id}
                        zone={tracker.zone}
                        location={tracker.location}
                        date={tracker.lastUpdated}
                        sector={tracker.sector}
                    >
                    </TrackerListItem>
                );
            })}
            </div>
        </Card>
    );
}

export default TrackersList;