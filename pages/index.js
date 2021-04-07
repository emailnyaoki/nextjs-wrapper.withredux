import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import SearchField from '../src/components/searchfield'

// dinamically imported component
// dynamic imports as another way to split your code into manageable chunks.
/**** ---------------------------------------------------------------------*/

import dynamic from 'next/dynamic'

const UserAvatar = dynamic(() =>
  import('../src/components/useravatar')
)

/**** ---------------------------------------------------------------------*/


//import LoadingIndicatorFlat from './../src/components/Progress/IndicatorFlat';
import LoadingIndicatorSSR from './../src/components/Progress/IndicatorSSR';
import Pagination from '@material-ui/lab/Pagination';

import {useDispatch, useSelector} from 'react-redux'
import {searchusergithubThunk, getusergithubThunk} from './../src/redux/slices/usergithub'

import Head from 'next/head';
import { useRouter } from 'next/router';
import {wrapper} from './../src/redux/storessr';


export default function Home(props) {

  const classes = useStyles();

  const dispatch = useDispatch()
  
  const [page, setPage] = React.useState(props.pagenum||0);
  const [username, setUsername] = React.useState(props.search||'');

  const {usermanagement, userList} = useSelector(state => state.searchusergithub)


  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = (search,page) => {
    router.replace(router.pathname+"?search="+search+"&page="+page);
  }


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
    console.log('asasas')
    if (search.length>2){
        setUsername(search)

        //CLIENT
        //searchusergithubThunkDispatch(search, 1)


        // SSR 
        refreshData(search,1)
    }

   
    
    
  }

  const handleChange = (event, value) =>{
    //console.log('page',page)

    //CLIENT
    //setUsername(username)
    //setPage(value)
    //searchusergithubThunkDispatch(username, value)
    
    // SSR 
    refreshData(username,value)
    
  }


 /*  React.useEffect(() => {

    
    
    if (usermanagement.status==='done'){ 
      console.log('here')
      usermanagement.data.map(user=>{    
        getusergithubThunkDispatch(user.login)
      })
    }
  }, [usermanagement.status]) */



  return (
    <div className={classes.container}>
        <Head>
            <title>Oddle - Search Github User </title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" key="viewport"  />
            <meta name="description" content='Oddle Front End Challenge' key="description" />
        </Head>
      
      <main className={classes.main}>
        <p className={classes.title}>
          Oddle Front-End Challenge !
        </p>
        
                   
        {/* <LoadingIndicatorFlat loading={usermanagement.status==='loading'}></LoadingIndicatorFlat> */}

        {/* it is unable to get pending/rejected state from server side render. that is why it is using Router event */}
        <LoadingIndicatorSSR ></LoadingIndicatorSSR>
        
        
        
        <SearchField onChange={handleSearch} onSubmit={handleSearch} ></SearchField>
        <div className={classes.searchres}>
          
          {/* { JSON.stringify(userList) } */}

          

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

              direction='up'
              >
              </UserAvatar>
            )
            )
            
          }

          { usermanagement.status==='done' &&  usermanagement.countrows>10 && 
          <div className={classes.pagi}>
          <Pagination count={(usermanagement.countrows/10).toFixed(0)-1} className={classes.pagination} page={props.pagenum} onChange={handleChange}/>
          </div>
          }

          {/* { JSON.stringify(usermanagement) } */}
          
        </div>
 
        
      </main>

      
    </div>
  )

  
}

/* this is where the server side render happen*/
export const getServerSideProps =  wrapper.getServerSideProps(   //{store, req, res, ...etc}
  async (context) => {
      //console.log('server side -------------------------------------------------------------',context.query.login);
      
      if (context.query.search && context.query.page){
        const search = context.query.search
        let page = Number(context.query.page)
        console.log('server side -------------------------------------------------------------',search,page);
        
        //getting users
        await context.store.dispatch(searchusergithubThunk({pagenum:page,pagesize:10, username:search}))        



        //getting each user's followers
        const usermanagementdata = context.store.getState('searchusergithub').searchusergithub.usermanagement.data

        await Promise.all(usermanagementdata.map(async user=>{    
          await context.store.dispatch(getusergithubThunk({login:user.login}))
        }) )

        return { props: { pagenum: page,search: search} }
      }

      return { props: { pagenum: 0, search: '' } }

     
  }
); 





const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },  
  main: {
    padding: '1rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',    
    alignItems: 'center',
  },
  title: {
    lineHeight: '1.15',
    fontSize: '1.5rem',
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
  pagi:{
    justifyContent: 'center',
    display: 'flex'
  }
}));

