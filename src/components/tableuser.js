import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from 'components/CustomIconButton/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


import { searchusergithubThunk } from '../../src/redux/slices/usergithub'


import {useSelector, useDispatch} from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Button from "components/CustomButtons/Button.js";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});






  //const { pendataan} = useSelector(state => state.stdb);
  //  const data = pendataan.data;
  



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

let headCells = [
  { id: 'nama', numeric: true, disablePadding: false, label: 'NAMA' },
  { id: 'nik', numeric: true, disablePadding: false, label: 'NIK' },
  { id: 'id_pekebun', numeric: true, disablePadding: false, label: 'ID PEKEBUN' },
  { id: 'jml_kebun', numeric: true, disablePadding: false, label: 'JML KEBUN' },
  { id: 'kecamatan', numeric: true, disablePadding: false, label: 'KECAMATAN' },
  { id: 'desa', numeric: true, disablePadding: false, label: 'DESA' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const tahap = useSelector(state => state.stdb.tahap)
  

  const modheadcells = ()=>{
    if (tahap!=="TERBIT" && tahap!=="BERAKHIR" && tahap!=="DITOLAK")
    if (tahap==="PENDATAAN")
    return [
      { id: 'nama', numeric: true, disablePadding: false, label: 'NAMA' },
      { id: 'nik', numeric: true, disablePadding: false, label: 'NIK' },
      { id: 'id_pekebun', numeric: true, disablePadding: false, label: 'ID PEKEBUN' },
      { id: 'jml_kebun', numeric: true, disablePadding: false, label: 'JML KEBUN' },
      { id: 'kecamatan', numeric: true, disablePadding: false, label: 'KECAMATAN' },
      { id: 'desa', numeric: true, disablePadding: false, label: 'DESA' },
      { id: 'pendata', numeric: true, disablePadding: false, label: 'PENDATA' },
    ];

    else

    return [
      { id: 'nama', numeric: true, disablePadding: false, label: 'NAMA' },
      { id: 'nik', numeric: true, disablePadding: false, label: 'NIK' },
      { id: 'id_pekebun', numeric: true, disablePadding: false, label: 'ID PEKEBUN' },
      { id: 'jml_kebun', numeric: true, disablePadding: false, label: 'JML KEBUN' },
      { id: 'kecamatan', numeric: true, disablePadding: false, label: 'KECAMATAN' },
      { id: 'desa', numeric: true, disablePadding: false, label: 'DESA' }
    ];

    if ( (tahap==="TERBIT"))

    return [
      { id: 'nama', numeric: true, disablePadding: false, label: 'NAMA' },
      { id: 'no_stdb', numeric: true, disablePadding: false, label: 'NO STDB' },
      { id: 'tanggal_terbit', numeric: true, disablePadding: false, label: 'TERBIT' },      
      { id: 'nik', numeric: true, disablePadding: false, label: 'NIK' },
      { id: 'id_pekebun', numeric: true, disablePadding: false, label: 'ID PEKEBUN' },
      { id: 'jml_kebun', numeric: true, disablePadding: false, label: 'JML KEBUN' },
      { id: 'kecamatan', numeric: true, disablePadding: false, label: 'KECAMATAN' },
      { id: 'desa', numeric: true, disablePadding: false, label: 'DESA' },
    ];

    if ( (tahap==="DITOLAK"))

    return [
      { id: 'nama', numeric: true, disablePadding: false, label: 'NAMA' }, 
      { id: 'tanggal_ditolak', numeric: true, disablePadding: false, label: 'TANGGAL' }, 
      { id: 'alasan_ditolak', numeric: true, disablePadding: false, label: 'ALASAN' }, 
      { id: 'nik', numeric: true, disablePadding: false, label: 'NIK' },
      { id: 'id_pekebun', numeric: true, disablePadding: false, label: 'ID PEKEBUN' },
      { id: 'jml_kebun', numeric: true, disablePadding: false, label: 'JML KEBUN' },
      { id: 'kecamatan', numeric: true, disablePadding: false, label: 'KECAMATAN' },
      { id: 'desa', numeric: true, disablePadding: false, label: 'DESA' },
    ];

    if ( (tahap==="BERAKHIR"))

    return [
      { id: 'nama', numeric: true, disablePadding: false, label: 'NAMA' },
      { id: 'no_stdb', numeric: true, disablePadding: false, label: 'NO STDB' },
      { id: 'tanggal_terbit', numeric: true, disablePadding: false, label: 'TERBIT' },      
      { id: 'tanggal_berakhir', numeric: true, disablePadding: false, label: 'BERAKHIR' }, 
      { id: 'alasan_berakhir', numeric: true, disablePadding: false, label: 'ALASAN' }, 
      { id: 'nik', numeric: true, disablePadding: false, label: 'NIK' },
      { id: 'id_pekebun', numeric: true, disablePadding: false, label: 'ID PEKEBUN' },
      { id: 'jml_kebun', numeric: true, disablePadding: false, label: 'JML KEBUN' },
      { id: 'kecamatan', numeric: true, disablePadding: false, label: 'KECAMATAN' },
      { id: 'desa', numeric: true, disablePadding: false, label: 'DESA' },
    ];

    return headCells;
    
  }

  return (
    <TableHead className={classes.head}>
      <TableRow>
        
        <TableCell padding="checkbox">
          { 1===2 && (
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'pilih semua' }}
          />
          )}
        </TableCell>
        
        {modheadcells().map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  }
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  tablerow :{
    textTransform:'uppercase',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  head: {
    borderBottom:"2px solid lightgray",
    borderTop:"2px solid lightgray"
  },
  body: {
    backgroundColor:"#e9ecef",
    '& td':{
      fontSize: '12px',
      fontWeight: '500'
    }
  },
}));

