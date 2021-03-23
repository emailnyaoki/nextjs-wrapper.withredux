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
    
    background: 'linear-gradient(45deg, #ecf1f5  5%, #a6bed4 90%)',
    marginTop:"5px"
   
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
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

export default function UserDetail(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const gotouserpage =() =>{
    
    return  <Redirect  to= {"/user" } />
  }

  return (
    <Paper className={classes.root} elevation={1}>
    <Card className={classes.root}>
      <CardHeader
       className={classes.cardheader}
        avatar={
          <Avatar alt={props.data.login} src={props.data.avatar_url||''} className={classes.large} />
        }       
        title={props.data.login}
        subheader={ props.data.followers+' followers, '+props.data.following+' following'}
      /> 
     {/* 
     "name": "Michał Ka",
  "company": null,
  "blog": "http://www.md6.org/",
  "location": "Poland",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 55,
  "public_gists": 210,
  "followers": 33,
  "following": 34,
      */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">  
            name: {props.data.name}        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">   
            company: {props.data.company}        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">   
            blog: {props.data.blog}        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">   
            location: {props.data.location}        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">   
            bio: {props.data.bio}        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">   
            public repos:{props.data.public_repos}        
        </Typography>
      </CardContent>     
    </Card>

    </Paper>
  );
}
