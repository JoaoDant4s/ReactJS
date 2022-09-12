//2 - links com react router
import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import SearchForm from '../components/SearchForm';
import "./Home.css"
const Home = () => {
    //3- carregamento de dados
    const link_url = "http://localhost:3000/champions"

    const {data: items, loading, error} = useFetch(link_url)
  return (
    <div className="container-content">
        <SearchForm />
        <h1>Champions</h1>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        <ul className="champions">
            {items && items.map(item => (
                <li key={item.id}
                className="links-home"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0, .8), rgba(87, 84, 84, 0.7)), url(${item.image})`,
                }}>
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.role}</p>
                        <p>{item.class}</p>
                        {/*4 - rota diâmica*/}
                        <Link to={`/champions/${item.id}`}>Lore</Link>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Home