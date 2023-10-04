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
    align: 'left',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 120,
    align: 'center',
  }
];

function createData(userID, name, email, subscription, status, projects) {
  return { userID, name, email, subscription, status, projects };
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

const StatusCard = ({status}) => {
    return(
      <Card sx={{
        height: '30px',
        width: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid',
        borderColor: status ? theme.palette.shades.greyText : theme.palette.shades.greenLite,
        borderRadius: '15px',
      }}>
        {
          status ? 
            <Typography
            variant='body2'
            color={theme.palette.shades.greyText}
            fontWeight={600}
            >Restricted</Typography> : 
            <Typography
            variant='body2'
            color={theme.palette.shades.greenLite}
            fontWeight={600}
            >Active</Typography>
        }
        
      </Card>
    )
}

const rows = [
  // id, name, email, subscription plan, status, projects, restriction date
  createData('India', 'Ismail Chawla', 'mahnoorhashmi@gmail.com', 'basic', true, 323, '2023-10-17'),
  createData('China', 'Rayyan Sheikh', 'mahnoorhashmi@gmail.com', 'pro', false, 95, null),
  createData('Italy', 'Khaleel Ahmad', 'mahnoorhashmi@gmail.com', 'standard', false, 3, null),
  createData('United States', 'Mahad Rasool', 'mahnoorhashmi@gmail.com', 'basic', false, 90, null),
  createData('Canada', 'Dilawar Bhutta', 'mahnoorhashmi@gmail.com', 'basic', true, 90, '2023-10-17'),
  createData('Australia', 'Akhtar Sheikh' , 'mahnoorhashmi@gmail.com', 'standard', false, 74, null),
  createData('Germany', 'mahnoor' , 'mahnoorhashmi@gmail.com', 'pro', true, 35, '2023-10-17'),
  createData('Ireland', 'syed shahmeer hashmi', 'mahnoorhashmi@gmail.com', 'pro', false, 7, null),
  createData('Mexico', 'iftikhar hashsmi', 'mahnoorhashmi@gmail.com', 'pro', false, 10, null),
  createData('Japan', 'human being', 'mahnoorhashmi@gmail.com', 'basic', true, 33, '2023-10-17'),
  createData('France', 'computer scientist', 'mahnoorhashmi@gmail.com', 'basic', false, 9, null),
  createData('United Kingdom', 'syeda mahnoor hashmi', 'mahnoorhashmi@gmail.com', 'pro', false, 25, null),
  createData('Russia', 'comsats student', 'mahnoorhashmi@gmail.com', 'basic', false, 16, null),
];

const UsersTable = () => {
  const [page, setPage] = React.useState(0);
  const [user, setUser] = useState('');
  const [openDialogue, setOpenDialogue] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleEditClick = (index) => {
      setUser(rows[index]);
      setOpenDialogue(true);
  };
  const Actions = ({ index }) => {
    return (
      <Card
        sx={{
          boxShadow: 'none',
          backgroundColor: 'transparent',
          display: 'flex',
          gap: '30px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LiaUserEditSolid
          onClick={() => handleEditClick(index)} 
          style={{
            fontSize: '25px',
            color: theme.palette.shades.greenLite,
            cursor: 'pointer',
          }}
        ></LiaUserEditSolid>

        <GoCreditCard
          style={{
            fontSize: '22px',
            color: theme.palette.shades.red,
            cursor: 'pointer',
          }}
        ></GoCreditCard>
      </Card>
    );
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{ width: '100%', overflow: 'hidden', marginTop: theme.customStyles.gaps.major }}
    >
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
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
                          <Actions index={index}></Actions> 
                        ) : column.id === 'status' ? (
                            <StatusCard status = {value}></StatusCard>
                        )
                        : (
                          <span>{value}</span>
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
