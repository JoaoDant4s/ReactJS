import { useState } from 'react'
import { Button, Dialog, Grid, Modal } from '@mui/material'
import './Dashboard.css' 
import { Box } from '@mui/system'
const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  // const handleVisible = () => {
  //   setIsModalVisible(true)
  // }
  return (
    <div>
      <Button variant="outlined" onClick={ () => setIsModalVisible(true) }>Open Modal</Button>
      {isModalVisible ?
        <Dialog
          open={isModalVisible}
          onClose={ () => setIsModalVisible(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{backgroundColor: "lightblue", height: "300px"}}>
            <h2>abuble</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis in illum est iusto quis labore deleniti fugiat ipsa, nulla voluptate excepturi quaerat distinctio corporis saepe, eligendi atque amet enim?</p>
            <Button variant="outlined" onClick={ () => setIsModalVisible(false) }>Close Modal</Button>
          </Box>
        </Dialog> 
      : null}
    </div>
  )
}

export default Dashboard