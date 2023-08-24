import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
  interface Islice{people:Array<any>, token:string, messages:object,loading:boolean,submitting:boolean}
 let initialState = {people:[], messages:{},token:"",loading:false, submitting:false}

 export const getv:any= createAsyncThunk("user/getv", async(value:object,thunkAPI)=>{
   await axios.post("http://localhost:4000/api/users/sign",value)
  
 })
const uslice = createSlice({name:"user", initialState, reducers:{gett:(state, {payload})=>{
state.token= payload
}, submf:(state)=>{
  state.submitting= true
}},extraReducers:{[getv.pending]:(state:Islice)=>{state.loading= true},[
  getv.fulfilled
]:(state,{payload})=>{
  // state.messages= payload
  state.loading= false

},[getv.rejected]:(state)=>{state.loading= false}}}) 

export const {gett,submf} = uslice.actions
export default uslice.reducer