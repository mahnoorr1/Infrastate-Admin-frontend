import { MainContainer } from "../../components/Contents/Contents.elements"

const RulesMainScreen = (props) => {
    return(
        <MainContainer active = {props.toggle}></MainContainer>
    )
}

export default RulesMainScreen;