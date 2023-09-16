import * as React from 'react';
import { 
  Button, 
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

const Actions = () => {
  return(
    <Card sx={{
      boxShadow: 'none',
      backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      alignItems: 'center', 
    }}>
      <Button
        variant="outlined" 
        onClick={()=>{}}
        sx={{
            height: '25px',
            width: '180px',
            padding: '2px',
            borderRadius: '15px',
            borderWidth: '2px',
            borderColor: theme.palette.shades.greenMedium,
            color: theme.palette.shades.greenMedium,
        }}
        >edit</Button>
        <Button
        variant="outlined" 
        onClick={()=>{}}
        sx={{
            height: '25px',
            width: '180px',
            padding: '2px',
            borderRadius: '15px',
            borderWidth: '2px',
            borderColor: theme.palette.shades.greenMedium,
            color: theme.palette.shades.greenMedium,
        }}
        >cancel subscription</Button>
    </Card>
  );
}

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
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                            <Actions></Actions>
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
    </Paper>
  );
}

export default UsersTable;
