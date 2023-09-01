import React from 'react';
import theme from '../../configs/theme';
import { useNavigate } from 'react-router-dom';
import TrackerPieChart from './Components/pieChart';
import TrackersList from './Components/trackersList';
import AppButton from '../../components/Buttons/button';
import ChartLine from '../../components/Charts/lineChart';
import TrackerImageCard from './Components/trackedImageCard';
import NotificationList from './Components/notificationList';
import show_more_globe from '../../assets/show_more_globe.png';
import { Card, Container, Paper, Typography, Button } from '@mui/material';
import StaticAerialMap from '../../components/Maps/staticAerialMap';
import HoverZoom from '../../components/CustomComponents/onhoverZoom';
import {MainContainer} from "../../components/Contents/Contents.elements";

const previousTrackers = [
    {
        location: 'Street 26, G-6/2, G-6, Blue Area, Islamabad Capital Territory, 44010, Pakistan',
        lat: 33.709256, 
        lng: 73.082362,
        date: '22/07/2023',
    },
    {
        location: 'Street 26, G-6/2, G-6, Blue Area, Islamabad Capital Territory, 44010, Pakistan',
        lat: 33.709256, 
        lng: 73.082362,
        date: '22/07/2023',
    },
    {
        location: 'Street 26, G-6/2, G-6, Blue Area, Islamabad Capital Territory, 44010, Pakistan',
        lat: 33.709256, 
        lng: 73.082362,
        date: '22/07/2023',
    },
];


export const TrackerScreen = (props) => {
    const navigate = useNavigate();
    return(
        <MainContainer active = {props.toggle}>
            <div style={{justifyContent: 'flex-end', display: 'flex', marginRight: '0.5vw'}}>
                <HoverZoom>
                    <AppButton 
                        text={'Add Tracker'} 
                        onClick={()=>{
                            navigate('/Tracker/addTracker');
                        }}
                        variant={'outlined'}
                    ></AppButton>
                </HoverZoom>
            </div>
            <Paper sx = {{
                width: '100%',
                backgroundColor: 'transparent',
                // display: {
                //     xs: 'flex',
                //     md: 'grid',
                // },
                // gridTemplateColumns: {
                //     xs: "1fr", // Single column for small screens
                //     md: "1fr 1fr", // Two columns for larger screens
                //   },
                // gap: '10px',
                // flexDirection: {
                //     xs: 'column-reverse',
                //     md: 'row',
                // },
                border: 'none',
                boxShadow: 'none',
            }}>
                <Card sx={{
                    width: '100%',
                    height: {
                        xs: '100vh',
                        md: '50vh',
                    },
                    display: {
                        xs: 'flex',
                        md: 'grid',
                    },
                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },
                    gridTemplateColumns: {
                    xs: "1fr", 
                    md: "1.45fr 0.55fr",
                    },
                    gap: '5px',
                    backgroundColor : 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                }}>
                    <Card sx={{
                        padding: '10px',
                        height: '98%',
                    }}>
                        <Typography 
                        variant='subheading1' 
                        fontWeight={600} 
                        color={theme.palette.shades.greenDark}>
                            Recently Tracked Changes
                        </Typography>
                        <hr></hr>
                        <Paper sx={{
                            height: '100%',
                            backgroundColor: theme.palette.cards.main,
                            display: 'grid',
                            border: 'none',
                            boxShadow: 'none',
                            gridTemplateColumns: '0.97fr 0.03fr',
                        }}>
                                <Paper sx={{
                                    height: '90%',
                                    width: '100%',
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    border: 'none',
                                    boxShadow: 'none',
                                    backgroundColor: 'transparent',
                                }}>
                                    {
                                        previousTrackers.map((tracker, index)=>{
                                            return(
                                                index<=1 ?
                                                <TrackerImageCard></TrackerImageCard> : null
                                            );
                                        })
                                    }
                                </Paper>
                            {/* <HoverGradientCard>
                                { */}
                                <HoverZoom>
                                    <img src = {show_more_globe}
                                    alt='view more'
                                    width = {60}
                                    height = {43}
                                    style={{marginBottom: '30px'}}
                                    ></img>
                                </HoverZoom>
                                {/* }
                            </HoverGradientCard> */}
                        </Paper>
                        
                    </Card>
                    <Card sx = {{
                        width: '100%',
                        height: '98%',
                        backgroundColor: theme.palette.cards.main,
                        padding: '10px',
                        marginBottom: '5px',
                    }}>
                        <Typography sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }} variant='subheading1' fontWeight={600} color={theme.palette.shades.greenDark}>
                            Monthly Change
                        </Typography>
                        <hr></hr>
                        <TrackerPieChart></TrackerPieChart>
                    </Card>
                </Card>
                <Card sx={{
                    display: {
                        xs: 'flex',
                        md: 'grid',
                    },
                    flexDirection: {
                        xs: 'column-reverse',
                        md: 'row',
                    },
                    gridTemplateColumns: {
                    xs: "1fr", 
                    md: "1.45fr 0.55fr",
                    },
                    gap: '5px',
                    backgroundColor : 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                }}>
                    <Card
                        sx={{
                            display:'flex',
                            flexDirection: 'column',
                            height: {
                                xs: '100vh',
                                sm: '85%'
                            },
                            width: {
                                xs: '95vw',
                                md: '100%',
                            },
                        }}
                    >
                        <Card sx={{
                            width: '98%',
                            display: 'flex',
                            alignContent: 'center',
                            alignItems: 'center',
                            height: '60px',
                            margin: '0.9%',
                            padding: '10px',
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Typography 
                            variant='subheading1' 
                            fontWeight={600} 
                            color={theme.palette.shades.greenDark}>
                                Active Trackers Details
                            </Typography>
                            <AppButton 
                            variant={'text'} 
                            text={'view all'} 
                            onClick={()=>{navigate('/Tracker/allTrackers')}}
                            ></AppButton>
                        </Card>
                        <Container
                            sx={{
                                height: {
                                    sm: '60%',
                                    md: '45%'},
                                display: {
                                    xs: 'flex',
                                    md: 'grid',
                                },
                                gap: '20px',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: '0.55fr 0.45fr'
                                },
                            }}
                        >
                        
                            <TrackersList></TrackersList>
                            <ChartLine></ChartLine>

                        </Container>
                        <StaticAerialMap width={'95%'} height={'45vh'}></StaticAerialMap>
                    </Card>
                    <Card sx = {{
                        width: '100%',
                        backgroundColor: theme.palette.cards.main,
                        height: '85%',
                    }}>
                        <Card sx={{
                            width: '96%',
                            display: 'flex',
                            alignContent: 'center',
                            alignItems: 'center',
                            height: '60px',
                            margin: '2%',
                            padding: '10px',
                            justifyContent: 'center',
                            backgroundColor: 'transparent',
                        }}>
                            <Typography 
                            variant='subheading1' 
                            fontWeight={600} 
                            color={theme.palette.shades.greenDark}>
                                Notifications
                            </Typography>
                        </Card>
                        <NotificationList></NotificationList>
                    </Card>
                </Card>
                
            </Paper>
            
        </MainContainer>
    );
}

export default TrackerScreen;