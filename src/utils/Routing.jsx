import React from 'react'
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Show from '../components/Show'
import Add from '../components/Add'
import Home from '../components/Home'

function Routing() {

  const styleLink = (e)=>{
    return [
        e.isActive ? "text-sky-600" : "",
        e.isActive ? "font-semibold" : "",
    ].join(" ")
  }

  return (
    <>
        <nav className='w-full bg-zinc-200 p-8 font-semibold text-3xl items-center justify-center flex gap-20'>
          <NavLink className={styleLink} to="/">Home</NavLink>
          <NavLink className={styleLink} to="/show">Show</NavLink>
          <NavLink className={styleLink} to="/add">Add</NavLink>
        </nav>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/show' element={<Show />}></Route>
            <Route path='/add' element={<Add />} ></Route>
        </Routes>
    </>
  )
}

export default Routing