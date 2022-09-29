import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { AuthProvider } from './context/AuthContext';

import { onAuthStateChanged } from "firebase/auth"

//hooks
import { useState, useEffect, useContext} from "react"
import { useAuthentication } from "./hooks/useAuthentication"
import Search from './pages/Search/Search';
import SinglePost from './pages/SinglePost/SinglePost';



function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if(loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <NavBar />
            <Routes className="rotas">
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<SinglePost />} />
              <Route 
                path="/login" 
                element={!user ? <Login /> : <Navigate to="/"/>} 
              />
              <Route 
                path="/register" 
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route 
                path="/dashboard" 
                element={user ? <Dashboard /> : <Navigate to="/login" />} 
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
