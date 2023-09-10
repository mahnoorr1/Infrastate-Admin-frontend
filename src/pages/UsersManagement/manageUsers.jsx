import { Card } from "@mui/material";
import { MainContainer } from "../../components/Contents/Contents.elements"

const ManageUsers = (props) => {
    return(
        <MainContainer active = {props.toggle}>
            <h2>Manage Users</h2>
            <Card sx={{
                backgroundColor: 'red',
            }}>oih</Card>
        </MainContainer>
    )
}

export default ManageUsers;