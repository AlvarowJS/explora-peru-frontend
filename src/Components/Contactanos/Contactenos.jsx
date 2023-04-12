import React from 'react'
import './Contactenos.css'
const Contactenos = () => {
    return (
        <div className='contacto'>
            <div>
                <p> Planea tu viaje con nosotros </p>
                <h2>Contáctanos</h2>
                <div className='contacto__datos'>
                    <div>
                        <label htmlFor=""> Nombre: </label>
                        <input className='contacto__datos--input' type="text" />
                    </div>
                    <div>
                        <label htmlFor=""> Email: </label>
                        <input className='contacto__datos--input' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Celular: </label>
                        <input className='contacto__datos--input' type="text" />
                    </div>
                </div>
                <div className=''>
                    <div className='contacto__datos--caja'>
                        <label htmlFor=""> Mensaje:</label>
                        <textarea className='contacto__datos--mensaje' type="text" />
                    </div>
                </div>
                <button className='contacto__datos--boton'>Enviar</button>
            </div>
        </div>
    )
}

export default Contactenos