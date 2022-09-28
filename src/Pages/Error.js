import '../styles/Error.css'
import { Link } from 'react-router-dom'
import NavBar from '../components/Navbar'

function Error() {
  return (
    <div className="error">
      <NavBar />
      <p className="number">404</p>
      <p className="texte"> Oups ! La page que vous demandez n'existe pas</p>
      <nav className="navError">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </nav>
    </div>
  )
}

export default Error
