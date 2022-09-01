import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <h1>React router</h1>
        <div className="container-links">
          {/* <Link to="/">Home</Link>
          <Link to="/About">About</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
        </div>
    </nav>
  )
}

export default Navbar