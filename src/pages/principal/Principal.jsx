import '../principal/Principal.css'
import Habilidades from './Habilidades';

function Principal() {

  

  return(
      <div className='principal'>
        <h1>Cristian Maximiliano Faviero</h1>
        <p className='sub'>Informático y FullStack Dev</p>
        <p className='intro'>Full Stack con más de 2 años de experiencia en proyectos personales. Estoy en búsqueda de una oportunidad para obtener mi primera experiencia laboral y poner en práctica mis conocimientos y crecer profesionalmente. Soy una persona autodidacta, altamente motivada y con ganas de aplicar mis conocimientos en un entorno profesional.</p>
        <div className='habilidades'>
          <Habilidades />
        </div>
        
      </div>
  );
}

export default Principal