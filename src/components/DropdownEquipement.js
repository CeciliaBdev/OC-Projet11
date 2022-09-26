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
  const [rotateChevron, setRotateChevron] = useState('rotate(0)')
  function Rotate() {
    if (rotateChevron === 'rotate(0)') {
      setRotateChevron('rotate(180deg)')
    } else {
      setRotateChevron('rotate(0)')
    }
  }

  return (
    <div className="container-drop">
      <div
        onClick={() => {
          handleClick()
          Rotate()
        }}
        className="dropdown-menu"
      >
        Equipements
        <i
          style={{ transform: rotateChevron }}
          //   onClick={() => Rotate()}
          className="fas fa-chevron-down"
        ></i>
      </div>
      <div style={{ display: display }}>
        <div className="text-dropdown">
          <ul>
            {drop.equipments.map((equip) => {
              return <li>{equip}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Dropdown
