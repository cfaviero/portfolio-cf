import './App.css'
import Footer from './components/footer/Footer'
import Principal from './pages/principal/Principal'
import Nav from './components/header/Nav'
import { Route, Routes } from 'react-router-dom'
import Experiencia from './pages/experiencia/Experiencia'
import Contacto from './pages/contacto/Contacto'
import Educacion from './pages/educacion/Educacion'
import Proyectos from './pages/proyectos/Proyectos'

function App() {

  return (
    <div className='contenedorPagina'>
      <Nav />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
