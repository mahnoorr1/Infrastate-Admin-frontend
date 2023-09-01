import theme from "../../configs/theme";
import { Card, Typography } from "@mui/material"
const SubHeadingCard = ({text}) => {
    return(
        <Card sx={{
            width: '100%',
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            height: '40px',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        }}>
            <Typography 
            variant='subheading1' 
            fontWeight={600} 
            color={theme.palette.shades.greenDark}>
                {text}
            </Typography>
        </Card>
    )
}

export default SubHeadingCard;