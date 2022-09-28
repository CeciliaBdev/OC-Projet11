import logo from '../assets/logo.png'
import '../styles/Header.css'
import NavBar from './Navbar'

function Header() {
  return (
    <div className="Head">
      <div className="kasa-banner">
        <img src={logo} alt="logo kasa" />
      </div>
      <NavBar />
    </div>
  )
}

export default Header
