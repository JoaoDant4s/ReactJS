import { NavLink } from "react-router-dom"
import './NavBar.css'
const Navbar = () => {
  return (
    <nav>
        <h1>Context API</h1>
        <div className="container-links">
          {/* <Link to="/">Home</Link>
          <Link to="/About">About</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Products">Products</NavLink>
        </div>
    </nav>
  )
}

export default Navbar