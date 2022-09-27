function Lightbox({ pictures }) {
  const Prev = () => {
    console.log('click precedent')
  }
  const Suiv = () => {
    console.log('click suivant')
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
        <img src={pictures[0]} alt="" />
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
