import{createSlice} from "@reduxjs/toolkit"
 const initialState={
    status:false,
    userdata:null
}
 const userdataslice=createSlice({
    name:"data",
    initialState,
    reducers:{
        data:(state,action)=>{
            state.status=action.payload.status,
            state.profiledata=action.payload.profiledata
        },
        
       


    }

})
export const{data} =userdataslice.actions
export default userdataslice.reducer