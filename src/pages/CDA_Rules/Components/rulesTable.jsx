import React, { useState, useEffect } from 'react';
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
import { getAllRules } from '../../../api/Rules';
import ZoneFilterComponent from './zoneFilterComponent';
import EditRuleDialog from './editRuleDialog';

const columns = [
  { id: 'Construction_Type', label: 'Construction Type', minWidth: 80 },
  {
    id: 'max_storeys',
    label: 'Max Storeys',
    minWidth: 120,
  },
  {
    id: 'plotSize',
    label: 'Plot Size (sft)',
    minWidth: 120,
    align: 'left',
  },
  {
    id: 'Maximum_Ground_Coverage',
    label: 'Ground Coverage',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'Maximum_FAR',
    label: 'MAx FAR',
    minWidth: 50,
    align: 'left',
  },
  {
    id: 'Front_Setback_Min',
    label: 'Min Front Setback',
    minWidth: 30,
    align: 'left',
  },
  {
    id: 'Setbacks',
    label: 'Setbacks',
    minWidth: 30,
    align: 'left',
  },
  {
    id: 'Basement',
    label: 'Basement',
    minWidth: 30,
    align: 'left',
  },
  {
    id: 'Other',
    label: 'Other Rules',
    minWidth: 50,
    align: 'left',
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 30,
    align: 'center',
  },
];

const RulesTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedZone, setSelectedZone] = useState('All');
  const [rules, setRules] = useState([]);
  const [selectedRule, setSelectedRule] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialog, setDelDialogOpen] = useState(false);

  useEffect(() => {
    async function fetchRules() {
      try {
        const data = await getAllRules();
        if (data) {
          setRules(data);
        }
      } catch (error) {
        console.error('Error fetching rules:', error);
      }
    }

    fetchRules();
  }, []);

  const initialRows = 
    rules.map((rule)=>({
      // createData(rule.ConstructionType, rule.Plot_Measurement_Min, rule.Plot_Measurement_Max, rule.Maximun_Ground_Coverage, rule.Maximum_No_of_storeys, rule.Maximum_FAR, rule.Setbacks, rule.Basement, rule.Front_Setback_Min, rule.other);
      Construction_Type: rule.Contstruction_Type,
      max_storeys: rule.Maximum_No_of_storeys,
      plotSize: `${rule.Plot_Measurment_Min} - ${rule.Plot_Measurment_Max}`,
      Maximum_Ground_Coverage: rule.Maximum_Ground_coverage,
      Maximum_FAR: rule.Maximum_FAR,
      Setbacks: rule.Setbacks == "" ? 'None' : rule.Setbacks,
      Basement: rule.Basement == "" ? 'None': rule.Basement ,
      Front_Setback_Min: rule.Front_Setback_Min == "" ? 'None': rule.Front_Setback_Min,
      Other: rule.Other == "" ? 'None' : rule.Other,
    }));

  const handleFilterChange = (zone) => {
    setSelectedZone(zone);
  };

  const Actions = ({ruleID}) => {
    const handleEdit = (ruleID) => {
      const selectedRule = rules.find((r) => r._id === ruleID);
      setSelectedRule(selectedRule);
      setEditDialogOpen(true);
    }
    const handleDelete = () => {
      setDelDialogOpen(true);
    }
    return (
      <div style={{
        gap: '20px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <FiEdit3
          onClick={() => handleEdit(ruleID)}
          style={{
            color: theme.palette.shades.greenLite,
            fontSize: '20px',
            cursor: 'pointer',
          }}
        ></FiEdit3>
        <MdDeleteSweep
        onClick={handleDelete}
         style={{
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
      {/* <ZoneFilterComponent data={initialRows} onFilterChange={handleFilterChange}></ZoneFilterComponent> */}
      
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: theme.customStyles.gaps.major }}>
        <TableContainer sx={{ maxHeight: '80vh' }}>
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
              {initialRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {
                              column.id === 'actions' ? (
                                <Actions rule = {row._id}></Actions>
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
      <EditRuleDialog rule={selectedRule} open={editDialogOpen} handleClose={()=>setDelDialogOpen(false)}></EditRuleDialog>
    </Card>
  );
}

export default RulesTable;
