import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function NavBar() {
  return (
    <div>
      {/* liens de navigation */}
      <nav className="navbar">
        <Link to="/" className="accueil">
          Accueil
        </Link>
        <Link to="/About" className="about">
          A propos
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
