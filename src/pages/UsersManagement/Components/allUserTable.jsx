import React, { useState } from 'react';
import { 
  Card, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination, 
  TableRow, 
  Typography } from '@mui/material';
import theme from '../../../configs/theme';
import { GoCreditCard } from 'react-icons/go';
import { LiaUserEditSolid } from 'react-icons/lia'; 
import EditUserDialog from './editUserDialogue';
import { useEffect } from 'react';

const columns = [
  { id: 'userID', label: 'User ID', minWidth: 80 },
  { 
    id: 'name',
    label: 'Name/ Email', 
    minWidth: 120, 
  },
  {
    id: 'subscription',
    label: 'Subscription',
    minWidth: 120,
    align: 'left',
  },
  {
    id: 'projects',
    label: 'Projects',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 120,
    align: 'center',
  }
];

function createData(userID, name, email, subscription, projects) {
  return { userID, name, email, subscription, projects };
}

const NameAndEmail = ({ name, email }) => {
  return (
    <div>
      <Typography variant='body2' color={'grey'}>{name}</Typography>
      <Typography variant='body2' color={'grey'}>{email}</Typography>
    </div>
  );
};

const SubscriptionCard = ({ subscription }) => {
  return (
    <Card sx={{
      width: '80px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid',
      borderColor: subscription == 'basic' ? 
      theme.palette.shades.blueLite : subscription == 'standard' ? 
      theme.palette.shades.greenLite : theme.palette.shades.gold,
      backgroundColor: subscription == 'basic' ? 
      theme.palette.shades.blueLite : subscription == 'standard' ? 
      theme.palette.shades.greenLite : theme.palette.shades.gold,
      borderRadius: '15px',
    }}>
      <Typography
        variant='body2'
        color={'white'}
        fontWeight={600}
      >{subscription}</Typography>
    </Card>
  )
};

const rows = [
  createData('India', 'Ismail Chawla', 'mahnoorhashmi@gmail.com', 'basic', 323),
  createData('China', 'Rayyan Sheikh', 'mahnoorhashmi@gmail.com', 'pro', 95),
  createData('Italy', 'Khaleel Ahmad', 'mahnoorhashmi@gmail.com', 'standard', 3),
  createData('United States', 'Mahad Rasool', 'mahnoorhashmi@gmail.com', 'basic', 90),
  createData('Canada', 'Dilawar Bhutta', 'mahnoorhashmi@gmail.com', 'basic', 90),
  createData('Australia', 'Akhtar Sheikh' , 'mahnoorhashmi@gmail.com', 'standard', 74),
  createData('Germany', 'mahnoor' , 'mahnoorhashmi@gmail.com', 'pro', 35),
  createData('Ireland', 'syed shahmeer hashmi', 'mahnoorhashmi@gmail.com', 'pro', 7),
  createData('Mexico', 'iftikhar hashsmi', 'mahnoorhashmi@gmail.com', 'pro', 10),
  createData('Japan', 'human being', 'mahnoorhashmi@gmail.com', 'basic', 33),
  createData('France', 'computer scientist', 'mahnoorhashmi@gmail.com', 'basic', 9),
  createData('United Kingdom', 'syeda mahnoor hashmi', 'mahnoorhashmi@gmail.com', 'pro', 25),
  createData('Russia', 'comsats student', 'mahnoorhashmi@gmail.com', 'basic', 16),
];

const UsersTable = () => {
  const [page, setPage] = React.useState(0);
  const [ user, setUser ] = useState();
  const [openDialogue, setOpenDialogue] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [ editClicked, setEditClicked ] = useState(false);
  const [ openEditDialogue, setOpenEditDialogue ] = useState(false);
  const [ subscriptionClicked, setSubscriptionClicked ] = useState(false);
  const [ cancelDialogue, setCancelDialogue ] = useState(false);

  const Actions = ({user}) => {
    const handleEditClick = () => {
      setEditClicked(true);
      setUser(user);
      setTimeout(() => {
        setEditClicked(false);
      }, 100);
      setOpenEditDialogue(true);
    }
    const handleEditDialogue = () => {
      
    }
    return(
      <Card sx={{
        boxShadow: 'none',
        backgroundColor: 'transparent',
        display: 'flex',
        gap: '30px',
        alignItems: 'center', 
        justifyContent: 'center',
      }}>
        <LiaUserEditSolid 
        onClick={handleEditClick} 
        style={{
          fontSize: '25px',
          color: editClicked ? theme.palette.shades.greenMedium : theme.palette.shades.greenLite,
          cursor: 'pointer',
        }}></LiaUserEditSolid>
        
        <GoCreditCard style={{
          fontSize: '22px',
          color: theme.palette.shades.red,
          cursor: 'pointer',
        }}></GoCreditCard>
      </Card>
    );
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: theme.customStyles.gaps.major }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: 'bold',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.userID}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'subscription' ? (
                            <SubscriptionCard subscription={value} />
                          ) : column.id === 'name' ? (
                            <NameAndEmail name={row.name} email={row.email}></NameAndEmail>
                          ) : column.id === 'actions' ? (
                            <Actions user = {row}></Actions>
                          ) : (
                            <span>
                              {value}
                            </span>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <EditUserDialog user={user} open={openDialogue} handleClose={() => setOpenDialogue(false)}></EditUserDialog>
    </Paper>
  );
}

export default UsersTable;
