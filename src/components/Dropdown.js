import '../styles/Dropdown.css'
import { useState } from 'react'

function Dropdown({ title, text }) {
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
  // function listEquipment(tab) {
  //   return (
  //     <ul>
  //       {tab.map((item) => {
  //         ;<li>{item}</li>
  //       })}
  //     </ul>
  //   )
  // }

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
          //   onClick={() => Rotate()}
          className="fas fa-chevron-down"
        ></i>
      </div>
      <div style={{ display: display }}>
        <div className="text-dropdown">
          {/* <p>{drop.text}</p> */}
          {/* condition text si un objet => fonction listEquipment sinon texte classique*/}
          {/* {typeof text === 'object' ? listEquipment(text) : <p>{text}</p>} */}
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
export default Dropdown
