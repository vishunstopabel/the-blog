import {configureStore} from "@reduxjs/toolkit"
import authslice from "./authslice"
import userdataslice from "./userdataslice";
import loaderslice from "./loaderdata"

const store=configureStore({
    reducer:{
        auth:authslice,
        data:userdataslice,
        loader:loaderslice,
    }
       
    
});
export default store