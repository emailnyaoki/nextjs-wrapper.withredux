import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import {api} from '../../api'

import {useDispatch, useSelector} from 'react-redux'
import { List } from 'material-ui'



const fakedatauser = 

        {data: 
          {
            "login": "emailnyaoki",
            "id": 5979589,
            "node_id": "MDQ6VXNlcjU5Nzk1ODk=",
            "avatar_url": "https://avatars.githubusercontent.com/u/5979589?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/emailnyaoki",
            "html_url": "https://github.com/emailnyaoki",
            "followers_url": "https://api.github.com/users/emailnyaoki/followers",
            "following_url": "https://api.github.com/users/emailnyaoki/following{/other_user}",
            "gists_url": "https://api.github.com/users/emailnyaoki/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/emailnyaoki/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/emailnyaoki/subscriptions",
            "organizations_url": "https://api.github.com/users/emailnyaoki/orgs",
            "repos_url": "https://api.github.com/users/emailnyaoki/repos",
            "events_url": "https://api.github.com/users/emailnyaoki/events{/privacy}",
            "received_events_url": "https://api.github.com/users/emailnyaoki/received_events",
            "type": "User",
            "site_admin": false,
            "name": null,
            "company": null,
            "blog": "",
            "location": null,
            "email": null,
            "hireable": null,
            "bio": null,
            "twitter_username": null,
            "public_repos": 32,
            "public_gists": 2,
            "followers": 0,
            "following": 0,
            "created_at": "2013-11-19T11:56:42Z",
            "updated_at": "2021-03-16T06:39:45Z"
          }

        }


// Thunks
export const searchusergithubThunk = createAsyncThunk(
  'searchusergithubThunk',  //just a name
  async (params, {rejectWithValue}) => {

    try {
      const response = await api.get(`https://api.github.com/search/users?q=${params.username}&page=${params.pagenum}&per_page=${params.pagesize}`);
      
      return response; 

      

    }catch(err){

      // Note: this is an example assuming the usage of axios. Other fetching libraries would likely have different implementations
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)

    }
    
  }
)


export const getusergithubThunk = createAsyncThunk(
  'getusergithubThunk',  //just a name
  async (params, {rejectWithValue}) => {

    try {
      
      const response = await api.get(`https://api.github.com/users/${params.login}`);
      
      return response


      }catch(err){

      // Note: this is an example assuming the usage of axios. Other fetching libraries would likely have different implementations
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)

    }
    
  }
)

export const getuseronegithubThunk = createAsyncThunk(
  'getuseronegithubThunk',  //just a name
  async (params, {rejectWithValue}) => {

    try {
      
      const response = await api.get(`https://api.github.com/users/${params.login}`);
      
      return response


      }catch(err){

      // Note: this is an example assuming the usage of axios. Other fetching libraries would likely have different implementations
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)

    }
    
  }
)

export const getreposThunk = createAsyncThunk(
  'getreposThunk',  //just a name
  async (params, {rejectWithValue}) => {

    try {
      
      const response = await api.get(`https://api.github.com/users/${params.login}/repos`);
      
      return response


      }catch(err){

      // Note: this is an example assuming the usage of axios. Other fetching libraries would likely have different implementations
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)

    }
    
  }
)

export const getfollowersThunk = createAsyncThunk(
  'getfollowersThunk',  //just a name
  async (params, {rejectWithValue}) => {

    try {
      
      const response = await api.get(`https://api.github.com/users/${params.login}/followers`);
      
      return response


      }catch(err){

      // Note: this is an example assuming the usage of axios. Other fetching libraries would likely have different implementations
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)

    }
    
  }
)

export const getfollowingThunk = createAsyncThunk(
  'getfollowingThunk',  //just a name
  async (params, {rejectWithValue}) => {

    try {
      
      const response = await api.get(`https://api.github.com/users/${params.login}/following`);
      
      return response


      }catch(err){

      // Note: this is an example assuming the usage of axios. Other fetching libraries would likely have different implementations
      if (!err.response) {
        throw err
      }

      return rejectWithValue(err.response.data)

    }
    
  }
)


