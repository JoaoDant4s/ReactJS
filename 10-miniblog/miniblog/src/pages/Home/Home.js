import styles from "./Home.module.css"

import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { Box } from '@mui/system'
import { Button, Typography } from "@mui/material"

// components


const Home = () => {
  const [query, setQuery] = useState("")
  const [posts, setPosts] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()

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
        <Typography variant="h4">Posts...</Typography>
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
      </Box>
    </div>
  )
}

export default Home