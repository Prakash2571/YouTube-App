import {createSlice} from "@reduxjs/toolkit";

const AppSlice=createSlice({

    name:"AppSlice",
    initialState:{
        BarOpen:true

    },
    reducers:{
        toggle:(state)=>{
            state.BarOpen=!state.BarOpen;
        }
        
    }

});
export default AppSlice.reducer;
export const {toggle} = AppSlice.actions;