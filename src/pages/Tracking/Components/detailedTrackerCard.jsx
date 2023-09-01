import { Card, Typography } from "@mui/material";
import buildingRecognition from '../../../assets/buildingRecognition.png';
import HoverZoom from "../../../components/CustomComponents/onhoverZoom";

const TrackerCard = ({tracker}) => {
    return(
        <Card sx={{
            height: '400px',
            padding: '10px',
            borderRadius: '10px',
        }}>
            <HoverZoom>
                <Card sx={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '10px',
                    border: 'none',
                    boxShadow: 'none',
                    marginBottom: '20px',
                }}>
                    <img style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: '10px',
                        objectFit: 'cover',
                    }} src= {buildingRecognition}></img>
                </Card>
            </HoverZoom>
            <Typography 
            variant="subheading1" 
            fontWeight={600}
            >{tracker.id}</Typography>

            <Typography 
            overflow={'hidden'} 
            whiteSpace="nowrap" 
            textOverflow="ellipsis"
            variant="body1"
            >{tracker.location}</Typography>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Typography variant="body2">{tracker.lastUpdated}</Typography>
                <Typography variant="body2" color={'grey'}>{tracker.validity}</Typography>
            </div>
        </Card>
    )
}

export default TrackerCard;