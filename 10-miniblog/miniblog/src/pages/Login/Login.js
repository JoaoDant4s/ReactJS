
import './Login.css'
import { useState, useContext } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'; // Grid version 1
import { Button, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { account } from '../../appwrite/appwriteConfig';
import { useNavigate } from "react-router-dom"
import { AuthContextUser } from "../../context/AuthContextUser"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(null)
    const [values, setValues] = useState({
        passwordToShow: "",
        showPassword: false
    })
    const { userAuth, setUserAuth } = useContext(AuthContextUser)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      setError("")

      account.createEmailSession(email, password)
      .then(() => {
        console.log("alo1")
        setUserAuth(true)
        console.log(userAuth)
        navigate("/")
      }, (error) => {
        console.log(error)
        console.log("Deu bigode ao logar, chefia")
      })
     
      console.log("abuble")
      setLoading(false);
    }

    // useEffect(() => {

    //     if(authError){
    //         setError(authError)
    //     }

    // }, [authError]);

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  return (
    <div className="content-login">
      <h1>Entrar</h1>
      <p>Faça login para utilizar o sistema</p>
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
                        label="E-mail"
                        type="email"
                        variant="standard"
                        sx={{width: "100%"}}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid >
                  <Grid item>
                      <TextField
                      required
                      id="standard-required3"
                      autoComplete='password'
                      label="Senha"
                      type={values.showPassword ? 'text' : 'password'}
                      variant="standard"
                      sx={{width: "100%"}}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      InputProps={{
                          endAdornment:(
                              <InputAdornment position="end">
                                  <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  >
                                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                              </InputAdornment>
                          ),
                        }}
                      />
                  </Grid>                   
                    <Grid item>
                        {!loading && <Button variant="outlined" type="submit">Entrar</Button>}
                        {loading && <Button variant="outlined" type="submit" disabled>Aguarde...</Button>}
                        {error && <p className="error">{error}</p>}
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </div>
  )
}

export default Login