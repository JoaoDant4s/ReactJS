import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'; // Grid version 1
import { Button, IconButton, InputAdornment } from '@mui/material';

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.prevent.default()
    }
  return (
    <div>
        <h2>Criar post</h2>
        <Grid container justifyContent="center" className='form-container'>
            <Box
            component="form"
            validate="true"
            autoComplete="off"
            sx={{width: "60%"}}
            onSubmit={handleSubmit}
            >
                <Grid container flexDirection="column" rowSpacing={4}>
                    <Grid item>
                        <TextField
                            required
                            id="standard-required2"
                            label="Título:"
                            type="text"
                            variant="standard"
                            sx={{width: "100%"}}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid >
                    <Grid item>
                        <TextField
                            required
                            id="standard-required2"
                            label="URL da imagem:"
                            type="text"
                            variant="standard"
                            sx={{width: "100%"}}
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="standard-required2"
                            label="Conteúdo:"
                            type="text"
                            variant="standard"
                            sx={{width: "100%"}}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="standard-required2"
                            label="Tags:"
                            type="text"
                            variant="standard"
                            sx={{width: "100%"}}
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </Grid>                      
                    <Grid item>
                        {!loading && <Button variant="outlined" type="submit">Criar</Button>}
                        {loading && <Button variant="outlined" type="submit" disabled>Aguarde...</Button>}
                        {error && <p className="error">{error}</p>}
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </div>
  )
}

export default CreatePost