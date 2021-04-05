import React, {useEffect, useState}  from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';



const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      maxWidth: 50,
      minWidth: 50,
      height:'40px'    
    },
    
  
  }));

function IndicatorSSR() {
    
    const classes = useStyles()

    const [loading, setLoading] = useState(false);


    React.useEffect(() => {
        const start = () => {
          //console.log("start");        

          setLoading(true);
        };
        const end = () => {
          //console.log("finished");
          setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
          Router.events.off("routeChangeStart", start);
          Router.events.off("routeChangeComplete", end);
          Router.events.off("routeChangeError", end);
        };
      }, []);
    
    return loading && (<div className={classes.root}>
        
        <CircularProgress size={20}></CircularProgress>
        
    </div> );
}


export default IndicatorSSR;