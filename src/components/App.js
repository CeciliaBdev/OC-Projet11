import '../styles/App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import NavBar from './Navbar'
import Footer from './Footer'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Error from '../Pages/Error'
import PageLogement from '../Pages/PageLogement'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/PageLogement/:id" element={<PageLogement />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
