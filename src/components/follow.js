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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from "@material-ui/core/Paper";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import {Redirect} from 'react-router-dom';
import Link from 'next/link'

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

export default function Follow(props) {
  const classes = useStyles();
  
  return (
    <Paper className={classes.root} elevation={1}>
    <Card className={classes.root}>
      <CardHeader
       className={classes.cardheader}
        avatar={
          <Avatar alt={props.login} src={props.avatar_url||''} />
        }
        action={
          <IconButton aria-label="settings" onClick={(event) => event.stopPropagation()}  > 
            <ArrowForwardIosIcon ></ArrowForwardIosIcon>                  
            <Link href={"/user/[login]"} as={`/user/${props.login}`} ><p className={classes.link}>go</p></Link>
          </IconButton>
        }
        title={props.login}
      />      
    </Card>
    </Paper>
  );
}
