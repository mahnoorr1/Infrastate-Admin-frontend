import React, { useState } from 'react';
import theme from '../../../configs/theme';
import { Card, Typography } from "@mui/material"
import TopNavBar from '../../../components/CustomComponents/simpleNavBar'
import AlertListItem from './alertListItem';

const alerts = [
    {
        source: 'customer1',
        zone: 'zone 1',
        sector: 'none',
        location: 'Ara Muhalla kahuta, pakistan',
        description: 'Construction Interests Declared by user',
        report_token: 'INF10234',
    },
    {
        source: 'Tracker Z1003',
        zone: 'zone 1',
        sector: 'F6',
        location: 'street 40, f-6, Islamabad',
        description: 'Change Found',
        report_token: 'INF10768',
    },
    {
        source: 'customer2',
        zone: 'zone 1',
        sector: 'none',
        location: 'Ara Muhalla kahuta, pakistan',
        description: 'Construction Interests Declared by user',
        report_token: 'INF10234',
    },
    {
        source: 'customer1',
        zone: 'zone 2',
        sector: 'f10',
        location: 'Ara Muhalla kahuta, pakistan',
        description: 'Construction Interests Declared by user',
        report_token: 'INF10234',
    },
    {
        source: 'customer1',
        zone: 'zone 3',
        sector: 'f7',
        location: 'Ara Muhalla kahuta, pakistan',
        description: 'Construction Interests Declared by user',
        report_token: 'INF10234',
    },
    {
        source: 'customer1',
        zone: 'zone 4',
        sector: 'I10',
        location: 'Ara Muhalla kahuta, pakistan',
        description: 'Construction Interests Declared by user',
        report_token: 'INF10234',
    },
    {
        source: 'customer1',
        zone: 'zone 5',
        sector: 'none',
        location: 'Ara Muhalla kahuta, pakistan',
        description: 'Construction Interests Declared by user',
        report_token: 'INF10234',
    },
    {
        source: 'Road Tracker R10987',
        zone: 'outside',
        sector: 'none',
        location: 'Ara Muhalla kahuta, pakistan',
        description: 'Road Plan Suggestion Generated',
        report_token: 'INF10234',
    },
];
const AlertsList = () => {
    const [data, setData] = useState(alerts);
    const categories = ['All', 'Roads', 'Z1', 'Z2','Z3', 'Z4', 'Z5'];
    // const categories = ['All', 'Roads'];
    const roads = alerts.filter((alert) => alert.source.includes('Road') || alert.zone == 'outside');
    const zone1 = alerts.filter((alert) => alert.zone == 'zone 1');
    const zone2 = alerts.filter((alert) => alert.zone == 'zone 2');
    const zone3 = alerts.filter((alert) => alert.zone == 'zone 3');
    const zone4 = alerts.filter((alert) => alert.zone == 'zone 4');
    const zone5 = alerts.filter((alert) => alert.zone == 'zone 5');
    
    const handleCategoryChange = (newCategory) => {
        if(newCategory === 'All'){
            setData(alerts);
            console.log(alerts);
        } else if(newCategory === 'Roads'){
            setData(roads);
        } 
        else if(newCategory === 'Z1'){
            setData(zone1);
        } else if(newCategory === 'Z2'){
            setData(zone2);
        } else if(newCategory === 'Z3'){
            setData(zone3);
        } else if(newCategory === 'Z4'){
            setData(zone4);
        } else if(newCategory === 'Z5'){
            setData(zone5);
        }
    };
    return(
        <Card sx={{
            width: '100%',
            height: '95%',
            border: 'none',
            boxShadow: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <TopNavBar categories={categories} onCategoryChange={handleCategoryChange}></TopNavBar>
            <div style={{
                overflow: 'auto',
                height: '88%',
                flexDirection: 'column',
                width: '100%',
                }}>
            {
                data.length == 0 ? 
                <Typography sx={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    display: 'flex',
                    marginTop: '20%',
                }}  variant='body1' fontWeight={400} color={theme.palette.shades.greenDark}>
                    No new Alerts
                </Typography> : 
                data.map((alert)=> {
                    return(
                        <AlertListItem alert={alert}></AlertListItem>
                    );
                })
            
            }
            </div>
            
        </Card>
    )
}

export default AlertsList;