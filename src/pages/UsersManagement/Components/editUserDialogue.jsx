import dayjs from 'dayjs';
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
import SwitchButton from '../../../components/CustomComponents/switchButton';
import ResponsiveDatePickers from '../../../components/CustomComponents/datePicker';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const EditUserDialog = ({user, open, handleClose}) => {
    
const DatePicker = () => {
  return(
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Typography variant='body1' color={theme.palette.shades.greyText}>Specify Restriction till:</Typography>
      <ResponsiveDatePickers date={restrcitionDate} onDateChange={setRestrictionDate}></ResponsiveDatePickers>
    </div>
  )
}
  const [switchState, setSwitchState] = useState(user.status);
  const [restrcitionDate, setRestrictionDate] = useState(dayjs());
  const [enableState, setEnableState] = useState(user.status ? 'Enabled' : 'Disabled');
  const [switchColor, setSwitchColor] = useState(user.status ? theme.palette.shades.greenLite : theme.palette.shades.greyText);
  const [datepicker, setDatePicker] = useState(switchState ? DatePicker: <div></div>);
  const handleSwitchChange = (newState) => {
    setSwitchState(newState);
    setEnableState(enableState == 'Enabled' ? 'Disabled' : 'Enabled');
    setSwitchColor(switchColor == theme.palette.shades.greenLite ? theme.palette.shades.greyText : theme.palette.shades.greenLite);
    setDatePicker(datepicker == DatePicker ? <div></div> : DatePicker);
  };
  const handleClick = () => {
    //update user's information here
    handleClose(); 
    setSwitchState(user.status);
    setEnableState(user.status ? 'Enabled' : 'Disabled');
    setSwitchColor(user.status ? theme.palette.shades.greenLite : theme.palette.shades.greyText);
    setDatePicker(switchState ? DatePicker: <div></div>);
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
        onClose={handleClick} 
        keepMounted
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>
            <Typography 
            variant='h6'
            fontWeight={600}
            color={theme.palette.shades.greenDark}>
                Edit User [{user.name}]
            </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the user details according to your needs
            <hr/>
          </DialogContentText>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}>
            <Typography variant='body1'>Restrict User</Typography>
            <div style={{
              gap: '20px',
              display: 'flex',
            }}>
                <Card sx={{
                  boxShadow: 'none',
                  height: '30px',
                  width: '80px',
                  borderRadius: '20px',
                  border: '2px solid',
                  borderColor: {switchColor},
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Typography 
                  variant='body2'
                  color={switchColor}
                  >
                    {enableState}
                  </Typography>
                </Card>
                <SwitchButton state={switchState} onSwitchChange={handleSwitchChange}></SwitchButton>
            </div>
          </div>
          {
            datepicker
          }


        </DialogContent>
        <DialogActions onAbort={handleClick}>
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={handleClick}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditUserDialog;