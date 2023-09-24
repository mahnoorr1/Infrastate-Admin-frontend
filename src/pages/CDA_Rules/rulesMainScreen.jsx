import { Typography } from '@mui/material';
import { MainContainer } from "../../components/Contents/Contents.elements";
import RulesTable from "./Components/rulesTable";
import ZoneFilterComponent from './Components/zoneFilterComponent';

const RulesMainScreen = (props) => {
    return(
        <MainContainer active = {props.toggle}>
            <Typography 
            variant="h6"
            fontWeight={600}
            margin={0}>
                Manage CDA Rules
            </Typography>
            <hr/>
            <RulesTable></RulesTable>
        </MainContainer>
    )
}

export default RulesMainScreen;