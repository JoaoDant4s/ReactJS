import './App.css';
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'

function App() {
  const [products, setProducts] = useState([])
  const url = "http://localhost:3000/products"
  
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  //4- custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)

  //1- resgatando dados
  // useEffect(() => {
  //     async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()

  //     setProducts(data)
  //   }
  //   fetchData()
  // }, [])
  //4- custom hook
  
  //2 - add products
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {name, price}

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })
    // //3 - carregamento dinâmico
    // const addedProduct = await res.json()
    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    //5 - refatorando post
    httpConfig(product, "POST")
    setName("")
    setPrice("")
  }

  // 8 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading*/}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
      <ul>
        {items && items.map((products) => (
          <li key={products.id}>
            {products.name} - R${products.price}
            <button onClick={() => handleRemove(products.id)} className="delete">Excluir</button>
          </li>
        ))}
      </ul>)}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text"
            value={name} 
            name={name} 
            onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input type="number" 
            value={price} 
            name={price} 
            onChange={(e) => setPrice(e.target.value)} 
            />
          </label>
          {/* 7 - state de loading no post*/}
          {loading && <input type="submit" disabled value="Aguarde"/>}
          {!loading && <input type="submit" value="Criar produto"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
