import '../styles/Collapse.css'
import { useState } from 'react'

function Collapse({ title, text }) {
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
        {title}
        <i
          style={{ transform: rotateChevron }}
          className="fas fa-chevron-down"
        ></i>
      </div>
      <div style={{ display: display }}>
        <div className="text-dropdown">
          {/* condition mise en forme du dropdown */}
          {typeof text === 'string' ? (
            <p>{text}</p>
          ) : (
            <ul>
              {text.map((item) => {
                return <li key={item}>{item}</li>
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
export default Collapse
