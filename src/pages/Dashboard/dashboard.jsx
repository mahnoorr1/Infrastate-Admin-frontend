import React, {useEffect, useState} from 'react';
import theme from '../../configs/theme';
import {MainContainer} from "../../components/Contents/Contents.elements";
import SubHeadingCard from '../../components/CustomComponents/subheadingCard';
import { Card, Paper, Typography } from '@mui/material';
import BarsDataset from '../../components/Charts/barChart';
import PercentPieChart from '../../components/Charts/percentPieChart';
import AlertsList from './Components/alertsList';
import StatsCard from './Components/statsCard';
import { BiMapPin, BiMap } from 'react-icons/bi';
import { FiAlertTriangle } from 'react-icons/fi';
import { getOutputImages, getOutputJSON } from '../../Firebase/firebaseStorage';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
    const [imagesData, setImagesData] = useState([]);
    const [json, setJSON] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchImages = async () => {
          try {
            const folderPath = 'output/';
            const imagesData = await getOutputImages(folderPath);
            const jsonData = await getOutputJSON(folderPath);
            setImagesData(imagesData);
            var change = 0
            for(let i = 0; i<jsonData.length; i++){
                change += parseInt(Math.round(jsonData.jsonContent && jsonData[i].jsonContent.change_results_ai));
                console.log(change);
            }
            setJSON(change);
          } catch (error) {
            console.log("Error fetching images:", error);
          } finally {
            setLoading(false); // Set loading to false regardless of success or error
          }
        };
    
        fetchImages();
      }, []); 
      return (
        <MainContainer active={props.toggle}>
        {/* First Section */}
          <Card sx={{
            width: '100%',
            display: 'grid',
            height: {
                xs: '55vh',
                md: '40vh',
            },
            border: 'none',
            boxShadow: 'none',
            gridTemplateColumns: {
                xs: '1fr',
                md: '0.65fr 0.35fr'
            },
            gridTemplateRows: {
                xs: '0.7fr 0.3fr',
                md: '1fr'
            },
            gap: theme.customStyles.gaps.minor,
            backgroundColor: 'transparent',
          }}>
            {/* first section charts card */}
            <Card sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                height: '100%',
                gap: theme.customStyles.gaps.minor,
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
            }}>
                <Card sx={{
                    height: '99%',
                    width: '100%',
                }}>
                    <SubHeadingCard text={"Current Trackers Load"}></SubHeadingCard>
                    <Card sx={{
                        height: '100%',
                        width: '100%',
                        boxShadow: 'none',
                        border: 'none',
                        alignContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Card sx={{
                            width: '80%',
                            height: '60%',
                            boxShadow: 'none',
                            border: 'none',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <PercentPieChart percent={50} size={170}></PercentPieChart>

                        </Card>
                        <Typography 
                        variant='h6' 
                        fontWeight={600}>50% Load</Typography>
                        
                    </Card>
                </Card>
                <Card sx={{
                    height: '99%',
                    width: '100%',
                }}>
                    <SubHeadingCard text={"Monthly Change Detected"}></SubHeadingCard>
                    <Card sx={{
                        height: '100%',
                        width: '100%',
                        boxShadow: 'none',
                        border: 'none',
                        alignContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Card sx={{
                            width: '80%',
                            height: '60%',
                            boxShadow: 'none',
                            border: 'none',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <PercentPieChart percent={15} size={170}></PercentPieChart>

                        </Card>
                        <Typography 
                        variant='h6' 
                        fontWeight={600}>15% Change Detected</Typography>

                    </Card>
                </Card>
            </Card>
            {/* first section quantity cards */}
            <Card sx={{
                height: '100%',
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr 1fr 1fr 1fr',
                    md: '1fr 1fr',
                },
                gap: theme.customStyles.gaps.minor,
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
            }}>
                <StatsCard
                stat={imagesData.length}
                subtitle1={"Active Tracker Changes"}
                subtitle2={"Capacity: 20"}
                icon={<BiMapPin style={{
                    fontSize: '35px',
                    color: theme.palette.shades.greenLite,
                }}></BiMapPin>}
                iconBackColor={`${theme.palette.shades.greenMedium}20`}
                ></StatsCard>

                <StatsCard
                stat={imagesData.length}
                subtitle1={"Trackers Applied"}
                subtitle2={"Active: " + imagesData.length}
                icon={<BiMap style={{
                    fontSize: '35px',
                    color: theme.palette.shades.greenLite,
                }}></BiMap>}
                iconBackColor={`${theme.palette.shades.greenMedium}20`}
                ></StatsCard>

                <StatsCard
                stat={"50"}
                subtitle1={"UnChecked Alerts"}
                subtitle2={"Resolved: 500"}
                icon={<FiAlertTriangle style={{
                    fontSize: '35px',
                    color: theme.palette.shades.greenLite,
                }}></FiAlertTriangle>}
                iconBackColor={`${theme.palette.shades.greenMedium}20`}
                ></StatsCard>


            </Card>
            
          </Card>
          {/* Second Section */}
          <Card sx={{
            marginTop: theme.customStyles.gaps.minor,
            height: {
                xs: '95vh',
                md: '55vh',
            },
            gridTemplateColumns: {
                xs: '1fr',
                md: '0.6499fr 0.0001fr 0.35fr',
            },
            gridTemplateRows: {
                xs: '0.45fr 0fr 0.55fr',
                sm: '0.55fr 0fr 0.45fr',
                md: '1fr',
            },
            display: 'grid',
            gap: theme.customStyles.gaps.major,
          }}>
            <Card sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <BarsDataset></BarsDataset>
            </Card>
            <Card sx={{
                backgroundColor: 'lightgrey',
                border: 'none',
                boxShadow: 'none',
            }}></Card>
            {/* grey separation line */}
            <Card sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
            }}>
                <SubHeadingCard text={"Alerts"}></SubHeadingCard>
                <AlertsList></AlertsList>
            </Card>
          </Card>

        </MainContainer>
      );
}

export default Dashboard;