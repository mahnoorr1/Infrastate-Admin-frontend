import theme from '../../configs/theme';
import React, { useState, useContext } from 'react';
import { Card, Typography, Checkbox } from "@mui/material";
import AerialMap from "../../components/Maps/aerialViewMap";
import { TrackingZonesData } from '../../configs/defaultData';
import { MapMarkerContext } from '../../context/mapMarkerContext';
import Selection from '../../components/CustomComponents/selectComponent';
import { MainContainer } from "../../components/Contents/Contents.elements";
import AppButton from '../../components/Buttons/button';
// import SearchBar from '../../components/Maps/searchBar';

const AddTracker = () => {
    const [selectedZone, setSelectedZone] = useState('predefined zone');
    const {location, locationName, updateLocation} = useContext(MapMarkerContext);
    return(
        <MainContainer >
            <Card sx={{
                border: 'none',
                boxShadow: 'none',
                backgroundColor: 'transparent',
            }}>
                {/* <SearchBar></SearchBar> */}
                <Card sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },
                    border: 'none',
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                    padding: '10px',
                    gap: '10px',
                }}>
                    <Card sx={{
                        height: '50px',
                        width: '350px',
                        padding: '10px',
                        alignItems: 'center',
                        display: 'flex',
                    }}>
                        <Typography variant='body1' color={'grey'}>Search Location</Typography>
                    </Card>
                    <Typography sx={{
                        alignItems: 'center',
                        display: 'flex',
                    }} 
                    variant='subheading2'
                    color={theme.palette.shades.greenMedium}
                    fontWeight={600}
                    >or choose on Map</Typography>
                </Card>
                <Card sx={{
                    border: 'none',
                    boxShadow: 'none',
                    padding: '10px'
                }}>
                    <AerialMap width={'75vw'} height={'60vh'}></AerialMap>
                </Card>

                {/* <Card sx={{
                    padding: '10px',
                    border: 'none',
                    boxShadow: 'none',
                    display: {
                        xs: 'flex',
                        md: 'grid',
                    },
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: '1fr 1fr'
                    },
                }}>
                    
                </Card> */}
                <Card sx={{
                        display: 'flex',
                        border: 'none',
                        boxShadow: 'none',
                        paddingLeft: '30px',
                        paddingTop: '10px',
                        gap: '20px',
                        alignItems: 'center',
                    }}>
                        <Typography variant='body1'>Select Zone if applicable: </Typography>
                        <Selection data={TrackingZonesData} label={'Zone'} updateZone={setSelectedZone}></Selection>
                </Card>
                <Card sx={{
                    display: 'flex',
                    paddingLeft: '20px',
                    flexDirection: 'row',
                    gap: '10px',
                    alignItems: 'center',
                    paddingTop: '20px'
                }}>
                    <Checkbox required></Checkbox>
                    <Card sx={{
                        border: 'none', 
                        boxShadow: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography variant='body2'>Agree that you are sure to apply a Tracker on </Typography>
                        <Typography 
                        variant='body2' 
                        fontWeight={600} 
                        color={theme.palette.shades.greenMedium}
                        >{locationName} | {selectedZone}</Typography>
                    </Card>
                </Card>
                <Card sx={{
                    border: 'none', 
                    boxShadow: 'none',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: '10%'
                }}>
                    <AppButton 
                    variant={'outlined'}
                    text={'Add Tracker'} 
                    onClick={()=>{}}
                    ></AppButton>

                </Card>
            </Card>
        </MainContainer>
    );
}

export default AddTracker;