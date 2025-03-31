import { Link } from 'react-router-dom';
import '../header/Header.css'
import ModoOscuro from '../ModoOscuro';

function Nav() {
    return(
    <>
    <nav>
      <ul>
        <div className='grupo-nav'>
          <li className='nav-button'><Link to="/">CMF</Link></li>
          <div className='iconos-modo'>
            <ModoOscuro />
          </div>
        </div>
        <li className='nav-button'><Link to="/educacion">Educacion</Link></li>
        <li className='nav-button'><Link to="/experiencia">Experiencia</Link></li>
        <li className='nav-button'><Link to="/proyectos">Proyectos</Link></li>
        <li className='nav-button'><Link to="/contacto">Contacto</Link></li>
      </ul>
      <hr className='separadorNav'/>
    </nav>
    </>
    )
  }
  
  export default Nav;