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
import { FcComboChart } from 'react-icons/fc';
import ControlledCheckbox from '../../../components/CustomComponents/checkBox';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const EditPlanDialog = ({plan, open, handleClose}) => {
  const [price, setPrice] = useState(plan.price);
  const [project, setProject] = useState(plan.projects);
  const [support, setSupport] = useState(plan.support);
  const [roadChecked, setRoadChecked] = useState(plan.roads);
  const [rulesChecked, setRulesChecked] = useState(plan.rulesAccess);
  const [routesChecked, setRoutesChecked] = useState(plan.routesAccess);
  const [constructionChecked, setConstructionChecked] = useState(plan.construction);

  const handlePriceChange = (event) => {
      setPrice(event.target.value); 
  };
  const handleProjectChange = (event) => {
      setProject(event.target.value);
  }
  const handleSupportChange = (event) => {
      setSupport(event.target.value);
  }
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
                Edit {plan.name} Plan
            </Typography>
            <hr/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the {plan.name} plan details as per your requirements
          </DialogContentText>
          <div style={{display: 'flex', gap: '20px'}}>
            <div style={{
              width: '240px', 
              display: 'flex', 
              alignItems: 'flex-end', 
              marginBottom: '10px'
              }}>
              <Typography variant='body2'>Subscription Price: </Typography>
            </div>
            <TextField
            autoFocus
            label="Price"
            margin="dense"
            id="price"
            placeholder='Price of Plan'
            type="number"
            fullWidth
            variant="standard"
            value={price}
            onChange={handlePriceChange}
            
          />
          </div>

          <div style={{display: 'flex', gap: '20px'}}>
            <div style={{
              width: '240px', 
              display: 'flex', 
              alignItems: 'flex-end', 
              marginBottom: '10px'
              }}>
              <Typography variant='body2'>Allocated Projects: </Typography>
            </div>
            <TextField
            fullWidth
            autoFocus
            label="Projects"
            margin="dense"
            id="projects"
            placeholder='No of Allocated Projects'
            type="number"
            variant="standard"
            value={project}
            onChange={handleProjectChange}
            
          />
          </div>

          <div style={{display: 'flex', gap: '20px'}}>
            <div style={{
              width: '240px', 
              display: 'flex', 
              alignItems: 'flex-end', 
              marginBottom: '10px'
              }}>
              <Typography variant='body2'>Allocated Support Calls: </Typography>
            </div>
            <TextField
            fullWidth
            autoFocus
            label="Get Support"
            margin="dense"
            id="support"
            placeholder='No of User Call for Support'
            type="number"
            variant="standard"
            value={support}
            onChange={handleSupportChange}
            
          />
          </div>
          
          <Card sx={{
            boxShadow: 'none',
            marginTop: '20px',
          }}>
            <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
              <ControlledCheckbox check={constructionChecked} setChecked={setConstructionChecked}></ControlledCheckbox>
              <Typography>Allow Construction Plans Access</Typography>
            </div>

            <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
              <ControlledCheckbox check={roadChecked} setChecked={setRoadChecked}></ControlledCheckbox>
              <Typography>Allow Road Plans Access</Typography>
            </div>

            <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
              <ControlledCheckbox check={routesChecked} setChecked={setRoutesChecked}></ControlledCheckbox>
              <Typography>Allow Routing Features Access</Typography>
            </div>

            <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
              <ControlledCheckbox check={rulesChecked} setChecked={setRulesChecked}></ControlledCheckbox>
              <Typography>CDA Construction Rules Access</Typography>
            </div>
          </Card>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={handleClick}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditPlanDialog;