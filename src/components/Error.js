import '../styles/Error.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'

function Error() {
  return (
    <div className="error">
      <p className="number">404</p>
      <p className="texte"> Oups ! La page que vous demandez n'existe pas</p>
      <nav className="navError">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default Error
