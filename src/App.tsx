import React,{useState,useEffect} from 'react';
import Sign from "./Sign"
import Login from "./Login"
import Page from './Page'
import "./index.css"
import { useDispatch } from 'react-redux';
import { getv } from './slice/uslice';

function App() {
  const dispatch= useDispatch()
  const getd= ()=>{
    fetch("http://localhost:4000").then((resp)=>resp.json()).then((data)=>console.log(data)).catch((error)=>console.log(error))
  }
  
//   useEffect(()=>{
//     // getd()
// dispatch(getv())
//   },[])
  
  return (
    <div className="App">
      <Sign/>
      <Login/>
      <Page/>
      
    </div>
  );
}

export default App;
