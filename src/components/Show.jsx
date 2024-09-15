import React, { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'


function Show() {

    const [products, setProducts] = useState([])

    const fetProducts = ()=>{
      const api = 'https://fakestoreapi.com/products'
      axios.get(api).then(item=>(
        setProducts(item.data)
      )).catch(err=>console.log(err))
    }

    useEffect(()=>{
      fetProducts()
    },[])

  return (
    <>
        <div>
            {products.length > 0 ? (products.map((data,index)=>(
            <div key={index} className="p-10 bg-zinc-300 rounded-md w-fit ml-10 px-4 py-2 mt-4">
                {data.title}
            </div>))) : (<h1 className="p-10">Loading...</h1>)}
        </div>
    </>
  )
}

export default Show