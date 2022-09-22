import '../styles/Footer.css'
import logo from '../assets/logo.svg'

function Footer() {
  return (
    <div className="kasa-footer">
      <img src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
