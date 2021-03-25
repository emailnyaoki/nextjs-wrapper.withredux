import { combineReducers } from '@reduxjs/toolkit';
import searchusergithub from './../redux/slices/usergithub'
import {HYDRATE} from "next-redux-wrapper";

const rootReducer = combineReducers({

    searchusergithub

});

export default rootReducer; 


