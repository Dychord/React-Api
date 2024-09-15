import React, { useEffect, useState } from 'react'
import axios from '../utils/Axios'

function Services() {
    
    const [users, setUsers] = useState([])
    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = ()=>{
        axios.get("/users").then((item)=>setUsers(item.data)).catch((err)=>console.log(err))
    }

  return (
    <>
        <div className='font-semibold text-3xl mb-5 ml-2 mt-3'>
            Users - 
        </div>
        {users.length > 0 ? users.map((user,index)=>(<div key={index} className="p-10 bg-zinc-200 rounded-md w-fit ml-10 px-4 py-2 mt-4">
            <span className='font-semibold text-lg'>{user.name.firstname}</span> - {user.email}
        </div>)): 'Loading...'}
    </>
  )
}

export default Services