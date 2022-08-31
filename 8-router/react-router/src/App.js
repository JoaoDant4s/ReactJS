import './App.css';
// 1 - react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Champions from "./pages/Champions"
//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4- rota dinâmica*/}
          <Route path="/champions/:id" element={<Champions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
