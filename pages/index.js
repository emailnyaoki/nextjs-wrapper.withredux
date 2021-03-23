import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import SearchField from '../src/components/searchfield'

import dynamic from 'next/dynamic'

const UserAvatar = dynamic(() =>
  import('../src/components/useravatar')
)

//import UserAvatar from '../src/components/useravatar'

import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';

import {useDispatch, useSelector} from 'react-redux'
import {searchusergithubThunk, getusergithubThunk} from './../src/redux/slices/usergithub'





export default function Home() {

  const classes = useStyles();

  const dispatch = useDispatch()
  
  const [page, setPage] = React.useState(0);
  const [username, setUsername] = React.useState('');

  const {usermanagement, userList} = useSelector(state => state.searchusergithub)


  const searchusergithubThunkDispatch = (user, thepage) =>{
    try {

      const resultAction = dispatch(searchusergithubThunk({pagenum:++thepage,pagesize:10, username:user}));
      const unwrapresult = unwrapResult(resultAction);
      return unwrapresult.data;

    } catch (err) {

      return err;
    }
  }

  const getusergithubThunkDispatch = (login) =>{
    try {

      const resultAction = dispatch(getusergithubThunk({login:login}))
      const unwrapresult = unwrapResult(resultAction);
      return unwrapresult.data;

    } catch (err) {

      return err;
    }
  }

  const handleSearch = (search) =>{

   if (search.length>2){
      setUsername(search)
      searchusergithubThunkDispatch(search, 1)
   }
    
    
  }

  const handleChange = (event, value) =>{
    //console.log('page',page)
    setUsername(username)
    setPage(value)
    searchusergithubThunkDispatch(username, value)
  }


  React.useEffect(() => {
    
    if (usermanagement.status==='done'){ 
      usermanagement.data.map(user=>{    
        getusergithubThunkDispatch(user.login)
      })
    }
  }, [usermanagement.status])



  return (
    <div className={classes.container}>
      
      <main className={classes.main}>
        <h1 >
          Oddle Front-End Challenge !
        </h1>
        
        <SearchField onChange={handleSearch} onSubmit={handleSearch} ></SearchField>
        <div className={classes.searchres}>
          
          {/* { JSON.stringify(userList) } */}

          { usermanagement.status==='loading' && 
            <CircularProgress></CircularProgress>
          }

          { usermanagement.status==='done' && (
            usermanagement.data.map( user =>
              <UserAvatar key={user.login} login={user.login} avatar_url={user.avatar_url}     
              followers={
                userList.status==='loading'?'getting...' : 
                userList && userList.data && userList.data[user.login] ? userList.data[user.login].followers:'n/a'              
              }             
              
              
              
              following={
                userList.status==='loading'?'getting...' : 
                userList && userList.data && userList.data[user.login] ? userList.data[user.login].following:'n/a'
              } 
              >
              </UserAvatar>
            )
            )
            
          }

          { usermanagement.status==='done' &&  usermanagement.countrows>10 && 
          <Pagination count={(usermanagement.countrows/10).toFixed(0)-1} className={classes.pagination} page={page} onChange={handleChange}/>
          }

          {/* { JSON.stringify(usermanagement) } */}
          
        </div>
 
        
      </main>

      
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  main: {
    padding: '1rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: '0 30',
    lineHeight: '1.15',
    fontSize: '2rem',
    textAlign: 'center',
  },

  searchres: {    
    width:"400px"
  },
  pagination: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

