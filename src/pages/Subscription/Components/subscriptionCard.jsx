import { Card, Typography } from "@mui/material";
import theme from "../../../configs/theme";
import AppButton from '../../../components/Buttons/button';
import HoverZoom from '../../../components/CustomComponents/onhoverZoom';

const SubscriptionCard = ({plan}) => {
    var benefits = plan.benefits;
    return(
        <Card sx={{
            backgroundColor: 'transparent',
            border: '3px solid',
            borderColor: theme.palette.shades.greenLite,
            borderTopRightRadius: '100px',
            borderBottomLeftRadius: '100px',
            marginRight: '10px',
            marginLeft: '10px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Typography
            variant="h6"
            fontWeight={600}
            color={theme.palette.shades.greyText}>{plan.name}</Typography>
            <Card sx={{
                height: '100px',
                width: '100px',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.palette.shades.greenMedium,
                borderBottomRightRadius: '100px',
                borderTopRightRadius:'100px',
                borderBottomLeftRadius: '100px',
                marginBottom: '20px',
            }}>
                <Typography
                variant="h4"
                fontWeight={600}
                color={'white'}>${plan.price}</Typography>
            </Card>
            <Card sx={{
                    width: '100px',
                    height: '30px',
                    border: '2px solid',
                    borderColor: theme.palette.shades.greenLite,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '15px',
                    marginBottom: '10px',
                }}>
                    <Typography 
                    variant="body1"
                    color={theme.palette.shades.greenLite}>benefits</Typography>
            </Card>
            <Card sx={{
                border: 'none',
                boxShadow: 'none',
                backgroundColor: 'transparent',
                padding: '10px',
                display: 'flex',
                alignSelf: 'flex-start',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '15px',
            }}>
                <Typography 
                variant="body2"
                color={theme.palette.shades.greyText}>
                    Number of Projects: {plan.projects}
                </Typography>
                <Typography 
                variant="body2"
                color={theme.palette.shades.greyText}>
                    Access to Construction Plans
                </Typography>
                <Typography 
                variant="body2"
                color={theme.palette.shades.greyText}>
                    Access to Road Plans
                </Typography>
                <Typography 
                variant="body2"
                color={theme.palette.shades.greyText}>
                    Access to Routing features
                </Typography>
                {
                    plan.support > 5 ?
                    <Typography 
                    variant="body2"
                    color={theme.palette.shades.greyText}>
                         Unlimited Support
                    </Typography>:
                    <Typography 
                    variant="body2"
                    color={theme.palette.shades.greyText}>
                         {plan.support} times support per day
                    </Typography> 
                }
                
            </Card>
            <HoverZoom>
                <AppButton 
                variant={'outlined'}
                text={'Edit'}></AppButton>
            </HoverZoom>
        </Card>
    );
}
export default SubscriptionCard;