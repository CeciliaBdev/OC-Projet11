import '../styles/Home.css'
import Locations from '../datas/locations.json'
import Card from '../components/Card'

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
            // console.log(location.id)
            return (
              <Card
                cover={location.cover}
                title={location.title}
                id={location.id}
                key={location.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
