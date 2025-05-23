
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/HomePage'
import NotFound from './pages/NotFoundPage'
import NavBar from './components/Layout/NavBar'
import Blackholes from './pages/CelestialObjects/Blackholes'
import Supernovas from './pages/CelestialObjects/Supernovas'
import Pluto from './pages/CelestialObjects/Pluto'
import AndromedaGalaxy from './pages/CelestialObjects/AndromedaGalaxy'
import Honeycomb from './pages/CelestialObjects/honeycomb'

function App() {
  
  return (
    <div>
      <NavBar/>
<Routes>
  <Route path='/' element= {<Home/>}/>  
  <Route path='/blackholes' element={<Blackholes/>}/>
  <Route path='/supernovas' element={<Supernovas/>}/>
  <Route path='/pluto' element={<Pluto/>}/>
  <Route path="/honeycomb" element={<Honeycomb />} />
  <Route path='/andromeda-galaxy' element={<AndromedaGalaxy/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>
    </div>
  )
}

export default App
