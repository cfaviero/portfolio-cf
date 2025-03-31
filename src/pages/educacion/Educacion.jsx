import educacion from '../../data/educacion.json'
import '../educacion/Educacion.css'

function Educacion() {


  return(
  <div className='educaciones'>
    {educacion.map((edu) => {
      return(
        <>
        <div className='educacion'>
          <div>
            <h2 key={edu.id}>{edu.nombre}</h2>
            <p className='lugarEdu'>{edu.lugar}</p>
          </div>
          <p className='fechaEdu'>{edu.fecha}</p>
        </div>
        {edu.id < educacion.length ? <hr style={{width:"100%"}}/> : <></> }
        </>
      )
    })}
  </div>);

}

export default Educacion