import { useParams } from 'react-router-dom'
import Locations from '../datas/locations.json'
import Tag from '../components/Tags'
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
      <Tag />
    </div>
  )
}

export default PageLogement
