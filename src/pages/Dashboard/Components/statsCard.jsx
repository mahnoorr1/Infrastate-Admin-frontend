import theme from "../../../configs/theme";
import { Card, Typography } from "@mui/material";
const StatsCard = ({stat, subtitle1, subtitle2, icon, iconBackColor}) => {
    return(
        <Card sx={{
            height: '98%',
            padding: '10px',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '5px', 
                alignItems: 'center',
            }}>
                <Typography sx={{
                display: 'flex',
                justifyContent: 'center',
                // border: '3px dashed',
                
                }} 
                variant= {window.innerWidth >= 1200 ? 'h3' : 'h4'}
                fontWeight={800}
                color={theme.palette.shades.greenMedium}
                >
                    {stat}
                </Typography>
                <div style={{
                    backgroundColor: iconBackColor,
                    height: '50px',
                    width: '50px',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {icon}
                </div>
            </div>
            
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