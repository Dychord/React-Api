import React, { useEffect, useState } from 'react'

function Home() {


  useEffect(()=>{
    console.log("Home Comp is created");
    return ()=>{
      console.log("Home Comp is deleted");
    }
  },[])

  const [first, setFirst] = useState("First")
  const [second, setSecond] = useState("Second")

  return (
    <>
      <div>Home</div>
        <h1 className="font-semibold rounded-md mt-10 ml-5">{first}</h1>
        <button onClick={()=>(setFirst("First Changed"))} className="bg-green-500 text-white px-5 py-2 font-semibold rounded-md w-fit ml-5">Change first</button>
        <h1 className="font-semibold rounded-md mt-10 ml-5">{second}</h1>
        <button onClick={()=>(setSecond("Second Changed"))} className="bg-green-500 text-white px-5 py-2 font-semibold rounded-md w-fit ml-5 ">Change second</button>
    </>
  )
}

export default Home