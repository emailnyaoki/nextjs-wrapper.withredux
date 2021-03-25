import React  from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingIndicator (props ){
  
    return (
      
        <Dialog open={true}>
          <DialogContent>
            <CircularProgress></CircularProgress>
          </DialogContent>
        </Dialog>
      
    )
  };


  export default LoadingIndicator;