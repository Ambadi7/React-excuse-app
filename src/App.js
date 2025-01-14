import axios from "axios";
import { useState,useEffect } from "react";

function App() {

  const [excuse,setExcuse] =useState("")
  const fetchData=async(reason)=>{
    const {data} = await axios.get(`https://excuser-three.vercel.app/v1/excuse/${reason}/`)
    console.log(data)
    setExcuse(data[0].excuse)
  }
  useEffect (()=>{
    fetchData("developers")
  },[])

  return (
    <div className="flex flex-col font-mono  justify-center items-center w-full h-svh bg-blue-300 gap-4">
      <h1 className="flex  text-2xl md:text-5xl  justify-center items-center text-slate-800">Generate Excuses here!</h1>
      <div className="flex flex-col text-xl gap-2 bg-white rounded p-3 h-auto">
        <button className=" bg-red-800 rounded-md w-56 " onClick={()=>{fetchData("developers")}}>Developers</button>
        <button className=" bg-red-800 rounded-md w-56" onClick={()=>{fetchData("gaming")}}>Gaming</button>
        <button className=" bg-red-800 rounded-md w-56" onClick={()=>{fetchData("office")}}>Office</button>
      </div>
      <div className="flex font-bold text-xl justify-center w-4/6">
        <p>{excuse}</p>
      </div>
    </div>
  );
}

export default App;
