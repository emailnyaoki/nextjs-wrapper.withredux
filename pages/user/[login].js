import React from "react";
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import LoadingIndicator from './../../src/components/Progress/Indicator';
import GridItem from "./../../src/components/Grid/GridItem";
import GridContainer from "./../../src/components/Grid/GridContainer";
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Router from 'next/router'
import Head from 'next/head';

import {wrapper} from './../../src/redux/storessr';



// dinamically imported component
// dynamic imports as another way to split your code into manageable chunks.
/**** ---------------------------------------------------------------------*/

import dynamic from 'next/dynamic'

const UserDetail = dynamic(() =>
  import('./../../src/components/userdetail')
) 

const Follow = dynamic(() =>
  import('./../../src/components/follow')
)

const Repo = dynamic(() =>
  import('./../../src/components/repo')
)
/**** ---------------------------------------------------------------------*/


import {useDispatch, useSelector} from 'react-redux'
import {getuseronegithubThunk, getreposThunk, getfollowingThunk, getfollowersThunk} from './../../src/redux/slices/usergithub'



const UserOne = (props) => {
  const router = useRouter()
  const { login } = router.query

  const classes = useStyles();

  const dispatch = useDispatch()

  const {userList,userGet, followers, following, repos} = useSelector(state => state.searchusergithub)



  const theuser = (userList && userList.data && userList.data[login])?userList.data[login]: ((userGet && userGet.data)?userGet.data:null)
  const [user , setUser] = React.useState(theuser);


  /** NO SSR METHODS  -START--------------------------------------------------------------------------------------------------------*/

  /* const getuseronegithubThunkDispatch = (login) =>{
    try {
      
      const resultAction = dispatch(getuseronegithubThunk({login:login}))
      const unwrapresult = unwrapResult(resultAction);
      return unwrapresult.data;

    } catch (err) {

      return err;
    }
  }

  const getreposThunkDispatch = (login) =>{
    try {
      
      const resultAction = dispatch(getreposThunk({login:login}))
      const unwrapresult = unwrapResult(resultAction);
      return unwrapresult.data;
    } catch (err) {

      return err;
    }
  }

  const getfollowersThunkDispatch = (login) =>{
    try {
      
      const resultAction = dispatch(getfollowersThunk({login:login}))
      const unwrapresult = unwrapResult(resultAction);
      return unwrapresult.data;
    } catch (err) {

      return err;
    }
  }

  const getfollowingThunkDispatch = (login) =>{
    try {
      
      const resultAction = dispatch(getfollowingThunk({login:login}))
      const unwrapresult = unwrapResult(resultAction);
      return unwrapresult.data;
    } catch (err) {

      return err;
    }
  } */


   /* React.useEffect(() => {
    
    // to reduce API round trip, use data from Redux data, such as redirect from previous link
    // if null then call the API
    if (!(userList && userList.data && userList.data[login])){ 
        //getuseronegithubThunkDispatch(login)        
    } 
    
    //getfollowingThunkDispatch(login)
    //getfollowersThunkDispatch(login)
    //getreposThunkDispatch(login)

  },[])  */


  

 /*  React.useEffect(() => {
    
    //getuseronegithubThunkDispatch(login)        
    //getfollowingThunkDispatch(login)
    //getfollowersThunkDispatch(login)
    //getreposThunkDispatch(login)

  },[login])  */
  /** NO SSR METHODS - END --------------------------------------------------------------------------------------------------------*/

  const backtohome= () =>{
      Router.push('/')
  }

  return (
      
    
    <div className={classes.container}>
        <Head>
            <title>Oddle - Github User {login}</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" key="viewport"  />
            <meta name="description" content={`Github - See followers, following and repos of ${login}`} key="description" />
        </Head>
     
      <main className={classes.main}>
            {/* { userGet && userGet.status==='loading'  &&
                <LoadingIndicator></LoadingIndicator>
            } */}
        

        <GridContainer>    
          <GridItem xs={12} sm={12} md={3} >
              <div className={classes.backbutton}>                
                <IconButton  className={classes.large} onClick={backtohome}  aria-label="back to home" component="span">
                    <ArrowBackIcon ></ArrowBackIcon>
                </IconButton>
              </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.profile}>
            
            {userList && userList.data && userList.data[login] &&
                <UserDetail data={userList.data[login]}></UserDetail>
            }
            { !(userList && userList.data && userList.data[login]) &&  userGet && userGet.data && 
                <UserDetail data={userGet.data}></UserDetail>
            }
          </GridItem>
          <GridItem xs={12} sm={12} md={3}></GridItem>
        </GridContainer>    
        
        <div className={classes.profile}>
        
 
        </div>

        <div className={classes.threes}>
        <GridContainer>    
          <GridItem xs={12} sm={12} md={4}>
          { followers.status==='fulfilled' && 
            <>
            <div className={classes.sectiontitle}>
                <Typography variant="h5" gutterBottom>
                FOLLOWER
                </Typography>
            </div>
            <div className={classes.section}>
                
                    {followers.data.map( user =>
                    <Follow key={'flwr'+user.login} login={user.login} avatar_url={user.avatar_url} direction='right' >
                    </Follow>
                    )}
                  
            </div>
            </>
            }
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          { following.status==='fulfilled' && 
            <>
            <div className={classes.sectiontitle}>
                
                <Typography variant="h5" gutterBottom>
                FOLLOWING
                </Typography>
            </div>
            <div className={classes.section}>
                
                    {following.data.map( user =>
                    <Follow key={'flwg'+user.login} login={user.login} avatar_url={user.avatar_url} direction='up'>
                    </Follow>
                    )}
                                  
                
            </div>
            </>
            }
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          { repos.status==='fulfilled' && 
            <>
            <div className={classes.sectiontitle}>
                <Typography variant="h5" gutterBottom>
                REPOS
                </Typography>
            </div>
            <div className={classes.section}>
                
                    {repos.data.map( repo =>
                        <Repo key={'repo'+repo.id} name={repo.name}  description={repo.description} html_url={repo.html_url} direction='left'>
                        </Repo>
                    )}
                                  
                
            </div>
            </>
            }
            </GridItem>
          </GridContainer>   
        </div>    
                
            
            

      </main>
    </div>

  )
}

