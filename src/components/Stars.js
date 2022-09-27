import EtoileRemplie from '../assets/etoile-remplie.svg'
import EtoileVide from '../assets/etoile-vide.svg'

function Stars({ rating }) {
  // tableau de 5 élèments vides
  const tabStars = []
  // mes images d'étoiles
  const etoileRemplie = <img src={EtoileRemplie} alt="" />
  const etoileVide = <img src={EtoileVide} alt="" />
  // au max 5 étoiles
  const starMax = 5

  // je boucle sur mes 5 etoiles au max
  // si min index est inférieur au rating : je remplie d'étoiles pleines
  // si index sup au rating ? je cimplète par des étoiles vides
  for (let i = 0; i < starMax; i++) {
    i < rating ? tabStars.push(etoileRemplie) : tabStars.push(etoileVide)
  }

  return (
    <ul>
      {/* j'affiche tous les élèments de mon tableau tabStars en liste <li> */}
      {tabStars.map((etoile, index) => (
        <li key={index}>{etoile}</li>
      ))}
    </ul>
  )
}

export default Stars
