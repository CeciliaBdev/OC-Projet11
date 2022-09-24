import '../styles/Dropdown.css'
import { useState } from 'react'

function Dropdown(drop) {
  const [display, setDisplay] = useState('none')
  function handleClick() {
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }
  return (
    <div className="container-drop">
      <div onClick={() => handleClick()} className="dropdown-menu">
        <p>{drop.title}</p> <i className="fas fa-chevron-down"></i>
      </div>
      <div style={{ display: display }}>
        <div className="text-dropdown">
          <p>{drop.text}</p>
        </div>
      </div>
    </div>
  )
}
export default Dropdown
