import React, { useEffect } from 'react'

function Home() {
  useEffect(()=>{
    console.log("Comp is created");
    return ()=>{
      console.log("Comp is deleted");
    }
  })

  
  return (
    <div>Home</div>
  )
}

export default Home