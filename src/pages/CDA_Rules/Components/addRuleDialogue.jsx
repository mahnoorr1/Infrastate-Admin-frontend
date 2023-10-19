import React, { useState } from 'react';
import { 
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Slide, 
  Typography, 
  Card, 
} from '@mui/material';
import theme from '../../../configs/theme';
import { constructionTypes } from '../../../configs/defaultData';
import Selection from '../../../components/CustomComponents/selectComponent';
import InputField from '../../../components/CustomComponents/inputField';
import { CreateRule } from '../../../api/Rules';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const AddRuleDialog = ({rule, open, handleClose}) => {
  const [selectedConstructionType, setSelectedConstructionType] = useState('');
  const [maxStoreys, setMaxStoreys] = useState('');
  const [minPlotSize, setMinPlotSize] = useState(1);
  const [maxPlotSize, setMaxPlotSize] = useState(10000);
  const [groundCoverage, setGroundConverage] = useState('');
  const [setbacks, setSetbacks] = useState('');
  const [Basement, setBasement] = useState('');
  const [far, setFAR] = useState('');
  const [frontSetback, setFrontSetback] = useState('');
  const [other, setOther] = useState('');

  const handleCloseClick = () => {
    handleClose(); 
  }
  const handleSaveClick = async () => {
    console.log(maxStoreys);
    console.log(far);
    console.log(groundCoverage);
    console.log(setbacks);
    console.log(Basement);
    console.log(selectedConstructionType);
    console.log(minPlotSize + " " + maxPlotSize);
    console.log(frontSetback);
    console.log(other);
    const ruleData = {
      Maximum_No_of_storeys: maxStoreys,
      Maximum_FAR: far,
      Maximum_Ground_coverage: groundCoverage + '%',
      Setbacks: setbacks,
      Basement: Basement,
      Contstruction_Type: selectedConstructionType,
      Plot_Measurment_Min: minPlotSize,
      Plot_Measurment_Max: maxPlotSize,
      Front_Setback_Min: frontSetback,
      Other: other,
    };
    const response = await CreateRule(ruleData);

    if (response) {
      console.log('Rule added successfully!');
    } else {
      console.log('An error occurred while adding the rule.');
    }
    handleClose(); 
  }

  const handleMaxStoreys = (event) => {
    setMaxStoreys(event.target.value);
  }
  const handleMinPlotSize = (event) => {
    setMinPlotSize(event.target.value);
  }
  const handleMaxPlotSize = (event) => {
    setMaxPlotSize(event.target.value);
  }
  const handleGroundCoverage = (event) => {
    setGroundConverage(event.target.value);
  }
  const handleSetbacks = (event) => {
    setSetbacks(event.target.value);
  }
  const handleBasement = (event) => {
    setBasement(event.target.value);
  }
  const handleFAR = (event) => {
    setFAR(event.target.value);
  }
  const handleFrontSetback = (event) => {
    setFrontSetback(event.target.value);
  }
  const handleOther = (event) => {
    setOther(event.target.value);
  }

  return (
    <div>
      <Dialog 
        PaperProps={{ 
          sx: {
              borderRadius: '10px', 
              width: '90%',
          },
        }}
        open={open} 
        onClose={handleCloseClick} 
        keepMounted
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>
            <Typography 
            variant='h6'
            fontWeight={600}
            color={theme.palette.shades.greenDark}>
                Add a CDA Rule
            </Typography>
            <hr/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a CDA Rule by filling all the fields
          </DialogContentText>
          
          <div style={{
                display: 'grid',
                gap: '30px',
                gridTemplateColumns:'0.7fr 0.3fr',
                paddingTop: '10px',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body1"
                color={theme.palette.shades.greyText}
                >Construction Type: </Typography>
                <Selection 
                label={'Select Construction Type'} 
                data={constructionTypes}
                updateZone={setSelectedConstructionType}></Selection>
            </div>
            <div style={{
                display: 'grid',
                gap: '30px',
                gridTemplateColumns:'0.7fr 0.3fr',
                paddingTop: '10px',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body1"
                color={theme.palette.shades.greyText}
                >Max No of Storeys: </Typography>
                <InputField
                isrequired={true}
                label={'No. of storeys'}
                initialValue={maxStoreys}
                inputType={'text'}
                updateValue={handleMaxStoreys}
                ></InputField>
            </div>
            <div style={{
                display: 'grid',
                gap: '30px',
                gridTemplateColumns:'0.7fr 0.3fr',
                paddingTop: '10px',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body1"
                color={theme.palette.shades.greyText}
                >Min Plot Size: </Typography>
                <InputField
                isrequired={true}
                label={'Min Plot Size'}
                initialValue={minPlotSize}
                inputType={'numeric'}
                updateValue={handleMinPlotSize}
                ></InputField>
            </div>
            <div style={{
                display: 'grid',
                gap: '30px',
                gridTemplateColumns:'0.7fr 0.3fr',
                paddingTop: '10px',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body1"
                color={theme.palette.shades.greyText}
                >Max Plot Size: </Typography>
                <InputField
                isrequired={true}
                label={'Max Plot Size'}
                initialValue={maxPlotSize}
                inputType={'numeric'}
                updateValue={handleMaxPlotSize}
                ></InputField>
            </div>
            <div style={{
                display: 'grid',
                gap: '30px',
                gridTemplateColumns:'0.7fr 0.3fr',
                paddingTop: '10px',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body1"
                color={theme.palette.shades.greyText}
                >Max Ground Coverage: </Typography>
                <InputField
                isrequired={true}
                label={'Max Ground Coverage in %'}
                initialValue={groundCoverage}
                inputType={'numeric'}
                updateValue={handleGroundCoverage}
                ></InputField>
            </div>
            <div style={{
                display: 'grid',
                gap: '30px',
                gridTemplateColumns:'0.7fr 0.3fr',
                paddingTop: '10px',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body1"
                color={theme.palette.shades.greyText}
                >Max FAR: </Typography>
                <InputField
                isrequired={false}
                label={'Maximum FAR'}
                initialValue={far}
                inputType={'text'}
                updateValue={handleFAR}
                ></InputField>
            </div>
            <div style={{
                display: 'grid',
                gap: '30px',
                gridTemplateColumns:'0.7fr 0.3fr',
                paddingTop: '10px',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body1"
                color={theme.palette.shades.greyText}
                >Min Front Setback: </Typography>
                <InputField
                label={'Min Front Setback'}
                isrequired={false}
                initialValue={frontSetback}
                inputType={'numeric'}
                updateValue={handleFrontSetback}
                ></InputField>
            </div>
            <div style={{
                display: 'grid',
                gap: '30px',
                gridTemplateColumns:'0.7fr 0.3fr',
                paddingTop: '10px',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body1"
                color={theme.palette.shades.greyText}
                >Setbacks: </Typography>
                <InputField
                isrequired={false}
                label={'Front, Sides, Rear in ft'}
                initialValue={setbacks}
                inputType={'text'}
                updateValue={handleSetbacks}
                ></InputField>
            </div>
            <div style={{
                display: 'grid',
                gap: '30px',
                gridTemplateColumns:'0.7fr 0.3fr',
                paddingTop: '10px',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body1"
                color={theme.palette.shades.greyText}
                >Basement: </Typography>
                <InputField
                isrequired={false}
                label={'Basement Detail'}
                initialValue={Basement}
                inputType={'text'}
                updateValue={handleBasement}
                ></InputField>
            </div>
            <div style={{
                display: 'grid',
                gap: '30px',
                gridTemplateColumns:'0.7fr 0.3fr',
                paddingTop: '10px',
                alignItems: 'center',
            }}>
                <Typography 
                variant="body1"
                color={theme.palette.shades.greyText}
                >Any Other Detail: </Typography>
                <InputField
                isrequired={false}
                label={'Other Details'}
                initialValue={other}
                inputType={'text'}
                updateValue={handleOther}
                ></InputField>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseClick}>Cancel</Button>
          <Button onClick={handleSaveClick}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AddRuleDialog;