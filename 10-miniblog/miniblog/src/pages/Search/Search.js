import React from 'react'
import Box from '@mui/material/Box'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

import PostDetail from '../../components/PostDetail'
import { Link } from 'react-router-dom'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("posts", search)
  return (
    <div>
      <h2>Search</h2>
      <Box sx={{textAlign: "center"}}>
        {posts && posts.length == 0 && (
          <Box>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className='btn btn-dark'>Voltar</Link>
          </Box>
        )}
        <div className='search-container'>
          {posts && posts.map((post) => (
            <PostDetail key={post.id} post={post} />
          ))}
        </div>
      </Box>
    </div>
  )
}

export default Search