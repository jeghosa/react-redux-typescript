import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import store from "../tkstore"
type Rootstate= ReturnType<typeof store.getState>

interface Ruser{name:string,email:string,password:string}

const apis= createApi({baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000"}),tagTypes:["users"],reducerPath:"api",endpoints:(builder:any)=>({sign:builder.mutation({query:(user:Ruser)=>({url:"/api/users/sign",method:"POST",body:user}), invalidatesTags:["users"]})
   
, logn:builder.mutation({query:(user:Ruser)=>({url:"/api/users/login",method:"POST",body:user}),invalidatesTags:["users"]})})})

export const{useLognMutation, useSignMutation}= apis
export default apis