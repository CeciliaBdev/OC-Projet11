import NavBar from './Navbar'
import Dropdown from './Dropdown'

import '../styles/About.css'

function About() {
  const values = [
    {
      id: 1,
      title: 'Fiabilité',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes',
    },
    {
      id: 2,
      title: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exlusion de notre plateforme.',
    },
    {
      id: 3,
      title: 'Service',
      text: 'Nos équipes se tiennet à votre disposition pour vous fournir une expérience parfaite. N hésitez pas à nous contacter si vous avez la moindre question.',
    },
    {
      id: 4,
      title: 'Sécurité',
      text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les stadards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. ',
    },
  ]
  // console.log(values)

  return (
    <div className="container-about">
      <NavBar />
      <div className="about-bg"></div>
      <div>
        {/* <Dropdown /> */}
        {values.map((dropdown) => {
          return <Dropdown key={dropdown.id} {...dropdown} />
        })}
      </div>
    </div>
  )
}

export default About
