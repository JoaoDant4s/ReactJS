import { useState } from 'react'
import { Button, Grid, Modal, TextField, Typography } from '@mui/material'
import './Dashboard.css' 
import { Box } from '@mui/system'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useAuthValue } from '../../context/AuthContext'
import { Link, useNavigate } from "react-router-dom";
import PostModal from '../../components/PostModal'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  //posts do usuario
  const {documents: posts, loading} = useFetchDocuments("posts", null, uid)

  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>
      <p>Gerencie ou crie os seus posts</p>
      <PostModal />
      {posts && posts.length === 0 ? (
        <Box>
          <p>Não foram econtrados posts</p>
        </Box>
      ) : (
        <Box>
          <p>Tem posts!</p>
        </Box>
      )}

      {posts && posts.map((post) => (
        <h3 key={post.title}>{post.title}</h3>
      ))}
    </div>
  )
}

export default Dashboard