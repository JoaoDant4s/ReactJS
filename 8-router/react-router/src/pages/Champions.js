import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import "./Champions.css"
const Champions = () => {
  //4 - rota dinâmica
  const { id } = useParams()

  //5 - carregamento individual
  const url = "http://localhost:3000/champions/" + id
  const { data: champion, loading, error } = useFetch(url)

  console.log(champion)
  return (
    <>
      <h1>Champion Lore</h1>
      <h2>ID do campeão: {id}</h2>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {champion && (
        <div className="container-lore">
          <h1>{champion.name}</h1>
          <img src={champion.image} alt={champion.name} />
          <div className="lore">{champion.lore}</div>
          {/* 5- nested routes */}
          <Link to={`/champions/${id}/skins`}>Ver skins</Link>
        </div>
      )}
    </>
  )
}

export default Champions