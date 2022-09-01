import './App.css';
// 1 - react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Champions from "./pages/Champions"
import Skins from "./pages/Skins"
import NotFound from './pages/NotFound';
import Search from './pages/Search';
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4- rota dinâmica*/}
          <Route path="/champions/:id" element={<Champions />} />
          {/* 5- nested routes */}
          <Route path="/champions/:id/skins" element={<Skins />} />
          {/* 9 - search */}
          <Route path="/search" element={<Search />} />
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;