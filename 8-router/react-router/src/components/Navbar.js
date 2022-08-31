import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <h1>React router</h1>
        <div className="container-links">
          <Link to="/"> Home</Link>
          <Link to="/About">About</Link>
        </div>
    </nav>
  )
}

export default Navbar