import '../styles/Card.css'

function Card(card) {
  return (
    <div className="card">
      <img src={card.cover} alt="" />
      <p>{card.title}</p>
    </div>
  )
}

export default Card
