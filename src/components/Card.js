import '../styles/Card.css'

function Card(card) {
  return (
    <div className="card">
      <img src={card.cover} alt="" />
    </div>
  )
}

export default Card
