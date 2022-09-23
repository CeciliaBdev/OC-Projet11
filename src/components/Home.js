import '../styles/Home.css'
import Locations from '../datas/locations.json'
import Card from './Card'

function Home() {
  // console.log(Locations)
  return (
    <div>
      <div className="img-banner">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="container_locations">
        <div className="container_card">
          {Locations.map((location) => {
            return <Card cover={location.cover} title={location.title} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
