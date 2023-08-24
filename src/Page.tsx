import React,{useState} from 'react'
import {useGcontMutation,useCrcontMutation} from "./slice/contapi"
import { useDispatch, useSelector } from 'react-redux'
import { subfc } from './slice/itemsl'

const Page = () => {
    const [formd, setFormd]= useState({message:"",title:""})
    const [crcont]:any = useCrcontMutation()
    const dispatch= useDispatch()
    const {submitted}= useSelector((state:any)=>state.items)

    const handlec= (e:any)=>{
        const{name,value}= e.target
        setFormd((prevFormd)=>{
            return{...prevFormd, [name]:value}
        })

    }
    const handles =(e:any)=>{
        e.preventDefault()

        crcont(formd)
        // setFormd({message: "",
        // title: ""})
      dispatch(subfc())
        
    }
  return (
    <div>
        <form onSubmit={handles}>
            <textarea name="message" id="tarea" placeholder='comment' onChange={handlec} value={formd.message}></textarea>
            <input type="text" id= "tai" placeholder='title' name="title" onChange={handlec} value={formd.title} />
            <button>submit</button>
        </form>
        <table>
          <thead><tr>
            <th>title</th>
            <th>message</th></tr>
            </thead>
           <tbody><tr><td>holiness</td>
            <td>washed clean</td></tr></tbody>
        </table>
    </div>
  )
}

export default Page