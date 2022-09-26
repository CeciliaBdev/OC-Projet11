import { useParams } from 'react-router-dom'
import Locations from '../datas/locations.json'
import Error from './Error'

function PageLogement() {
  let { id } = useParams()

  return <div>Test {id}</div>
}

export default PageLogement
