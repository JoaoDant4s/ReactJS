import { useState } from 'react'
import { Button, Grid, Modal, TextField, Typography } from '@mui/material'
import './Dashboard.css' 
import { Box } from '@mui/system'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useAuthValue } from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import PostModal from '../../components/PostModal'

const Dashboard = () => {
  
  return (
    <div>
      <PostModal />
    </div>
  )
}

export default Dashboard