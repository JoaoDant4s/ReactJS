import styles from "./Home.module.css"

import { useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box } from '@mui/system'
import { Button } from "@mui/material"
import PostDetail from "../../components/PostDetail"
import { client, databases } from "../../appwrite/appwriteConfig"

// components

const Home = () => {
  const [query, setQuery] = useState("")
  const [posts, setPosts] = useState([]);
  let loading;
  const navigate = useNavigate()

  useEffect(() => {
    databases.listDocuments(
      "633c0934d08e3e66ebc0",
      "633c09d9994b86cae7fa"
    ).then((res) => {
      console.log("deu certo3")
      setPosts(res.documents.reverse());
      console.log(posts)
    }, (err) => {
      console.log(err)
    })
  }, [])

  client.subscribe('databases.633c0934d08e3e66ebc0.collections.633c09d9994b86cae7fa.documents', response => {
    databases.listDocuments(
      "633c0934d08e3e66ebc0",
      "633c09d9994b86cae7fa"
    ).then((res) => {
      setPosts(res.documents.reverse());
      console.log(posts)
    }, (err) => {
      console.log(err)
    })
    console.log(response)
  })

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
          <PostDetail key={post.$id} post={post} />
        ))}
      </Box>
    </div>
  )
}

export default Home