const slice = createSlice({
  name: 'searchusergithub',  
  initialState: {
      snackbar:true,
      usermanagement:{
        data:null,
        status:null,
        error:null,
        message:null,
        countrows:0,
        page:1,
        searchword:'' 
      },
      userList:{
        data:null,
        status:null,
        error:null,
        message:null,
      },  
      userGet:{
        data:null,
        status:null,
        error:null,
        message:null,
      },    
      followers:{
        data:null,
        status:null,
        error:null,
        message:null,
      },
      following:{
        data:null,
        status:null,
        error:null,
        message:null,
      },
      repos:{
        data:null,
        status:null,
        error:null,
        message:null,
      },
      
  },
  reducers: {

    setSearchwordAction: (state, action) => {
      
      //console.log("tutupPekebunAction");
      
      state.usermanagement = {
        ...state.usermanagement,
        searchword: action.payload
      }

    },
    
  },

  extraReducers: {
    
    [searchusergithubThunk.pending]:(state, action) => {     

        state.usermanagement = { 
            ...state.usermanagement,
            status:'loading',
            countrows:0,
          }  

        state.userList = { 
          ...state.userList, 
          data :null
        }
    },

    [searchusergithubThunk.fulfilled]:(state, action) => {

        const res = action.payload;
        
      
      if (res.data.incomplete_results===false){

        let data = res.data.items;
        let count = res.data.total_count>1000?1000: res.data.total_count
     
        
        
        state.usermanagement = { 
          ...state.usermanagement,
          data:data,
          status:'done',
          countrows:count,
          page:res.data.pagenum,
        }


        state.userList = { 
          ...state.userList,
          data: null, //  clear it everytime new search is called
        }

        
       
        
      }else{          
        state.usermanagement = {
          ...state.usermanagement, 
          data:null,
          status:null,
          status:res.data.status,
          message:res.data.message
        }
      }

    
    },
    [searchusergithubThunk.rejected]:(state, action) => {
            
        //console.log("getRecapThunk", action.payload);
      if (action.payload) {
        // If a rejected action has a payload, it means that it was returned with rejectWithValue

        
        state.usermanagement = {
          ...state.usermanagement, 
          data:null,
          status:null,
          error:action.payload.errorMessage,
          status:"rejected"
        }

      } else {
        state.usermanagement = {
          ...state.usermanagement, 
          data:null,
          status:null,
          error:action.error,
          status:"rejected"
        }
      }
    
    },



    [getusergithubThunk.pending]:(state, action) => {     

          state.userList = { 
            ...state.userList,
            status:'loading'
          }
    },

    [getusergithubThunk.fulfilled]:(state, action) => {

        const res = action.payload;
      
       
          const user = res.data;

          //state.userList.data[user.id]= user

          state.userList.data = { 
            ...state.userList.data
          }

          state.userList.data[user.login] = user
        
          state.userList = { 
            ...state.userList, 
            
            status:'fulfilled'
          }


    
    },
    [getusergithubThunk.rejected]:(state, action) => {
            
      console.log("getusergithubThunk: rejected", action.payload);
      if (action.payload) {
        // If a rejected action has a payload, it means that it was returned with rejectWithValue

        
        state.userList = {
          ...state.userList, 
          data:null,
          error:action.payload.errorMessage,
          status:"rejected"
        }

        

      } else {
        state.userList = {
          ...state.userList, 
          data:null,
          error:action.error,
          status:"rejected"
        }
      }

     
    },


    [getuseronegithubThunk.pending]:(state, action) => {     

      state.userGet = { 
        ...state.userGet,
        status:'loading'
      }
    },

    [getuseronegithubThunk.fulfilled]:(state, action) => {

        const res = action.payload;
      
      
          const user = res.data;

        
          state.userGet = { 
            ...state.userGet, 
            data : user,
            status:'fulfilled'
          }



    },
    [getuseronegithubThunk.rejected]:(state, action) => {
            
      console.log("getusergithubThunk: rejected", action.payload);
      if (action.payload) {
        // If a rejected action has a payload, it means that it was returned with rejectWithValue

        
        state.userGet = {
          ...state.userGet, 
          data:null,
          error:action.payload.errorMessage,
          status:"rejected"
        }

        

      } else {
        state.userGet = {
          ...state.userGet, 
          data:null,
          error:action.error,
          status:"rejected"
        }
      }

    
    },


    [getreposThunk.pending]:(state, action) => {     

      state.repos = { 
        ...state.repos,
        status:'loading'
      }
    },

    [getreposThunk.fulfilled]:(state, action) => {

        const res = action.payload;
      
      
          const user = res.data;

        
          state.repos = { 
            ...state.repos, 
            data : user,
            status:'fulfilled'
          }



    },
    [getreposThunk.rejected]:(state, action) => {
            
      console.log("getusergithubThunk: rejected", action.payload);
      if (action.payload) {
        // If a rejected action has a payload, it means that it was returned with rejectWithValue

        
        state.repos = {
          ...state.repos, 
          data:null,
          error:action.payload.errorMessage,
          status:"rejected"
        }

        

      } else {
        state.repos = {
          ...state.repos, 
          data:null,
          error:action.error,
          status:"rejected"
        }
      }

    
    },


    [getfollowersThunk.pending]:(state, action) => {     

      state.followers = { 
        ...state.followers,
        status:'loading'
      }
    },

    [getfollowersThunk.fulfilled]:(state, action) => {

        const res = action.payload;
      
      
          const data = res.data;

                
          state.followers = { 
            ...state.followers, 
            data : data,
            status:'fulfilled'
          }



    },
    [getfollowersThunk.rejected]:(state, action) => {
            

      if (action.payload) {
        // If a rejected action has a payload, it means that it was returned with rejectWithValue

        
        state.followers = {
          ...state.followers, 
          data:null,
          error:action.payload.errorMessage,
          status:"rejected"
        }

        

      } else {
        state.followers = {
          ...state.followers, 
          data:null,
          error:action.error,
          status:"rejected"
        }
      }

    
    },

    [getfollowingThunk.pending]:(state, action) => {     

      state.following = { 
        ...state.following,
        status:'loading'
      }
    },

    [getfollowingThunk.fulfilled]:(state, action) => {

        const res = action.payload;
      
      
          const data = res.data;

        
          state.following = { 
            ...state.following, 
            data : data,
            status:'fulfilled'
          }



    },
    [getfollowingThunk.rejected]:(state, action) => {
            

      if (action.payload) {
        // If a rejected action has a payload, it means that it was returned with rejectWithValue

        
        state.following = {
          ...state.following, 
          data:null,
          error:action.payload.errorMessage,
          status:"rejected"
        }

        

      } else {
        state.following = {
          ...state.following, 
          data:null,
          error:action.error,
          status:"rejected"
        }
      }

    
    },




  }
});
export default slice.reducer

/* export const {
  
  someactions,

} = slice.actions */