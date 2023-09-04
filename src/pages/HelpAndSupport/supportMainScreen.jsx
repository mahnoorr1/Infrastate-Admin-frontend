import React, {useState, useContext} from 'react';
import { Card, CardMedia, Typography } from "@mui/material";
import emptyMail from '../../assets/emptyMail.png';
import { MainContainer } from "../../components/Contents/Contents.elements";
import ReportsAndFeedbackList from "./Components/reportsFeedsList";
import { SupportNotificationContext } from '../../context/supportNotifContext';

const HelpAndSupport = (props) => {
    const {notification, updateSelectedNotification} = useContext(SupportNotificationContext);
    return(
        <MainContainer active = {props.toggle}>
            <Card sx={{
                height: '85vh',
                width: '100%',
                padding: '10px',
            }}>
                <Typography variant="h6"
                    fontWeight={600}>Feedback and Reports</Typography>
                    <hr/>
                <Card sx={{
                    border: 'none',
                    boxShadow: 'none',
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 0.6fr',
                    gap: '10px',
                    height: '99%'
                }}>
                    <Card sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        {
                            notification == '' ? 
                            <Card sx={{
                                border: 'none',
                                boxShadow: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: '10%'
                            }}>
                                <img 
                                src={emptyMail}
                                width={'250px'}
                                style={{
                                    opacity: 0.7,
                                }}></img>
                                <Typography 
                                color={'grey'}
                                marginTop={'20px'}>no alert selected to reply</Typography>
                            </Card> : 
                            <Card></Card>
                        }
                    </Card>
                    <Card sx={{
                        border: 'none',
                        boxShadow: 'none',
                    }}>
                        <ReportsAndFeedbackList></ReportsAndFeedbackList>
                    </Card>
                </Card>
            </Card>
            <Card sx={{
                height: '80vh',
                padding: '10px',
                marginTop: '20px',
            }}>
                <Typography variant="h6"
                    fontWeight={600}>Terms and Conditions</Typography>
                    <hr/>
            </Card>
        </MainContainer>
    )
}

export default HelpAndSupport;