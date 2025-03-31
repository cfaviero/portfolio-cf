import '../experiencia/Experiencia.css'
import experiencias from '../../data/experiencia.json'

function Experiencia() {
  return(
        <div className='experiencias'>
          {experiencias.map((exp) => {
            return(
              <>
                <div key={exp.id} className='experiencia'>
                  <div>
                    <h2>{exp.nombre}</h2>
                    <p className='lugarExp'>{exp.lugar}</p>
                    <ul className='observaciones' key={exp.id}>
                      {exp.observaciones.map((ob) => <li className='detalle'>{ob}</li>)}
                    </ul>
                  </div>
                  <p className='fechaExp'>{exp.fecha}</p>
                </div>
                {exp.id < experiencias.length ? <hr style={{width:"100%"}}/> : <></> }
              </>
            )
          })}
        </div>
  )

}

export default Experiencia