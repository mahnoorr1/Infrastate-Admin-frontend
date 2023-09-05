import theme from '../../configs/theme';
import React, { useState, useContext, useEffect } from 'react';
import emptyMail from '../../assets/emptyMail.png';
import AppButton from '../../components/Buttons/button';
import { Card, TextField, Typography } from "@mui/material";
import { feedbackReply, sampleParagraph } from '../../configs/defaultData';
import ReportsAndFeedbackList from "./Components/reportsFeedsList";
import HoverZoom from '../../components/CustomComponents/onhoverZoom';
import { MainContainer } from "../../components/Contents/Contents.elements";
import { SupportNotificationContext } from '../../context/supportNotifContext';

const HelpAndSupport = (props) => {
    const {notification, updateSelectedNotification } = useContext(SupportNotificationContext);
    const [changeToReply, setChangeToReply] = useState(false);
    const [alertType, setAlertType] = useState(notification.type);
    const [reportDescription, setReportDescription] = useState("");
    useEffect(() => {
        if (notification.type === 'feedback') {
          setAlertType('feedback');
          setChangeToReply(false);
        } else if (notification.type === 'report') {
          setAlertType('report');
          setChangeToReply(false);
          //this needs to fix
        }
      }, [notification.type]);
      useEffect(() => {
        if (notification.type === 'report') {
          setReportDescription("");
        }
      }, [notification.type]);
    
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
                            // if not replying, only viewing then only the mail is displayed
                            !changeToReply ? 
                            <Card sx={{
                                display: 'flex',
                                width: '100%',
                                padding: '10px',
                                flexDirection: 'column',
                                gap: '15px',
                            }}>
                                {/* <Card sx={{
                                    height: '60px',
                                    width: '85%',
                                    margin: theme.customStyles.gaps.major,
                                    padding: theme.customStyles.gaps.major,
                                    display: 'flex',
                                    alignItems: 'center',
                                    boxShadow: 'none',
                                    border: '1px solid',
                                    borderColor: theme.palette.shades.greyLine,
                                }}>
                                    <Typography
                                    variant='body1'
                                    color={theme.palette.shades.greyText}>{notification.subject}</Typography>
                                    
                                </Card> */}
                                <Card sx={{
                                    display: 'flex',
                                    flexDirection: {
                                        xs: 'column',
                                        lg: 'row',
                                    },
                                    gap: '20px',
                                    border: 'none',
                                    boxShadow:'none',
                                    paddingTop: '10px',
                                }}>
                                    <TextField 
                                        label="User"
                                        value={notification.sender}
                                        disabled
                                        InputProps={{
                                            readOnly: true, 
                                            style: {
                                                width: '300px',
                                            }
                                        }}
                                    />
                                    <TextField 
                                        label="User Email"
                                        value={notification.userEmail}
                                        disabled
                                        InputProps={{
                                            readOnly: true, 
                                            style: {
                                                width: '300px',
                                            }
                                        }}
                                    />
                                </Card>
                                
                                <TextField 
                                    label="Subject"
                                    value={notification.subject}
                                    disabled
                                    fullWidth
                                    InputProps={{
                                        readOnly: true, 
                                    }}
                                />
                                <TextField
                                    label="Description"
                                    multiline
                                    fullWidth
                                    rows={notification.type == 'feedback' ? 4 : 6} 
                                    value={notification.description}
                                    disabled
                                    variant="outlined" 
                                    InputProps={{
                                        style: {
                                        maxHeight: '200px', 
                                        overflowY: 'auto', 
                                        },
                                        readOnly: true,
                                    }}
                                />
                                <Card sx={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                    boxShadow: 'none',
                                }}>
                                    <HoverZoom>
                                        <AppButton 
                                        text={'Reply'} 
                                        variant={'outlined'}
                                        onClick={()=>{
                                            setChangeToReply(!changeToReply);
                                        }}
                                        ></AppButton>
                                    </HoverZoom>
                                </Card>
                                
                            </Card> : 
                            // if clicked on reply then this section will be displayed
                                <Card sx={{
                                    display: 'flex',
                                    width: '100%',
                                    padding: '10px',
                                    flexDirection: 'column',
                                    gap: '15px',
                                }}>
                                    <Card sx={{
                                        display: 'flex',
                                        flexDirection: {
                                            xs: 'column',
                                            lg: 'row',
                                        },
                                        gap: '20px',
                                        border: 'none',
                                        boxShadow:'none',
                                        paddingTop: '10px',
                                    }}>
                                        <TextField 
                                            label="User Email"
                                            value={notification.userEmail}
                                            disabled
                                            InputProps={{
                                                readOnly: true, 
                                                style: {
                                                    width: '300px',
                                                }
                                            }}
                                        />
                                        <TextField 
                                            label="Ticket Number"
                                            value={notification.ticketNo}
                                            disabled
                                            InputProps={{
                                                readOnly: true, 
                                                style: {
                                                    width: '300px',
                                                }
                                            }}
                                        />
                                </Card>
                                <TextField 
                                    label="Subject"
                                    value={"no-Reply - TicketNo: " + notification.ticketNo + " - " + notification.subject}
                                    fullWidth
                                />
                                
                                {
                                    alertType == 'feedback' ? 
                                    <TextField
                                    label= "Description"
                                    multiline
                                    fullWidth
                                    rows={6} 
                                    value={feedbackReply}
                                    variant="outlined" 
                                    InputProps={{
                                        style: {
                                        maxHeight: '200px', 
                                        overflowY: 'auto', 
                                        },
                                    }}></TextField> : 
                                    <TextField 
                                    label= "Description"
                                    multiline
                                    fullWidth
                                    value={reportDescription}
                                    rows={8} 
                                    variant="outlined" 
                                    InputProps={{
                                        style: {
                                        maxHeight: '200px', 
                                        overflowY: 'auto', 
                                        },
                                    }}>

                                    </TextField>
                                } 
                                <Card sx={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                    boxShadow: 'none',
                                }}>
                                    <HoverZoom>
                                        <AppButton 
                                        text={'Send Response'} 
                                        variant={'outlined'}
                                        onClick={()=>{
                                            //send Email
                                        }}
                                        ></AppButton>
                                    </HoverZoom>
                                </Card>

                            </Card>
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
                <Card sx={{
                    width: '100%',
                    display: 'grid', 
                    gap: '10px',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: '1fr 1fr',
                    },
                    boxShadow: 'none',
                }}>
                    <Card sx={{
                        height: '100%',
                        boxShadow: 'none',
                        padding: '10px',
                    }}>
                        <Typography 
                        variant='body2'
                        color={theme.palette.shades.greyText}>Privacy Policy</Typography>
                        <TextField 
                        multiline
                        fullWidth
                        value={sampleParagraph}
                        rows={15} 
                        variant="outlined" 
                        InputProps={{
                            style: {
                            height: 'auto', 
                            overflowY: 'auto', 
                            },
                        }}>

                        </TextField>
                    </Card>
                    <Card sx={{
                        height: '100%',
                        boxShadow: 'none',
                        padding: '10px',
                    }}>
                        <Typography 
                        variant='body2'
                        color={theme.palette.shades.greyText}>System Terms</Typography>
                        <TextField 
                        multiline
                        fullWidth
                        value={sampleParagraph}
                        rows={15} 
                        variant="outlined" 
                        InputProps={{
                            style: {
                            height: 'auto', 
                            overflowY: 'auto', 
                            },
                        }}>

                        </TextField>
                    </Card>
                </Card>
                <Card sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    boxShadow: 'none',
                }}>
                    <HoverZoom>
                        <AppButton 
                        text={'Update'} 
                        variant={'outlined'}
                        onClick={()=>{
                            //update terms
                        }}
                        ></AppButton>
                    </HoverZoom>
                </Card>
            </Card>
        </MainContainer>
    )
}

export default HelpAndSupport;