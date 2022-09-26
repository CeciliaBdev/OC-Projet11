import { useParams } from 'react-router-dom'
import Locations from '../datas/locations.json'
import Error from '../Pages/Error'
import Lightbox from '../components/Lightbox'
import '../styles/PageLogement.css'

function PageLogement() {
  let { id } = useParams()
  const logement = Locations.find((item) => item.id === id)

  return (
    <div className="container-logement">
      <img src={logement.pictures[0]} alt="" />
      <h2>{logement.title}</h2>
      <h3>{logement.location}</h3>
      <p>{logement.tags}</p>
    </div>
  )
}

export default PageLogement
