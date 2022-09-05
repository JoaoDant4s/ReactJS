import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<Products />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
