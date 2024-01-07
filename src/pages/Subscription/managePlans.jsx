import { Typography, Card } from "@mui/material";
import theme from '../../configs/theme';
import { MainContainer } from "../../components/Contents/Contents.elements"
import SubscriptionCard from "./Components/subscriptionCard";
import { subscriptions, demoUsers} from "../../configs/defaultData";
import { getsubscriptions } from "../../api/subscription";
import { useEffect } from "react";
import { useState } from "react";

const ManageSubscriptions = (props) => {
    const [ subscriptions, setSubscriptions ] =useState([]);
    const getSubscriptionsPlans = async () => {
        const subscriptions = await getsubscriptions();
        setSubscriptions(subscriptions);
        console.log(subscriptions);
    }

    useEffect(()=> {
        getSubscriptionsPlans();
    }, [])

    return <MainContainer active = {props.toggle}>
        <Typography sx={{
            display: 'flex',
            justifyContent: 'center',
        }} variant="h5" fontWeight={600}>Manage Subscriptions</Typography>
        <Typography 
        sx={{
            display: 'flex',
            justifyContent:'center',
        }}
        variant="body1" 
        color={'grey'}>You currently have 3 active subscription packages</Typography>

        <Card sx={{
            display: 'grid',
            gridTemplateColumns: {
                sx: '1fr',
                md: '1fr 1fr',
                lg: '1fr 1fr 1fr'
            },
            gap: '20px',
            height: '500px',
            padding: '10px',
            margin: '10px',
            borderRadius: '10px',
        }}>
            {
                subscriptions.map((plan)=>{
                    return(
                        <SubscriptionCard plan={plan}></SubscriptionCard>
                    )
                })
            }
        </Card>
        {/* <Typography sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
        }} variant="h5" fontWeight={600}>Regular Top Subscribers</Typography>

        <Card sx={{
            boxShadow: 'none',
            padding: '10px',
            margin: '50px',
            display: 'grid',
            gap: '20px',
            backgroundColor: 'transparent',
            gridTemplateColumns: {
                xs: '1fr 1fr 1fr 1fr',
                md: '1fr 1fr 1fr 1fr 1fr 1fr',
                lg: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            }
        }}>
            {
                demoUsers.map((user) => {
                    return(
                    <Card sx={{
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Card sx={{
                            height: '60px',
                            width: '60px',
                            borderRadius: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: theme.palette.shades.greenLite,
                        }}>
                            <Typography 
                            variant="h4"
                            color={'white'}
                            fontWeight={600}>{user.name.charAt(0).toUpperCase()}</Typography>
                        </Card>
                        <Typography variant="body1" fontWeight={600}>{user.name}</Typography>
                        <Typography variant="body2" color={'grey'}>{user.organization}</Typography>
                        <Card sx={{
                                width: '80px',
                                height: '25px',
                                border: '2px solid',
                                borderColor: theme.palette.shades.greenLite,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '15px',
                                marginBottom: '10px',
                                backgroundColor: 'transparent',
                            }}>
                                <Typography 
                                variant="body2"
                                color={theme.palette.shades.greenLite}>{user.plan}</Typography>
                        </Card>
                    </Card>
                    )
                })
            }
        </Card> */}
    </MainContainer>
}

export default ManageSubscriptions;