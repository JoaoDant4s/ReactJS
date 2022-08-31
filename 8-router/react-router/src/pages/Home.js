//2 - links com react router
import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import "./Home.css"
const Home = () => {
    //3- carregamento de dados
    const url = "http://localhost:3000/champions"

    const {data: items, loading, error} = useFetch(url)
  return (
    <div>
        <h1>Champions</h1>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        <ul className="champions">
            {items && items.map(item => (
                <li key={item.id} className="links-home">
                    <h2>{item.name}</h2>
                    <p>{item.role}</p>
                    <p>{item.class}</p>
                    {/*4 - rota diâmica*/}
                    <Link to={`/champions/${item.id}`}>Lore</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Home