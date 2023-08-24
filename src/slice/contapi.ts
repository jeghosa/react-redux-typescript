import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import store from "../tkstore"
interface Icont{title:string, message:"string"}
// interface Capi{baseQuery:(baseUrl:string)=>void,tagTypes:Array<string>,reducerPath:string,endpoints:(builder:any)=>Promise<Icont>}
type Rootstate= ReturnType<typeof store.getState>
const contapi= createApi({baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000/api/items",prepareHeaders:(headers,{getState})=>{
    const token = (getState() as Rootstate).user.token
    if (token) {
        headers.set("authorization", `Bearer ${token}`)
        
    }
    return headers
}}),tagTypes:["items"],reducerPath:"contapi", endpoints:(builder:any)=>({gcont:builder.query({query:()=>"/", providesTags:["items"]}), crcont:builder.mutation({query:(item:Icont)=>({uri:"/",
method:"POST", body:item})})})}) 


export const{useGcontMutation, useCrcontMutation}= contapi
export default contapi