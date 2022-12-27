import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
}
const counterReducer=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        add:(state)=>{state.value++},
        decrement:(state)=>{if(state.value>0){state.value--}else{state.value+=1}},
        incrementByValue:(state,action)=>{state.value+=parseInt(action.payload)},
    }
})

export const {add,decrement,incrementByValue}=counterReducer.actions;
export default counterReducer.reducer