"use client"
import { useState } from "react";

export default function Home() {
  const [value, setvalue] = useState(20)
  return (
   <div className="m-3">
    <h1 className="text-bold">hallo chacha.... {value}</h1>
    <button className="bg-green-700 px-2 py-1 rounded-md mt-3 text-white" onClick={()=> setvalue(value+1)}>click</button>
   </div>
  );
}
