import './Register.css'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'; // Grid version 1
import { Button } from '@mui/material';

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <Grid container justifyContent="center" className='form-container'>
            <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{width: "60%"}}
            >
                <Grid container flexDirection="column" rowSpacing={4}>
                    <Grid item>
                        <TextField
                        required
                        id="outlined-required"
                        label="Nome"
                        type="text"
                        sx={{width: "100%"}}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        required
                        id="outlined-required"
                        label="E-mail"
                        type="email"
                        sx={{width: "100%"}}
                        />
                    </Grid >
                    <Grid item>
                        <TextField
                        required
                        id="outlined-required"
                        label="Senha"
                        type="password"
                        sx={{width: "100%"}}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        required
                        id="outlined-required"
                        label="Confirmar senha"
                        type="password"
                        sx={{width: "100%"}}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" type="submit">Cadastrar</Button>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </div>
  )
}

export default Register