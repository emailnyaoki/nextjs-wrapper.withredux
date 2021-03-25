import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import Paper from "@material-ui/core/Paper";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import {Redirect} from 'react-router-dom';
import Link from 'next/link'
import Slide from '@material-ui/core/Slide';
import Router from 'next/router'


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
  avatar: {
    backgroundColor: red[500],
  },
  link:{
    fontSize:'12px',
    fontWeight:'700'
  }
}));

export default function UserAvatar(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const gotouserpage =() =>{
    Router.push(`/user/${props.login}`)
  }

  return (
    <Slide direction={props.direction || 'up'} in={true} mountOnEnter unmountOnExit>
    <Paper className={classes.root} elevation={1}>
    <Card className={classes.root}>
      <CardHeader
       className={classes.cardheader}
        avatar={
          <Avatar alt={props.login} src={props.avatar_url||''} />
        }
        action={
          <IconButton aria-label="settings" onClick={gotouserpage}  > 
            <ArrowForwardIosIcon ></ArrowForwardIosIcon>                  
          </IconButton>
        }
        title={props.login}
        subheader={ props.followers+' followers, '+props.following+' following'}
      />      
    </Card>
    </Paper>
    </Slide>
  );
}
