import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheSuggetions:(state,action)=>{
            return { ...action.payload, ...state };
            // state = Object.assign(state,action.payload)//will work same
        }
    }
})

export const {cacheSuggetions} = searchSlice.actions;
export default searchSlice.reducer;