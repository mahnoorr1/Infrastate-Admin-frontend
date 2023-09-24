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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const EditUserDialog = ({user, open, handleClose}) => {
  const handleClick = () => {
    handleClose(); 
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
                Edit Plan
            </Typography>
            <hr/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the plan details as per your requirements
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={handleClick}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditUserDialog;