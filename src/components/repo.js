import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Paper from "@material-ui/core/Paper";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 200,
      maxWidth: 400,
      background: 'linear-gradient(45deg, #ecf1f5  5%, #a6bed4 90%)',
      marginTop:"5px"
     
    },
    cardheader:{
      padding:'2px  10px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    link:{
      fontSize:'12px',
      fontWeight:'700'
    }
  }));

export default function Repo(props) {
  const classes = useStyles();

  const gotorepo =() =>{
    window.open(`${props.html_url}`)
  }

  return (
    <Slide direction={props.direction || 'up'} in={true} mountOnEnter unmountOnExit>
    <Paper className={classes.root} elevation={1}>
    <Card className={classes.root}>
      <CardHeader
       className={classes.cardheader}
       avatar={
        <></>
      }
        action={
          <IconButton aria-label="settings" onClick={gotorepo}  > 
            <ArrowForwardIosIcon ></ArrowForwardIosIcon> 
          </IconButton>
        }
        title={props.name}
        subheader={ props.description}
      />      
    </Card>
    </Paper>
    </Slide>
  );
}
