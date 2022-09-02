import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./SearchForm.css"
const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Entrou no evento")
        navigate("/search?q=" + query);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input className="search" type="text" onChange={(e) => setQuery(e.target.value)}/>
        <input className="button" type="submit" value="Buscar"/>
    </form>
  )
}

export default SearchForm