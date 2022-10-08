import { useContext, useEffect, useState } from 'react'
import { Button, Grid, Modal, TextField, Typography } from '@mui/material'
import './Dashboard.css' 
import { Link, useNavigate } from "react-router-dom";
import PostModal from '../../components/PostModal'
import { Box } from '@mui/material'
import { Query } from 'appwrite'
import { client, databases } from '../../appwrite/appwriteConfig'
import { AuthContextUser } from '../../context/AuthContextUser';
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal';

const Dashboard = () => {
  const { userAuth } = useContext(AuthContextUser)
  const [ ownPosts, setOwnPosts ] = useState([])

  const fetchDocuments = () => {
    databases.listDocuments(
      "brincouCom",
      "aBrincadeira",
      [
        Query.equal('createdBy', [`${userAuth.name}`]),
        Query.orderDesc('$createdAt')
      ]
    ).then((res) => {
      setOwnPosts(res.documents)
    }, (err) => {
      console.log(err)
    })
  }

  const unsubscribe = client.subscribe('databases.brincouCom.collections.aBrincadeira.documents', () => {
    fetchDocuments();

  })

  useEffect(() => {
    fetchDocuments();

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <Box className='dashboard-container'>
      <h2>Dashboard</h2>
      <Typography className='subtitle'>Gerencie ou crie os seus posts</Typography>
      {ownPosts && ownPosts.length === 0 ? (
        <Box>
          <Typography variant="subtitle1">
            Não foram econtrados posts
          </Typography>
        </Box>
      ) : (
        <Grid container justifyContent="center" className="list-container">
          <Grid container item md={8} sm={10}>
            <Grid container item justifyContent="space-around" flexDirection="row">
              <Typography variant='h6'>Título</Typography>
              <Typography variant='h6'>Ações</Typography>
            </Grid>
            <Grid container item justifyContent="center" flexDirection="column">
              <div className="post_row"></div>
              {ownPosts && ownPosts.map((post) => (
                <Grid container item justifyContent="center" alignItems="center" mt={2}>
                  <Grid container item md={6} className="grid-title">
                    <Typography variant="h5" key={post.content}>
                      {post.Title}
                    </Typography>
                  </Grid>
                  <Grid container item md={6} justifyContent="center" className="grid-buttons">
                    <Link to={`/posts/${post.$id}`} className="btn btn-outline">
                      Ver
                    </Link>
                    <Link to={`/posts/${post.$id}`} className="btn btn-outline">
                      Editar
                    </Link>
                    <DeleteConfirmationModal document={post.$id} />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
      <PostModal />
    </Box>
  )
}

export default Dashboard