import React from 'react'
import './Contactenos.css'
const Contactenos = () => {
  return (
    <div className='sobrenosotros__contacto'>
      <div className='sobrenosotros__contacto--form'>
        <h2>Contáctanos</h2>
        <b>¿Estas interesado en nuestros servicios? Escribenos</b>
        <div className='sobrenosotros__contacto--input'>
          <label>Nombres</label>
          <input type="text" />
        </div>
        <div className='sobrenosotros__contacto--input'>
          <label>Email</label>
          <input type="text" />
        </div>
        <div className='sobrenosotros__contacto--input'>
          <label>celular</label>
          <input type="text" />
        </div>
        <div className='sobrenosotros__contacto--input'>
          <label>Mensaje</label>
          <input type="text" />
        </div>
        <button className='sobrenosotros__contacto--button'>
          Enviar
        </button>
      </div>
      <div className='sobrenosotros__contacto--info'>
        <div className='sobrenosotros__contacto--dato'>
          <i className='bx bx-time-five'></i>
          <div>
            <p>lunes a Viernes</p>
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