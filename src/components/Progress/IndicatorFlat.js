import React  from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      maxWidth: 50,
      minWidth: 50,
      height:'40px'    
    },
    
  
  }));

function LoadingIndicatorFlat (props ){

    const classes = useStyles()
  
    return (
        
        <div className={classes.root}>
            { props.loading && 
            <CircularProgress size={20}></CircularProgress>
            }
        </div> 
      
    )
  };


  export default LoadingIndicatorFlat;