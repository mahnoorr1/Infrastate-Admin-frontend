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
} from '@mui/material';
import theme from '../../../configs/theme';
import { FiEdit3 } from 'react-icons/fi';
import { MdDeleteSweep } from 'react-icons/md';
import ZoneFilterComponent from './zoneFilterComponent';

const columns = [
  { id: 'ruleID', label: 'Rule ID', minWidth: 80 },
  {
    id: 'zone',
    label: 'Zone',
    minWidth: 120,
  },
  {
    id: 'plotSize',
    label: 'Plot Size',
    minWidth: 120,
    align: 'left',
  },
  {
    id: 'roadDistance',
    label: 'Distance from Road',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 120,
    align: 'center',
  },
];

function createData(ruleID, zone, plotSize, roadDistance) {
  return { ruleID, zone, plotSize, roadDistance };
}

const initialRows = [
  //        id, zone, plot size, distance from road,
  createData('R00001', 'zone1', '24x60', '10'),
  createData('R00002', 'zone2', '24x60', '10'),
  createData('R00003', 'zone2', '24x60', '10'),
  createData('R00004', 'zone1', '24x60', '10'),
  createData('R00005', 'zone1', '24x60', '10'),
  createData('R00006', 'zone3', '24x60', '10'),
  createData('R00007', 'zone3', '24x60', '10'),
  createData('R00008', 'zone4', '24x60', '10'),
  createData('R00009', 'zone4', '24x60', '10'),
];

const RulesTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedZone, setSelectedZone] = useState('All');

  const handleFilterChange = (zone) => {
    setSelectedZone(zone);
  };

  const Actions = () => {
    return (
      <div style={{
        gap: '20px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <FiEdit3 style={{
          color: theme.palette.shades.greenLite,
          fontSize: '20px',
          cursor: 'pointer',
        }}></FiEdit3>
        <MdDeleteSweep style={{
          color: theme.palette.shades.red,
          fontSize: '20px',
          cursor: 'pointer',
        }}></MdDeleteSweep>
      </div>
    )
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const filteredRows = selectedZone === 'All' ? initialRows : initialRows.filter(row => row[zone] === selectedZone);

  return (
    <Card>
      <ZoneFilterComponent data={initialRows} onFilterChange={handleFilterChange}></ZoneFilterComponent>
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
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.ruleID}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {
                              column.id === 'actions' ? (
                                <Actions></Actions>
                              ) : (
                                <span>
                                  {value}
                                </span>
                              )
                            }
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
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Card>
  );
}

export default RulesTable;
