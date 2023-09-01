import { Card, Typography } from "@mui/material";
import theme from "../../../configs/theme";
export const TrackerListItem = ({id, zone, location, sector, date}) => {
    return(
        <Card
            sx = {{
                width: '98%',
                height: '80px',
                alignSelf: 'center',
                marginTop: '5px',
                [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                    width: '90%', 
                },
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                borderBottom: '1px solid',
                borderBottomColor: theme.palette.shades.greyLine,
                display: 'grid',
                gridTemplateColumns: '0.2fr 0.8fr',
                padding: '10px',
            }}
            
        >
            <Card sx={{
                height: '20px',
                width: '20px',
                borderRadius: '10px',
                backgroundColor: zone == 'zone 1' || zone == 'zone 3' ?
                 theme.palette.shades.red 
                 : theme.palette.shades.greenLite,
                justifyContent: 'center',
                alignSelf: 'center',
                marginRight: '10px'
            }}></Card>

            <div style={{flexDirection: 'column', display: 'flex'}}>
                <Card sx={{
                    display: 'grid', 
                    gridTemplateColumns: '0.5fr 0.5fr',
                    border: 'none',
                    boxShadow: 'none',
                    }}>
                    <Typography sx = {{
                        fontWeight: '600',
                    }}
                    color={theme.palette.shades.greenMedium}
                    overflow={'hidden'}
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis"
                    >
                    {id}
                    </Typography>
                    <Typography 
                    variant="body2" 
                    color={'grey'}
                    overflow={'hidden'}
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis"
                    >
                    updated: {date}
                    </Typography>
                </Card>
                <Typography 
                    variant="body2" 
                    color={'gray'} 
                    overflow={'hidden'}
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis"
                    >
                    {location}
                </Typography>
                <Typography 
                    variant="body2" 
                    color={theme.palette.shades.greenMedium} 
                    overflow={'hidden'}
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis"
                    >
                    sector: {sector}
                </Typography>

            </div>
        </Card>
    );
}