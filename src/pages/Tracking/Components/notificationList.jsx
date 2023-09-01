
import React, { useState } from 'react';
import theme from '../../../configs/theme';
import { Card, Typography } from "@mui/material";
import TopNavBar from "../../../components/CustomComponents/simpleNavBar";
import NotificationCard from "../../../components/CustomComponents/notificationItem";

const categories = ['All', 'Priority'];
const notifications = [
    {
        title: 'Tracker 101 update',
        description: '50% changes found respective to building details',
        date: '10/10/2022',
        alert: 'red',
        state: 'severe',
    },
    {
        title: 'Tracker 101 update',
        description: '10% changes found',
        date: '10/10/2022',
        alert: 'blue',
        state: 'normal',
    },
    {
        title: 'Tracker 101 update',
        description: '30% changes found',
        date: '10/10/2022',
        alert: 'green',
        state: 'severe',
    },
    {
        title: 'Tracker 101 update',
        description: '10% changes found',
        date: '10/10/2022',
        alert: 'red',
        state: 'normal',
    },
    {
        title: 'Tracker 101 update',
        description: '10% changes found',
        date: '10/10/2022',
        state: 'normal',
    },
    {
        title: 'Tracker 101 update',
        description: '50% changes found respective to building details',
        date: '10/10/2022',
        alert: 'red',
        state: 'severe',
    },
    {
        title: 'Tracker 101 update',
        description: '10% changes found',
        date: '10/10/2022',
        alert: 'blue',
        state: 'normal',
    },
    {
        title: 'Tracker 101 update',
        description: '30% changes found',
        date: '10/10/2022',
        alert: 'green',
        state: 'severe',
    },
    {
        title: 'Tracker 101 update',
        description: '10% changes found',
        date: '10/10/2022',
        alert: 'red',
        state: 'normal',
    },
    {
        title: 'Tracker 101 update',
        description: '10% changes found',
        date: '10/10/2022',
        state: 'normal',
    },
    {
        title: 'Tracker 101 update',
        description: '30% changes found',
        date: '10/10/2022',
        alert: 'green',
        state: 'severe',
    },
];
const NotificationList = () => {
    const [data, setData] = useState(notifications);
    var alertData = notifications.filter((notification)=> notification.state == 'severe');
    const handleCategoryChange = (newCategory) => {
      
      if (newCategory === 'All') {
        setData(notifications);
      } else if (newCategory === 'Priority') {
        setData(alertData); 
      } 
    };
    return(
        <Card sx={{
            width: '100%',
            border: 'none',
            boxShadow: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '95%',
        }}>
            
            <TopNavBar categories = {categories} onCategoryChange = {handleCategoryChange}></TopNavBar>
            <div style={{
                overflow: 'auto',
                height: '95%',
                flexDirection: 'column',
                }}>
            {
                data.length == 0 ? 
                <Typography sx={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    display: 'flex',
                    marginTop: '40%',
                }}  variant='body1' fontWeight={400} color={theme.palette.shades.greenDark}>
                    No new Notifications
                </Typography> : 
                data.map((notif)=> {
                    return(
                        <NotificationCard 
                        title={notif.title}
                        description={notif.description}
                        date={notif.date}
                        ></NotificationCard>
                    )
                })
            
            }
            </div>
            
        </Card>
    )
}

export default NotificationList;
