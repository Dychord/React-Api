import axios from "axios"

function App() {

  const getProducts = ()=>{
    const api = 'https://fakestoreapi.com/products'
    axios.get(api).then(item=>(console.log(item.data))).catch(err=>console.log(err))
  }
  const addProducts = ()=>{
    const api = 'https://fakestoreapi.com/products'
    axios.post(api,{
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }).then(item=>(console.log(item.data))).catch(err=>console.log(err))
  }


  return (
    <>
      <button className="bg-green-500 text-white p-3 font-semibold rounded-md m-10" onClick={getProducts}>Get me products</button>
      <button className="bg-sky-500 text-white p-3 font-semibold rounded-md m-10" onClick={addProducts}>Add new product</button>
    </>
  )
}

export default App