export default UserOne

/* this is where the server side rebder happen*/
export const getServerSideProps =  wrapper.getServerSideProps(   //{store, req, res, ...etc}
  async (context) => {
      //console.log('server side -------------------------------------------------------------',context.query.login);

      const login = context.query.login
      
      await context.store.dispatch(getuseronegithubThunk({login:login}))
      await context.store.dispatch(getfollowersThunk({login:login}))
      await context.store.dispatch(getfollowingThunk({login:login}))
      await context.store.dispatch(getreposThunk({login:login}))

  }
); 

const useStyles = makeStyles((theme) => ({
  container: {
   
    padding: '0 0.5rem',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: 'auto'
  },
  
    main: {
    padding: '1rem 0',
    alignItems: 'center',
  },
  title: {
    margin: '0 30',
    lineHeight: '1.15',
    fontSize: '2rem',
    textAlign: 'center',
  },
  searchres: {    
    //width:"400px"
  },
  profile: {    
    //width:"500px",
    maxWidth:'500px',
    margin: 'auto'
  },
  threes: {    
    //width:"900px"
    //maxWidth:'1200px',
  },
  sectiontitle: {    
    padding:'15px 5px 0px',
    textAlign: 'center'
  },
  section: {    
    padding:'5px 5px'
  },
 
  pagination: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  large: {
    marginTop:'100px',
    width: theme.spacing(9),
    height: theme.spacing(9),
    backgroundColor: '#c4d4e2',
    color: theme.palette.text.primary
  },
  backbutton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  
}));
