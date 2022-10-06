import { useParams, Navigate } from 'react-router-dom'
import Locations from '../datas/locations.json'
import Footer from '../components/Footer'
import Tag from '../components/Tags'
import Dropdown from '../components/Dropdown'
import Stars from '../components/Stars'
import Lightbox from '../components/Lightbox'
import '../styles/PageLogement.css'

function PageLogement() {
  let { id } = useParams()
  const logement = Locations.find((item) => item.id === id)

  // redirection page erreur
  if (logement === undefined) {
    // console.log('erreur')
    return <Navigate to="/Error" />
  } else
    return (
      <div className="main">
        <div className="container-logement">
          <Lightbox pictures={logement.pictures} />

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
              <div className="bloc-profil">
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
              <div className="container-stars">
                <Stars rating={logement.rating} />
              </div>
            </div>
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
      </div>
    )
}

export default PageLogement
