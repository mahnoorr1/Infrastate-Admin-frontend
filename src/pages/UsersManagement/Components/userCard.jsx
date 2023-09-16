import { Card, Typography } from "@mui/material";
import { colors } from '../../../configs/defaultData';
import theme from "../../../configs/theme";
import HoverZoom from "../../../components/CustomComponents/onhoverZoom";

const UserCard = ({user}) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    return (
        <HoverZoom>
        <Card sx={{
            height: '70px',
            borderRadius: '10px',
            padding: '5px',
            paddingLeft: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            width: '100%',
        }}>
            <div style={{
                display: 'flex',
                gap: '10px',
            }}>
                <Card sx={{
                    height: '50px',
                    width: '50px',
                    borderRadius: '25px',
                    backgroundColor: randomColor,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography 
                    variant="h5"
                    color={'white'}
                    fontWeight={600}>{user.name.charAt(0).toUpperCase()}</Typography>
                </Card>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                    }}>
                        <Typography 
                        variant="body1"
                        fontWeight={600}>
                            {user.id}
                        </Typography>
                        <Card sx={{
                            border: '2px solid',
                            borderColor: theme.palette.shades.greenLite,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '80px',
                            borderRadius: '20px',
                            cursor: 'pointer'
                        }}>
                            <Typography 
                            variant="body2" 
                            color={theme.palette.shades.greenLite}>
                                {user.plan}
                            </Typography>
                        </Card>
                    </div>
                    <Typography
                    variant="body2"
                    color={'grey'}>{user.name}</Typography>
                </div>
            </div>
            
            
        </Card>
        </HoverZoom>
    )
}

export default UserCard;