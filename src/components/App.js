import '../styles/App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import NavBar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Error from './Error'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
