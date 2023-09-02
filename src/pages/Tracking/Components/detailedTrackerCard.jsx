import theme from '../../../configs/theme';
import { Card, Typography } from "@mui/material";
import buildingRecognition from '../../../assets/buildingRecognition.png';
import HoverZoom from "../../../components/CustomComponents/onhoverZoom";

const TrackerCard = ({tracker}) => {
    return(
        <Card sx={{
            height: '400px',
            width: {
                xs: '100%',
                sm: '85%',
                md: '95%',
                lg: '100%',
            },
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
            // overflow={'hidden'} 
            // whiteSpace="nowrap" 
            // textOverflow="ellipsis"
            variant="body1"
            whiteSpace={'normal'}
            overflowWrap ={'break-word'}
            >{tracker.location}</Typography>
            {
                !tracker.change ? 
                <Typography 
                variant="body1" 
                color={theme.palette.shades.greenMedium} 
                marginBottom={'10px'}
                fontWeight={600}>No change Found</Typography> : 
                <div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography 
                        variant='body1' 
                        color={theme.palette.shades.red} 
                        fontWeight={600}>Change Found</Typography>
                        <Typography 
                        variant='h5' 
                        color={theme.palette.shades.red}
                        fontWeight={600}
                        >{tracker.changePercent}</Typography>
                    </div>
                    <Typography 
                    variant='body2' 
                    color={'grey'}
                    >Date of change: {tracker.dateOfChange}</Typography>
                </div>
            }
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body2"
                color={'grey'}
                >Updated: {tracker.lastUpdated}</Typography>
                <Typography 
                variant="body2" 
                fontWeight={600} 
                color={theme.palette.shades.greenMedium}
                >Validity: {tracker.validity}</Typography>
            </div>
        </Card>
    )
}

export default TrackerCard;