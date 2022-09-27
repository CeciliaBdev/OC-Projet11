import { useParams } from 'react-router-dom'
import Locations from '../datas/locations.json'
import Tag from '../components/Tags'
import Dropdown from '../components/Dropdown'
// import Stars from '../components/Stars'
// import Error from '../Pages/Error'
// import Lightbox from '../components/Lightbox'
import '../styles/PageLogement.css'

function PageLogement() {
  let { id } = useParams()
  const logement = Locations.find((item) => item.id === id)

  const Prev = () => {
    console.log('click precedent')
  }
  const Suiv = () => {
    console.log('click suivant')
  }

  return (
    <div className="container-logement">
      <div className="lightbox-img">
        <i
          className="fas fa-chevron-left boutonPrev"
          onClick={() => {
            Prev()
          }}
        ></i>
        <img src={logement.pictures[0]} alt="" />
        <i
          className="fas fa-chevron-right boutonSuiv"
          onClick={() => {
            Suiv()
          }}
        ></i>
      </div>

      <div className="container-infos">
        {/* infos */}
        <div className="Infos">
          <h2>{logement.title}</h2>
          <h3>{logement.location}</h3>
          {logement.tags.map((tag) => (
            <Tag tagsNom={tag} key={tag} />
          ))}
        </div>

        <div className="container-host">
          {/* host */}
          <div className="name">
            <div>
              <p>{logement.host.name.split(' ')[0]}</p>

              <p>{logement.host.name.split(' ')[1]}</p>
            </div>
          </div>
          <div className="profil">
            <img src={logement.host.picture} alt="" />
          </div>
        </div>
        {/* {logement.rating} */}
      </div>
      {/* drops */}
      <div className="dropdown">
        <div className="dropDescription">
          <Dropdown title="Description" text={logement.description} />
        </div>
        <div className="dropEquipement">
          <Dropdown title="Equipements" text={logement.equipments} />
        </div>
      </div>
    </div>
  )
}

export default PageLogement
