import theme from "../../configs/theme";
import UserCard from "./Components/userCard";
import { Card, Typography } from "@mui/material";
import { demoUsers } from '../../configs/defaultData';
import UsersTable from './Components/allUserTable';
import { MainContainer } from "../../components/Contents/Contents.elements";

const ManageUsers = (props) => {
    return(
        <MainContainer active = {props.toggle}>
            <Typography 
            variant="h6"
            fontWeight={600}
            margin={0}>
                Manage Users
            </Typography>
            <hr/>
            <Typography 
            variant='body2'
            color={theme.palette.shades.greyText}>Top Users</Typography>
            <Card sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '0.7fr',
                    sm: '1fr 1fr',
                    md: '1fr 1fr 1fr',
                    lg: '1fr 1fr 1fr 1fr',
                },
                gap: '20px',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                justifyContent: 'center',
                padding: '5px',
                marginBottom: theme.customStyles.gaps.major,
            }}>
                {demoUsers.map((user, index) => {
                    return(
                        index <= 7 ?
                        <UserCard user={user}></UserCard>
                        : null 
                    )
                })}
            </Card>
            <Typography 
            variant='body2'
            color={theme.palette.shades.greyText}>All Users</Typography>
            <UsersTable></UsersTable>
        </MainContainer>
    )
}

export default ManageUsers;