import { combineReducers } from '@reduxjs/toolkit';


import searchusergithub from './../redux/slices/usergithub'
/*import stdb from './slices/stdb.slice'
import kodewilayah from './slices/kodewilayah.slice'
import komoditas from './slices/komoditas.slice'
import UI from './slices/ui.slice'
import komoditasprovinsi from './slices/stats.slice'
import usermanagement from './slices/usermanagement.slice' */


const rootReducer = combineReducers({

    searchusergithub//user,stdb,kodewilayah,UI,komoditas,komoditasprovinsi,usermanagement


});//nanti diisi yak
//export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;