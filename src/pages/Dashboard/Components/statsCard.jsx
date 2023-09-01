import theme from "../../../configs/theme";
import { Card, Typography } from "@mui/material";
const StatsCard = ({stat, subtitle1, subtitle2}) => {
    return(
        <Card sx={{
            height: '98%',
            padding: '10px',
        }}>
            <Typography sx={{
                display: 'flex',
                justifyContent: 'center',
                border: '3px dashed',
                borderRadius: '5px', 
                borderColor: theme.palette.shades.greenMedium,
                backgroundColor: `${theme.palette.shades.greenMedium}20`
            }} 
            variant= {window.innerWidth >= 900 ? 'h3' : 'h4'}
            fontWeight={800}
            color={theme.palette.shades.greenMedium}
            >
                {stat}
            </Typography>
            <Typography
            sx={{
                display: 'flex',
                alignSelf: 'start',
            }}
            variant='body1'
            marginTop={1}
            color={'grey'}
            >
                {subtitle1}
            </Typography>

            <Typography
            sx={{
                display: 'flex',
                alignSelf: 'start',
            }}
            variant='body2'
            color={'grey'}
            >
                {subtitle2}
            </Typography>
        </Card>
    );
}

export default StatsCard;