import styles from "./Home.module.css"

import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

// components


const Home = () => {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <div>
      <h2>Veja os posts mais recentes</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Busque por tags..."/>
        <button className="btn btn-dark">Pesquisar</button>
      </form>
    </div>
  )
}

export default Home