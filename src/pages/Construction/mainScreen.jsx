import React, { useContext, useState } from 'react';
import { Typography, Slide } from "@mui/material";
import AppButton from "../../components/Buttons/button";
import {MainContainer} from "../../components/Contents/Contents.elements";
import { MapMarkerContext } from "../../context/mapMarkerContext";
import AerialMap from "../../components/Maps/aerialViewMap";
import theme from '../../configs/theme';
import Selection from '../../components/CustomComponents/selectComponent';
import { constructionTypes } from '../../configs/defaultData';
import InputField from '../../components/CustomComponents/inputField';
import AlertDialog from '../../components/CustomComponents/alertDialogue';

const ConstructionMainScreen = (props) => {
    const {location, locationName, updateLocation, address} = useContext(MapMarkerContext);
    const [selectedConstructionType, setSelectedConstructionType] = useState('');
    const [ plotSize, setPlotSize ] = useState(0);
    const [openDialogue, setOpenDialogue] = useState(false);
   
    const handlePlotSize = (event) => {
        setPlotSize(event.target.value);
    }

    const handleApply = (event) => {
        if(address.address.municipality == 'Zone I' || address.address.municipality == 'Zone III' ){
            
        }
    }
    return (
        <MainContainer active={props.toggle}>
            <Typography 
            variant="h6"
            fontWeight={600}
            margin={0}>
                Construction Regulations
            </Typography>
            <hr/>
            <AerialMap height={'60vh'} width={'80vw'}></AerialMap>
            <div style={{
                marginLeft: '20px',
                marginTop: '10px',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '0.2fr 0.8fr',
                    gap: '30px',
                }}>
                    <Typography 
                    variant="body1"
                    color={theme.palette.shades.greyText}
                    >Selected Location: </Typography>
                    <Typography 
                    variant="body1"
                    fontWeight={600}
                    color={theme.palette.shades.greenLite}
                    >{locationName} </Typography>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '0.2fr 0.8fr',
                    gap: '30px',
                    paddingTop: '10px',
                    alignItems: 'center',
                }}>
                    <Typography 
                    variant="body1"
                    color={theme.palette.shades.greyText}
                    >Select Construction Type: </Typography>
                    <Selection 
                    label={'Select Construction Type'} 
                    data={constructionTypes}
                    updateZone={setSelectedConstructionType}></Selection>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '0.2fr 0.8fr',
                    gap: '30px',
                    paddingTop: '10px',
                    alignItems: 'center',
                }}>
                    <Typography 
                    variant="body1"
                    color={theme.palette.shades.greyText}
                    >Select Plot Measurement:</Typography>
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <InputField
                        initialValue={plotSize}
                        inputType={'numeric'}
                        updateValue={handlePlotSize}
                        ></InputField>
                        <Typography variant='body2' color={theme.palette.shades.greyText}>/ sq feet</Typography>
                    </div>
                </div>

            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '2.5vw',
                marginTop: '10px',
            }}>
                <AppButton 
                variant={'outlined'} 
                text={'Apply Filter'}
                onClick={handleApply}></AppButton>
            </div>
            <AlertDialog 
            content={'Construction Not Allowed in Choosen Area'}
            open={openDialogue}
            handleClose={()=>setOpenDialogue(false)}
            ></AlertDialog>
        </MainContainer>
    )
}

export default ConstructionMainScreen;