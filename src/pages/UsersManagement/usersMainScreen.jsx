import { MainContainer } from "../../components/Contents/Contents.elements"

const UsersManagementMainScreen = (props) => {
    return(
        <MainContainer active = {props.toggle}></MainContainer>
    )
}

export default UsersManagementMainScreen;