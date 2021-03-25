import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Paper from "@material-ui/core/Paper";
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,    
    background: 'linear-gradient(45deg, #ecf1f5  5%, #a6bed4 90%)',
    marginTop:"5px",
       
  },
  loginname :{
    fontSize: '20px',
    fontWeight: 600
  },
  val :{
    
    fontWeight: 600
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
  
  link:{
    fontSize:'12px',
    fontWeight:'700'
  },
  json:{
    padding:'20px 20px'
  },
  pre: { display: 'block', padding: '10px 30px', margin: '0', overflow: 'scroll' }
}));

export default function UserDetail(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Fade in={true} timeout={2000}>
    <Paper className={classes.root} elevation={1}>
    <Card className={classes.root}>
      <CardHeader
       className={classes.cardheader}
        avatar={
          <Avatar alt={props.data.login} src={props.data.avatar_url||''} className={classes.large} />
        }       
        title={<span className={classes.loginname}>{props.data.login}</span>}
        subheader={ props.data.followers+' followers, '+props.data.following+' following'}
      /> 
     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">  
            name. <span className={classes.val}>{props.data.name}</span> 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">   
            company. <span className={classes.val}>{props.data.company}</span>        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">   
            blog. <span className={classes.val}>{props.data.blog}</span>        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">   
            location. <span className={classes.val}>{props.data.location}</span>        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">   
            bio. <span className={classes.val}>{props.data.bio}</span>        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">   
            public repos. <span className={classes.val}>{props.data.public_repos}</span>        
        </Typography>
        
      </CardContent>    
      <CardActions disableSpacing>
        in JSON ...
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className={classes.json}>

            <pre className={classes.pre}>
              {JSON.stringify(props.data, null, 2)} 
            </pre>
            
        </div>
      </Collapse> 
    </Card>

    </Paper>
    </Fade>
  );
}
