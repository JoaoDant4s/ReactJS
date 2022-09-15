import { useState } from 'react'
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Modal, TextField, Typography } from '@mui/material'
import './Dashboard.css' 
import { Box } from '@mui/system'
const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [title, setTitle] = useState("")
  const [urlImage, setUrlImage] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(null)
  // const handleVisible = () => {
  //   setIsModalVisible(true)
  // }
  const handleSubmit = (e) => {
    e.prevent.default()
  }

  return (
    <div>
      <Button variant="outlined" onClick={ () => setIsModalVisible(true) }>Open Modal</Button>
      {isModalVisible ?
        <Modal
          open={isModalVisible}
          onClose={ () => setIsModalVisible(false)}
          className="dialog-post"
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className='dialog-content'>
            <Box className="box-content">
              <Box className='dialog-title'>
                <Typography variant="h4" id="modal-modal-title">Criar Post</Typography>
                <Typography id="modal-modal-description" sx={{marginBottom: "30px"}}>
                  Escreva sobre o que quiser e compartilhe o seu conhecimento
                </Typography>
              </Box>
              <Box className="box-justify-form">
                <Grid
                  container
                  item
                  xs={12}
                  sm={9}
                  md={10}
                  flexDirection="column"
                  rowSpacing={3}
                  className="grid-tf"
                >
                  <Grid item>
                    <h5>Título:</h5>
                    <TextField
                      required
                      id="standard-required1"
                      placeholder="Pense num bom título..."
                      type="text"
                      variant="standard"
                      sx={{width: "100%"}}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                  <h5>URL da imagem:</h5>
                    <TextField
                      required
                      id="standard-required2"
                      placeholder="Insira uma imagem"
                      type="text"
                      variant="standard"
                      sx={{width: "100%"}}
                      value={urlImage}
                      onChange={(e) => setUrlImage(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                  <h5>Conteúdo:</h5>
                    <TextField
                      required
                      id="standard-multiline-static"
                      placeholder="Insira o conteúdo do post"
                      multiline
                      variant="standard"
                      sx={{width: "100%"}}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                  <h5>Tags:</h5>
                    <TextField
                      required
                      id="standard-required4"
                      placeholder="Insira tags separadas por vírgula"
                      type="text"
                      variant="standard"
                      sx={{width: "100%"}}
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Grid container justifyContent="end" className='button-container'>
                <Button
                  sx={{marginRight: "15px", paddingLeft: "10px"}}
                  variant="outlined"
                  onClick={ () => setIsModalVisible(false) }
                  className='button-close'
                >
                  VOLTAR
                </Button>
                {!loading && <Button
                                variant="contained"
                                type="submit"
                                className='button-submit'
                              >
                                Cadastrar
                              </Button>}
                {loading && <Button
                              variant="contained"
                              type="submit"
                              className='button-submit'
                              disabled
                            >
                              Aguarde...
                            </Button>}
                {error && <p className="error">{error}</p>}
              </Grid>
            </Box>
          </Box>        
        </Modal> 
      : null}
    </div>
  )
}

export default Dashboard