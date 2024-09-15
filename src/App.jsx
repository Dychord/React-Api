import axios from "axios"
import { useState } from "react"

function App() {

  const [products, setProducts] = useState([])

  const getProducts = ()=>{
    const api = 'https://fakestoreapi.com/products'
    axios.get(api).then(item=>(
      setProducts(item.data)
    )).catch(err=>console.log(err))
  }

  const daataa = 
    [
      {
        "title": "Wireless Mouse",
        "price": 25.99,
        "description": "A sleek wireless mouse with ergonomic design.",
        "image": "https://i.pravatar.cc/150?img=1",
        "category": "electronics"
      },
      {
        "title": "Bluetooth Headphones",
        "price": 59.99,
        "description": "Over-ear Bluetooth headphones with noise cancellation.",
        "image": "https://i.pravatar.cc/150?img=2",
        "category": "electronics"
      },
      {
        "title": "Smart Watch",
        "price": 199.99,
        "description": "A smart watch with fitness tracking and notifications.",
        "image": "https://i.pravatar.cc/150?img=3",
        "category": "electronics"
      },
      {
        "title": "Portable Charger",
        "price": 14.99,
        "description": "A compact portable charger with fast charging capability.",
        "image": "https://i.pravatar.cc/150?img=4",
        "category": "electronics"
      },
      {
        "title": "Gaming Keyboard",
        "price": 89.99,
        "description": "Mechanical gaming keyboard with customizable RGB backlighting.",
        "image": "https://i.pravatar.cc/150?img=5",
        "category": "electronics"
      }
    ]
    

  const addProducts = ()=>{
    const api = 'https://fakestoreapi.com/products'
    daataa.forEach((products)=>{
      axios.post(api,products).then(item=>(console.log(item.data))).catch(err=>console.log(err))
    })
  }



  return (
    <>
      <button className="bg-green-500 text-white p-3 font-semibold rounded-md m-10" onClick={getProducts}>Get me products</button>
      <button className="bg-sky-500 text-white p-3 font-semibold rounded-md m-10" onClick={addProducts}>Add new product</button>
      <br /><br />
      {products.map((data,index)=>(
        <div key={index} className="p-10 bg-zinc-300 rounded-md w-fit ml-10 px-4 py-2 mt-4">
        {data.title}
      </div>
      ))}
    </>
  )
}

export default App
