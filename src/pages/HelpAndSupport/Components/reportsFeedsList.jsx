import AlertCard from './alertCard';
import { useContext } from 'react';
import { Card, Typography } from "@mui/material";
import React, {useState} from 'react';
import emptyMailBox from '../../../assets/emptyMailBox.png'
import { supportAlerts } from '../../../configs/defaultData';
import { SupportNotificationContext } from '../../../context/supportNotifContext';
import TopNavBar from "../../../components/CustomComponents/simpleNavBar";
import { useEffect } from 'react';
import { getAllfeedbacks } from '../../../api/feedback';

const categories = ['Reports', 'Feedbacks'];
const reports = supportAlerts.filter((alert) => alert.type == 'report');
const feedbacks = supportAlerts.filter((alert) => alert.type == 'feedback');

const ReportsAndFeedbackList = () => {
    const [report, setReports] = useState();
    const [feed, setFeedbacks] = useState();
    const [data, setData] = useState(null);
    const getFeedbacks = async ()=>{
        const res = await getAllfeedbacks();
        console.log(res);
        const feedback = res.filter((res) => res.type == 'feedback');
        const reports = res.filter((res) => res.type == 'report');
        setReports(reports);
        setFeedbacks(feedback);
        setData(report);
    }
    useEffect(()=> {
        getFeedbacks()
    },[])
    
    const {notification, updateSelectedNotification} = useContext(SupportNotificationContext);

    const handleCategoryChange = (newCategory) => {
        if(newCategory === 'Reports'){
            setData(report);
        } else if(newCategory === 'Feedbacks'){
            setData(feed);
        }
    }
    const handleAlertClick = (alert) => {
        updateSelectedNotification(alert);
    };

    return(
        <Card sx={{
            height: '98%',
            width: '99%',
            padding: '5px',
            bordeR: 'none',
            boxShadow: 'none',
        }}>
            <TopNavBar categories={categories} onCategoryChange={handleCategoryChange}></TopNavBar>
            {
                data?.length == 0 ? 
                <Card sx={{
                    display: 'flex',
                    border: 'none',
                    boxShadow: 'none',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <Card sx={{
                        border: 'none',
                        boxShadow: 'none',
                        display: 'flex',
                        marginTop: '50px',
                    }}>
                        <img 
                        src={emptyMailBox}
                        height={'200px'}
                        style={{
                            opacity: 0.7,
                        }}></img>
                    </Card>
                    <Typography marginTop={'20px'} variant='body1' color={'grey'}>empty mailbox</Typography>
                </Card> :
                data?.map((alert) => {
                    return(
                        <AlertCard alert={alert} onClick={handleAlertClick}></AlertCard>
                    )
                })
            }
        </Card>
    )
}

export default ReportsAndFeedbackList;