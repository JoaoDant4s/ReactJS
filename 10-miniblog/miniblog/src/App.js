import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer';
import Button from '@mui/material/Button';
import NewPost from './pages/NewPost/NewPost';
import Dashboard from './pages/Dashboard/Dashboard';
import Exit from './pages/Exit/Exit';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes className="rotas">
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/*<Route path="/new-post" element={<NewPost />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/exit" element={<Exit />} />*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div className="margin-bottom"></div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
