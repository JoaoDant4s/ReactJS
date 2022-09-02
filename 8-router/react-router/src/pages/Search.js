import React from 'react'
import "./Search.css"
import {useSearchParams, Link} from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {

    const [searchParams] = useSearchParams()

    const link_url = "http://localhost:3000/champions?" + searchParams;

    const {data: items, loading, error} = useFetch(link_url)

  return (
    <div className="container-content">
        <h1>Resultados disponiveis</h1>
        <ul className="champions">
            {error && <p>{error}</p>}
            {loading}
            {items && items.map(item => (
                <li key={item.id}
                className="links-home"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0, .8), rgba(87, 84, 84, 0.7)), url(${item.image})`
                }}>
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.role}</p>
                        <p>{item.class}</p>
                        <Link to={`/champions/${item.id}`}>Lore</Link>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Search