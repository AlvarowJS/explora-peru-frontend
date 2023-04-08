import React from 'react'
import portada from './../../assets/carril/home.png'
import about1 from './../../assets/carril/about_1.png'
import about2 from './../../assets/carril/about_2.png'
import about3 from './../../assets/carril/about_3.png'
import foto1 from './../../assets/testimonios/foto1.png'

import './SobreNosotros.css'
import StarRating from '../../Components/StarRating'
const SobreNosotros = () => {
  return (
    <>
      <div className='sobrenosotros'>
        <img className='sobrenosotros__img' src={portada} alt="" />
        <h2 className='sobrenosotros__title'>Haz memorable tus viajes <br />con Nosotros</h2>
      </div>
      <div className='sobrenosotros__info'>
        <div className='sobrenosotros__info--text'>
          <h2>Sobre Nosotros</h2>
          <b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
          <p>Proin ac bibendum justo. Sed consectetur, risus non luctusondimentum, urna massa porttitor ipsum, in facilisis lectus mi sit amet
            nibh. Suspendisse finibus malesuada venenatis. In condimentum
            neque eu porta lacinia. Donec diam purus, eleifend eu bibendum non,
            dapibus ut arcu.</p>
        </div>
        <img className='sobrenosotros__info--about1' src={about1} alt="" />
        <img className='sobrenosotros__info--about2' src={about2} alt="" />
        <img className='sobrenosotros__info--about3' src={about3} alt="" />
      </div>
      <div className='sobrenosotros__proveedores'>
        <h2>Proveedores</h2>
        <div className='sobrenosotros__proveedores--testimonios'>
          <div className='sobrenosotros__proveedores--cards'>
            <img src={foto1} alt="" />
            <p>Maria</p>
            <StarRating rating={2.5} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium erat ex, sagittis aliquet magna pretium id.</p>
          </div>
          <div className='sobrenosotros__proveedores--cards'>
            <img src={foto1} alt="" />
            <p>Maria</p>
            <StarRating rating={2.5} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium erat ex, sagittis aliquet magna pretium id.</p>
          </div>
          <div className='sobrenosotros__proveedores--cards'>
            <img src={foto1} alt="" />
            <p>Maria</p>
            <StarRating rating={2.5} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium erat ex, sagittis aliquet magna pretium id.</p>
          </div>
        </div>
      </div>
      <div className='sobrenosotros__contacto'>
        <div className='sobrenosotros__contacto--form'>

          <h2>Contáctanos</h2>
          <b>¿Estas interesado en nuestros servicios? Escribenos</b>
          <label>Nombres</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>celular</label>
          <input type="text" />
          <label>Mensaje</label>
          <input type="text" />
          <button>
            Enviar
          </button>
        </div>
        <div className='sobrenosotros__contacto--info'>
          <div className='sobrenosotros__contacto--icons'>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SobreNosotros