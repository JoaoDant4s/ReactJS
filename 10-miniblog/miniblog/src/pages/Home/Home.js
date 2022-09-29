import styles from "./Home.module.css"

import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { Box } from '@mui/system'
import { Button } from "@mui/material"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import PostDetail from "../../components/PostDetail"

// components

const Home = () => {
  const [query, setQuery] = useState("")
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(query)
    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }
  return (
    <div className={styles.home}>
      <h2>Veja os posts mais recentes</h2>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input 
          type="text" 
          placeholder="Busque por tags..." 
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <Box>
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Nenhum post encontrado</p>
            <Link to="/dashboard">
              <Button
                variant="contained"
              >
                Criar primeiro post
              </Button>
            </Link>
          </div>
        )}
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
      </Box>
    </div>
  )
}

export default Home