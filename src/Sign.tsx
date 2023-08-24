import React,{useState,useEffect} from 'react'
import { useSignMutation } from './slice/api'
import { useDispatch, useSelector } from 'react-redux'
import { getv,submf } from './slice/uslice'

const Sign = () => {
    interface Fdata{name:string,email:string,password:string}
    const dispatch= useDispatch()
    const {submitting}= useSelector((state:any)=>state.user)

  const [formd, setFormd]= useState({name:"",email:"",password:""})

  const handlec= (event:any)=>{
    const {name,value}= event.target
    setFormd((prevFormd)=>{
      return{...prevFormd,[name]:value}
    })
  }
 const [sign]= useSignMutation() as any
 
  const handles =(event:any)=>{
    event.preventDefault()
    dispatch(submf())
   
    sign(formd)
    setFormd({name:"",email:"",password:""})
    // console.log()
  }
  // useEffect(()=>{
  //   if (submitting) {
  //     dispatch(getv(formd))
      
  //   }
  // },[dispatch,submitting])
  return (
    <div> <h2>Sign up</h2>
        <form action="" onSubmit={handles}>
        <input type="text" placeholder="name" name='name' onChange={handlec} value={formd.name}/>
        <input type="email" name="email" id="" value={formd.email} onChange={handlec} placeholder='email '/>
        <input type="password" name="password" id="" value={formd.password} onChange={handlec} placeholder='password' />
   <button>submit</button>
      </form></div>
  )
}

export default Sign