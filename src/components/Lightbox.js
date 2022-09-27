import '../styles/Lightbox.css'
import { useState } from 'react'

function Lightbox({ pictures }) {
  const [index, updateIndex] = useState(0)
  console.log(pictures)
  const Prev = () => {
    console.log('click precedent')
    // si index => 1er element
    // revient à la derniere photo
    // sinon photo precedente
    index === 0 ? updateIndex(pictures.length - 1) : updateIndex(index - 1)
  }
  const Suiv = () => {
    // console.log('click suivant')
    // si index => dernier element
    // reviennt à la premier photo
    // sinon photo suivante
    index === pictures.length - 1 ? updateIndex(0) : updateIndex(index + 1)
  }
  return (
    <div>
      <div className="lightbox-img">
        <i
          className="fas fa-chevron-left boutonPrev"
          onClick={() => {
            Prev()
          }}
        ></i>
        <img src={pictures[index]} alt="" />
        <i
          className="fas fa-chevron-right boutonSuiv"
          onClick={() => {
            Suiv()
          }}
        ></i>
      </div>
    </div>
  )
}

export default Lightbox
