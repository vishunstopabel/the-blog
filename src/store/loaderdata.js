import{createSlice} from "@reduxjs/toolkit"
 const initialState={
    status:false,
    Loaderdata:null
}
 const loaderslice=createSlice({
    name:"loader",
    initialState,
    reducers:{
        setloader:(state,action)=>{
            state.status=true
            
        },
        removeloader:(state,action)=>{
            state.status=false
          
        },

       


    }

})
export const{setloader,removeloader} =loaderslice.actions
export default loaderslice.reducer