export default function TableUser(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nama');
  const [selected, setSelected] = React.useState([]);
  const {user}= useSelector(state => state.user);
  
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [countrows, setCountrows] = React.useState(0);
  const [rows, setRows] = React.useState([]);

  const dispatch = useDispatch();
  const tahap = useSelector(state => state.stdb.tahap)
  //const countrows = useSelector(state => state.stdb.countrows)

  const pendataan = useSelector(state => state.stdb.pendataan)

  const {colorCard}= useSelector(state => state.UI);



  const [page, setPage] = React.useState(0);

  const [openToDelete, setOpenToDelete] = useState(false);
  const [isSubmitSimpan, setSubmitSimpan] = useState(false);
  const [idPekebun, setIdPekebun] = useState();
  const [namapekebun, setNamaPekebun] = useState();
  const [nikpekebun, setNIKPekebun] = useState();


  const handleClose = () => {
    setOpenToDelete(false);
  };

  const handleOK = (e) => {
    
    e.preventDefault();
    setSubmitSimpan(true);

    if (tahap==="PENDATAAN")  getListPendataanThunkDispatch(0);

        setSubmitSimpan(false);
    setOpenToDelete(false); 
  };


  useEffect(() => {
/*

    
    if (tahap==="PENDATAAN")  getListPendataanThunkDispatch(page);
    if (tahap==="SUBMIT") getListSubmitThunkDispatch(page);
    if (tahap==="DITOLAK") getListDitolakThunkDispatch(page);
    if (tahap=== "REKOMENDASI")getListRekomendasiThunkDispatch(page);
    if (tahap=== "TERBIT") getListTerbitThunkDispatch(page);
    if (tahap=== "BERAKHIR" ) getListBerakhirThunkDispatch(page);*/


    if (tahap==="PENDATAAN") 
    { 
      setRows( pendataan.data);
      setCountrows( pendataan.countrows);
      setPage(pendataan.page-1);


    }

    if ( tahap==="SUBMIT") {
      setRows(  submit.data);
      setCountrows( submit.countrows);
      setPage(submit.page-1);
    }

    if (tahap==="DITOLAK"){
      setRows(  ditolak.data);
      setCountrows( ditolak.countrows);
      setPage(ditolak.page-1);
    } 

    if (tahap==="REKOMENDASI") {
      setRows(  rekomendasi.data);
      setCountrows( rekomendasi.countrows);
      setPage(rekomendasi.page-1);
    }

    if (tahap==="TERBIT") {
      setRows(  terbit.data);
      setCountrows( terbit.countrows);
      setPage(terbit.page-1);
    }

    if (tahap==="BERAKHIR") {
      setRows(  berakhir.data);
      setCountrows( berakhir.countrows);
      setPage(berakhir.page-1);
    }

    //console.log("walah",page)


  }, [page,tahap])


  

  const getListPendataanThunkDispatch = (thepage) =>{
    try {

      //console.log("PAGE", page);
      const resultAction = dispatch(getListPendataanThunk({pagenum:++thepage,pagesize:5, searchword:props.search}));
      const unwrapresult = unwrapResult(resultAction);
     // console.log(unwrapresult.data);
   
      
      return unwrapresult.data;

    } catch (err) {

      return err;
    }
  }

  

  


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.rows.map((n) => n.nama);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id_pekebun) => {
    props.viewdetail(id_pekebun)
  };

  const toDeleteDialog = (event, row) => {
    setOpenToDelete(true);
    setIdPekebun(row.id_pekebun);
    setNamaPekebun(row.nama);
    setNIKPekebun(row.nik);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);

    getListPendataanThunkDispatch(newPage);
    
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, countrows - page * rowsPerPage);


  const ddmmyyyy = (tgl ) => ((((new Date(tgl)).getDate() > 9) ? (new Date(tgl)).getDate() : ('0' + (new Date(tgl)).getDate())) 
  + '/' +(((new Date(tgl)).getMonth() > 8) ? ((new Date(tgl)).getMonth() + 1) : ('0' + ((new Date(tgl)).getMonth() + 1))) 
  + '/' +  (new Date(tgl)).getFullYear());

  


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
                
          <>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={countrows}
            />
            <TableBody className={classes.body}>
              {stableSort(rows, getComparator(order, orderBy))
                //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.nama);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow className={classes.tablerow}
                      hover
                      
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        { 1===2 && (
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />)}
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                      
                        <Link href="#" onClick={(event) => handleClick(event, row.id_pekebun)} style={{color:"#58c39a", fontWeight:'600', borderBottom:'1px solid'}} >LIHAT</Link>
                      
                        </div>
                      </TableCell>
                      

                      {  tahap!=="TERBIT" && tahap!=="BERAKHIR" && (tahap!=="DITOLAK")  &&(
                      <>
                     
                        <TableCell component="th" id={labelId} scope="row" padding="none" align="right">
                          {row.nama} 
                        </TableCell>
                        <TableCell align="right">{row.nik}</TableCell>                      
                        <TableCell align="right">{row.id_pekebun}</TableCell>
                        <TableCell align="right">{row.jml_kebun}</TableCell>
                        <TableCell align="right">{row.kecamatan}</TableCell>
                        <TableCell align="right">{row.desa}</TableCell>
                        {  tahap==="PENDATAAN"  &&( 
                          <TableCell align="right">{row.pendata}</TableCell>
                        )}
                      </>
                      )}

                      {  (tahap==="TERBIT") && (
                      <>
                      
                        <TableCell component="th" id={labelId} scope="row" padding="none" align="right">
                        {row.nama} 
                        </TableCell>
                        <TableCell align="right"> {row.stdb_no}</TableCell>                      
                        <TableCell align="right">{ddmmyyyy(row.stdb_tgl)}</TableCell>
                        <TableCell align="right">{row.nik}</TableCell>                      
                        <TableCell align="right">{row.id_pekebun}</TableCell>
                        <TableCell align="right">{row.jml_kebun}</TableCell>
                        <TableCell align="right">{row.kecamatan}</TableCell>
                        <TableCell align="right">{row.desa}</TableCell>
                      </>
                      )}

                      {  (tahap==="DITOLAK") && (
                      <>
                      
                        <TableCell component="th" id={labelId} scope="row" padding="none" align="right">
                        {row.nama} 
                        </TableCell>
                        <TableCell align="right">{ddmmyyyy(row.stdb_tgl_ditolak)}</TableCell>
                        <TableCell align="right">{(row.stdb_alasan_ditolak)}</TableCell>
                        <TableCell align="right">{row.nik}</TableCell>                      
                        <TableCell align="right">{row.id_pekebun}</TableCell>
                        <TableCell align="right">{row.jml_kebun}</TableCell>
                        <TableCell align="right">{row.kecamatan}</TableCell>
                        <TableCell align="right">{row.desa}</TableCell>
                      </>
                      )}

                      {  (tahap==="BERAKHIR") && (
                      <>
                      
                        <TableCell component="th" id={labelId} scope="row" padding="none" align="right">
                        {row.nama} 
                        </TableCell>
                        <TableCell align="right"> {row.stdb_no}</TableCell>                      
                        <TableCell align="right">{ddmmyyyy(row.stdb_tgl)}</TableCell>
                        <TableCell align="right">{(row.stdb_tgl_berakhir)}</TableCell>
                        <TableCell align="right">{(row.stdb_alasan_berakhir)}</TableCell>
                        <TableCell align="right">{row.nik}</TableCell>                      
                        <TableCell align="right">{row.id_pekebun}</TableCell>
                        <TableCell align="right">{row.jml_kebun}</TableCell>
                        <TableCell align="right">{row.kecamatan}</TableCell>
                        <TableCell align="right">{row.desa}</TableCell>
                      </>
                      )}

                     

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  {  tahap!=="TERBIT" && tahap!=="BERAKHIR" && (tahap!=="DITOLAK") &&  tahap ==="PENDATAAN" &&( 
                    <TableCell colSpan={8} />                
                  )}
                  {  tahap!=="TERBIT" && tahap!=="BERAKHIR" && (tahap!=="DITOLAK") &&  tahap !=="PENDATAAN" &&( 
                    <TableCell colSpan={7} />                  
                  )}
                  {  (tahap==="TERBIT") && (<TableCell colSpan={9} /> )}
                  {  (tahap==="DITOLAK") && (<TableCell colSpan={9} /> )}
                  {  (tahap==="BERAKHIR") && (<TableCell colSpan={11} /> )}

                  
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={countrows}
          rowsPerPage={rowsPerPage}
          page={page}          
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </>
      
        
      </Paper>
      {1===2 && (
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      )}

      
    </div>
  );
}
