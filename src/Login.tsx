import React,{useState} from 'react'
import { useLognMutation } from './slice/api'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {gett} from "./slice/uslice"
const Login = () => {
    interface Fdata{name:string,email:string,password:string}
  const [formd, setFormd]= useState({name:"",email:"",password:""})
   const [logv]:any = useLognMutation()
  const dispatch= useDispatch()

  const handlec= (event:any)=>{
    const {name,value}= event.target
    setFormd((prevFormd)=>{
      return{...prevFormd,[name]:value}
    })
  }

  const handles = async(e:any)=>{
    e.preventDefault()
   const {data}= await logv(formd)
   console.log(data)
   const token:string= data.token
   dispatch(gett(token))
   setFormd({name: " ",
   email: " ",
   password :" "})
  }
  return (
    <div> <h2>Login</h2>
        <form action="" onSubmit={handles}>
        <input type="text" name='name' onChange={handlec} value={formd.name} placeholder='name'/>
        <input type="email" name="email" id="" value={formd.email} onChange={handlec} placeholder="email"/>
        <input type="password" name="password" id="" value={formd.password} onChange={handlec} placeholder='password' />
   <button>submit</button>
      </form></div>
  )
}

export default Login