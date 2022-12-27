import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-uuid';

const initialState=[
    {name:"Work harder",created:Date.now().toLocaleString(),done:false,key:uuid()},
    {name:"Saie",created:Date.now().toLocaleString(),done:false,key:uuid()}
]
const TodoSlice = createSlice({
 name:"Todos",
 initialState,
 reducers:{
    AddTodo:(state,action)=>{
        state=state.push({name:action.payload,created:Date.now().toLocaleString(),done:false,key:uuid()})
    },
    ChangeDone:(state,action)=>{
        return state=state.map(item=>(item.key===action.payload)?({...item,done:!item.done}):item)

    }
 }
})

export const {AddTodo,ChangeDone}=TodoSlice.actions;
export default TodoSlice.reducer