import React from 'react'
import portada from './../../assets/carril/home.png'
import about1 from './../../assets/carril/about_1.png'
import about2 from './../../assets/carril/about_2.png'
import about3 from './../../assets/carril/about_3.png'
import foto1 from './../../assets/testimonios/foto1.png'

import './SobreNosotros.css'
import StarRating from '../../Components/StarRating'
import Footer from '../../Components/Footer/Footer'
import Contactenos from '../Contactenos/Contactenos'

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
      {/*   */}
      <Contactenos/>
      <Footer/>
    </>
  )
}

export default SobreNosotros