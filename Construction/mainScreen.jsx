import React, { useContext, useEffect, useState } from 'react';
import { Typography, 
    Card,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow, } from "@mui/material";
    
import { FiEdit3 } from 'react-icons/fi';
import AppButton from "../../components/Buttons/button";
import {MainContainer} from "../../components/Contents/Contents.elements";
import { MapMarkerContext } from "../../context/mapMarkerContext";
import AerialMap from "../../components/Maps/aerialViewMap";
import theme from '../../configs/theme';
import Selection from '../../components/CustomComponents/selectComponent';
import { constructionTypes } from '../../configs/defaultData';
import InputField from '../../components/CustomComponents/inputField';
import AlertDialog from '../../components/CustomComponents/alertDialogue';
import { getReportOfConstruction } from '../../api/construction';

const ConstructionMainScreen = (props) => {
    const {location, locationName, updateLocation, address} = useContext(MapMarkerContext);
    const [selectedConstructionType, setSelectedConstructionType] = useState('');
    const [ plotSize, setPlotSize ] = useState(0);
    const [openDialogue, setOpenDialogue] = useState(false);
    const [ constructionRules, setConstructionRules ] = useState([]);
    const [ openConstructionDialog, setOpenConsDialog] = useState(false);
    
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
    const [selectedZone, setSelectedZone] = useState('All');
    console.log("RULES" + constructionRules);
    const initialRows = 
    (constructionRules).map((rule) => ({
        Construction_Type: rule.Contstruction_Type,
        max_storeys: rule.Maximum_No_of_storeys,
        plotSize: `${rule.Plot_Measurment_Min} - ${rule.Plot_Measurment_Max}`,
        Maximum_Ground_Coverage: rule.Maximum_Ground_coverage,
        Maximum_FAR: rule.Maximum_FAR,
        Setbacks: rule.Setbacks === "" ? 'None' : rule.Setbacks,
        Basement: rule.Basement === "" ? 'None' : rule.Basement,
        Front_Setback_Min: rule.Front_Setback_Min === "" ? 'None' : rule.Front_Setback_Min,
        Other: rule.Other === "" ? 'None' : rule.Other,
      }));
  
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
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} >
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
          
        </Paper>
      </Card>
    );
  }

    const handlePlotSize = (event) => {
        setPlotSize(event.target.value);
    }

    const handleApply = async (event) => {
        console.log(location.lat, location.lng);
        if(address.address.municipality == 'Zone I' || address.address.municipality == 'Zone III' || (address.address.state != 'Islamabad' && address.address.state != 'Islamabad Capital Territory')){
            setOpenDialogue(true);
        }
        else{
            const response = await getReportOfConstruction(location.lng, location.lat, selectedConstructionType, plotSize) || [];
            setConstructionRules(response);
            console.log(response);
            setOpenConsDialog(true);
            
        }

    }

    useEffect(() => {
        handleApply()
    }, []);
    return (
        <MainContainer active={props.toggle}>
            <Typography 
            variant="h6"
            fontWeight={600}
            margin={0}>
                Construction Regulations
            </Typography>
            <hr/>
            <AerialMap height={'60vh'} width={'80vw'}></AerialMap>
            <div style={{
                marginLeft: '20px',
                marginTop: '10px',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '0.2fr 0.8fr',
                    gap: '30px',
                }}>
                    <Typography 
                    variant="body1"
                    color={theme.palette.shades.greyText}
                    >Selected Location: </Typography>
                    <Typography 
                    variant="body1"
                    fontWeight={600}
                    color={theme.palette.shades.greenLite}
                    >{locationName} </Typography>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '0.2fr 0.8fr',
                    gap: '30px',
                    paddingTop: '10px',
                    alignItems: 'center',
                }}>
                    <Typography 
                    variant="body1"
                    color={theme.palette.shades.greyText}
                    >Select Construction Type: </Typography>
                    <Selection 
                    label={'Select Construction Type'} 
                    data={constructionTypes}
                    updateZone={setSelectedConstructionType}></Selection>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '0.2fr 0.8fr',
                    gap: '30px',
                    paddingTop: '10px',
                    alignItems: 'center',
                }}>
                    <Typography 
                    variant="body1"
                    color={theme.palette.shades.greyText}
                    >Select Plot Measurement:</Typography>
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <InputField
                        initialValue={plotSize}
                        inputType={'numeric'}
                        updateValue={handlePlotSize}
                        ></InputField>
                        <Typography variant='body2' color={theme.palette.shades.greyText}>/ sq feet</Typography>
                    </div>
                </div>

            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '2.5vw',
                marginTop: '10px',
            }}>
                <AppButton 
                variant={'outlined'} 
                text={'Apply Filter'}
                onClick={handleApply}></AppButton>
            </div>
            {/* <RulesTable rules={constructionRules}></RulesTable> */}
            <AlertDialog 
            label = {'Alert'}
            content={'Construction Not Allowed in Choosen Area'}
            open={openDialogue}
            handleClose={()=>setOpenDialogue(false)}
            ></AlertDialog>
            <AlertDialog 
            label = {'Data'}
            content={'Construction Type: ' + constructionRules.Contstruction_Type + '   Ground Coverage: ' + constructionRules.Maximum_Ground_coverage
          }
            open={openConstructionDialog}
            handleClose={()=>setOpenConsDialog(false)}
            ></AlertDialog>
        </MainContainer>
    )
}



export default ConstructionMainScreen;