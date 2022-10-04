import { useContext, useState } from 'react'
import { Button, Grid, Modal, TextField, Typography } from '@mui/material'
import './PostModal.css' 
import { Box } from '@mui/system'
import { useInsertDocument } from '../hooks/useInsertDocument'
import { useAuthValue } from '../context/AuthContext'
import { databases } from '../appwrite/appwriteConfig'
import { ID } from 'appwrite'
import { AuthContextUser } from '../context/AuthContextUser'

const PostModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [title, setTitle] = useState("")
  const [urlImage, setUrlImage] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const {insertDocument, response} = useInsertDocument("posts")
  const [isValidImage, setIsValidImage] = useState(false)
  const { userAuth } = useContext(AuthContextUser)

  const clearState = () => {
    setIsModalVisible(false); 
    setSuccess(false);
    setError("")
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let failed = false
    //validate image URL
    try {
      new URL(urlImage);
    } catch (error) {

      failed = true
      setError("A imagem precisa ser uma URL.");
      setUrlImage("")
    }
    //criar array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())
    //checar todos os valores
    console.log(isValidImage)
    if(!title || !urlImage || !tags || !content){
      setError("Por favor, preencha todos os campos.")
    }
    //console.log(isValidImage)
    console.log("failed: " + failed)
    if(!failed){
      setError("")

      databases.createDocument(
        "633c0934d08e3e66ebc0",
        "633c09d9994b86cae7fa",
        ID.unique(),
        {
          Title: title,
          urlImage,
          content,
          tagsArray,
          userID: userAuth.$id,
          createdBy: userAuth.name
        }
      ).then((response) => {
        setTitle("")
        setUrlImage("")
        setContent("")
        setTags([])
        //navigate("/")
        setSuccess(true)
        setIsValidImage(false)
      }).catch((error) => {
        setError("Erro ao cadastrar informações...")
        console.log(error)
      })
    }
  }
  return (
    <div>
      <Button variant="contained" onClick={ () => setIsModalVisible(true) }>Criar post</Button>
      {isModalVisible ?
        <Modal
          open={isModalVisible}
          onClose={clearState}
          className="dialog-post"
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className='dialog-content'>
            <Box 
              className="box-content"
              component="form"
              validate="true"
              autoComplete='off'
              onSubmit={handleSubmit}
            >
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
                      placeholder="Insira a URL de uma imagem"
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
                    {(response.error || formError) && (
                        <p className="error">{response.error || formError}</p>
                    )}
                    {(!response.loading && success) && (
                        <p className='success'>Post cadastrado com sucesso</p>
                    )}
                  </Grid>
                </Grid>
              </Box>
              <Grid container justifyContent="end" className='button-container'>
                <Button
                  sx={{marginRight: "15px", paddingLeft: "10px"}}
                  variant="outlined"
                  onClick={clearState}
                  className='button-close'
                >
                  VOLTAR
                </Button>
                {!response.loading && <Button
                                variant="contained"
                                type="submit"
                                className='button-submit'
                              >
                                Cadastrar
                              </Button>}
                {response.loading && <Button
                              variant="contained"
                              type="submit"
                              className='button-submit'
                              disabled
                            >
                              Aguarde...
                            </Button>}
                {response.error && <p className="error">{response.error}</p>}
              </Grid>
            </Box>
          </Box>        
        </Modal> 
      : null}
    </div>
  )
}

export default PostModal