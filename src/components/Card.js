import '../styles/Card.css'
import { Link } from 'react-router-dom'

function Card(card) {
  return (
    <div className="card">
      <Link to={`/PageLogement/${card.id}`} key={card.id}>
        <img src={card.cover} alt={card.title} className="image" />
      </Link>
      <p>{card.title}</p>
    </div>
  )
}

export default Card
