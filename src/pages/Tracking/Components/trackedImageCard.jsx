import theme from "../../../configs/theme";
import { Card, Typography } from "@mui/material";
import HoverZoom from "../../../components/CustomComponents/onhoverZoom";
import buildingRecognition from '../../../assets/buildingRecognition.png';

const TrackerImageCard = () => {
    return(
        <Card sx={{
            width: '92%',
            height: '90%',
            backgroundColor: theme.palette.cards.main,
            borderRadius: '10px',
            margin: '10px',
            padding: '10px',

        }}>
            <HoverZoom height={'65%'}>
                <Card sx={{
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}>
                    <img 
                    src={buildingRecognition}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    ></img>
                </Card>
            </HoverZoom>
            <Card sx={{
                boxShadow: 'none',
                border: 'none',
                height: '35%',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                marginTop: '5px'
            }}>
                <Typography 
                variant="body1" 
                fontWeight={600}
                overflow={'hidden'}
                whiteSpace="nowrap" 
                textOverflow="ellipsis"
                >
                    complete location here 
                </Typography>
                <div style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
                    <Typography 
                    variant="body1"
                    overflow={'hidden'}
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis"
                    >lng: longitude</Typography>
                    <Typography 
                    variant="body1"
                    overflow={'hidden'}
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis"
                    >lat: latitude</Typography>
                </div>
                <Typography variant="body2">Date when applied</Typography>
            </Card>
        </Card>
    );
}

export default TrackerImageCard;