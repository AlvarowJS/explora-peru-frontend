import React from 'react'
import './Contactenos.css'
const Contactenos = ({ idioma, idiomaGlobal }) => {
  console.log(idiomaGlobal, 'global')
  return (
    <div className='sobrenosotros__contacto'>
      <div className='sobrenosotros__contacto--form'>
        <h2>
          {idioma == 'spanish' || idiomaGlobal == 'spanish' ? 'Contáctanos' : 'About us'}

        </h2>
        <b>
          {
            idioma == 'spanish' || idiomaGlobal == 'spanish' ? '¿Estas interesado en nuestros servicios? Escribenos' : 'Are you interested in our service? Let us know'
          }


        </b>
        <div className='sobrenosotros__contacto--input'>
          <label>
            {idioma == 'spanish' || idiomaGlobal == 'spanish' ?
              'Nombres :' : 'Name :'}
          </label>
          <input type="text" />
        </div>
        <div className='sobrenosotros__contacto--input'>
          <label>
            Email :
          </label>
          <input type="text" />
        </div>
        <div className='sobrenosotros__contacto--input'>
          <label>
            {idioma == 'spanish' || idiomaGlobal == 'spanish' ?
              'Celular :' : 'Phone :'}
          </label>
          <input type="text" />
        </div>
        <div className='sobrenosotros__contacto--input'>
          <label>
            {idioma == 'spanish' || idiomaGlobal == 'spanish' ?
              'Mensaje :' : 'Message :'}
          </label>
          <input type="text" />
        </div>
        <button className='sobrenosotros__contacto--button'>
          {idioma == 'spanish' || idiomaGlobal == 'spanish' ?
            'Enviar' : 'Send'}
        </button>
      </div>
      <div className='sobrenosotros__contacto--info'>
        <div className='sobrenosotros__contacto--dato'>
          <i className='bx bx-time-five'></i>
          <div>
            <p>
              {idioma == 'spanish' || idiomaGlobal == 'spanish' ?
              'lunes a Viernes ' : 'Monday to Friday' }
            </p>
            <p>8:00 am - 6:00 pm</p>
          </div>
        </div>
        <div className='sobrenosotros__contacto--dato'>
          <i className='bx bx-phone-call' ></i>
          <p>+51 999 333 555</p>
        </div>
        <div className='sobrenosotros__contacto--dato'>
          <i className='bx bx-envelope' ></i>
          <p>explora@gmail.com</p>
        </div>
        <div className='sobrenosotros__contacto--dato'>
          <i className='bx bx-map' ></i>
          <p>Lima, Perú</p>
        </div>
      </div>
      {/* <div className='sobrenosotros__contacto--info'>
      <div className='sobrenosotros__contacto--icons'>
        
      </div>
    </div> */}
    </div>
  )
}

export default Contactenos