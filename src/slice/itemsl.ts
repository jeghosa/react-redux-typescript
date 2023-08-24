import { createSlice } from "@reduxjs/toolkit";
interface Conth{items:Array<object>, submitted:boolean}
const initialState = {items:[], submitted:false}
const itemsl= createSlice({name:"items", initialState,reducers:{
    subfc:(state)=>{
        state.submitted= true
    }
}})

export const{subfc}= itemsl.actions
export default itemsl.reducer