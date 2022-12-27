import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
}

const counterReducer=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        add:(state)=>state.value++,
        decrement:(state)=>state.value--,
    }
})

export const {add,decrement}=counterReducer.actions;
export default counterReducer.reducer