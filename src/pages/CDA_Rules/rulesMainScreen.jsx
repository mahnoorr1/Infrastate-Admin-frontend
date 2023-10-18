import { Typography } from '@mui/material';
import { MainContainer } from "../../components/Contents/Contents.elements";
import RulesTable from "./Components/rulesTable";
import AppButton from '../../components/Buttons/button';
import AddRuleDialog from './Components/addRuleDialogue';
import { useState } from 'react';

const RulesMainScreen = (props) => {
    const [rule, setRule] = useState();
    const [openDialogue, setOpenDialogue] = useState(false);
    const handleAddClick = () => {
        setOpenDialogue(true);
      };
    return(
        <MainContainer active = {props.toggle}>
            <div style={{
                display: 'flex',
                justifyContent:'space-between',
                alignItems: 'center',
            }}>
                <Typography 
                variant="h6"
                fontWeight={600}
                margin={0}>
                    Manage CDA Rules
                </Typography>
                <AppButton 
                text={'Add rule'}
                variant={'outlined'}
                onClick={handleAddClick}></AppButton>
            </div>
            <hr/>
            
            <RulesTable></RulesTable>
            <AddRuleDialog 
                rule={rule} 
                open={openDialogue}
                handleClose={() => setOpenDialogue(false)} 
            ></AddRuleDialog>
        </MainContainer>
    )
}

export default RulesMainScreen;