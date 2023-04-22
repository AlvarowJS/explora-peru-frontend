import React, { useEffect } from 'react'
import portada from './../../assets/carril/home.png'
import about1 from './../../assets/carril/about_1.png'
import about2 from './../../assets/carril/about_2.png'
import about3 from './../../assets/carril/about_3.png'
import foto1 from './../../assets/testimonios/foto1.png'

import './SobreNosotros.css'
import StarRating from '../../Components/StarRating'
import Footer from '../../Components/Footer/Footer'
import Contactenos from '../Contactenos/Contactenos'
import Responsable from '../../Components/Responsable/Responsable'

const SobreNosotros = ({ idioma, setIdioma }) => {

  return (
    <>
      <div className='sobrenosotros'>
        <img className='sobrenosotros__img' src={portada} alt="" />
        <h2 className='sobrenosotros__title'>
          {
            idioma == 'spanish' ? `Haz memorable tus viajes con Nosotros` : 'Make your trips memorable with us'
          }


        </h2>
      </div>
      <div className='sobrenosotros__info'>
        <div className='sobrenosotros__info--text'>
          <h2>
            {
              idioma == 'spanish' ? 'Sobre Nosotros' : 'About us'
            }
          </h2>
          {
            idioma == 'spanish' ?
              <b> Perú exploring es un operador turístico del Perú.</b>
              :
              <b> Peru explore is a tour operator in Peru.</b>
          }
          {
            idioma == 'spanish' ?
              <p>
                Actualmente contamos con 10 años de experiencia, además tenemos servicios únicos que nos diferencian de los otros operadores, asi como también servicios compartidos en un solo idioma y tenemos experiencia en lo que hacemos.
                <br />
                Trabajamos con agencias de viajes mayoristas, buscando ser su aliado y fomentar nuestra cultura peruana, orientándonos a la calidad de nuestros servicios, lo que nos ayuda a crecer como operadores.
                <br />
                También trabajamos con agencias de distintos paises, recibiendo los pasajeros FIT o grupos, representándolos con bastante esfuerzo y compromiso.
              </p>
              :
              <p>
                We currently have 10 years of experience, we also have unique services that differentiate us from other operators, as well as shared services in a single language and we have experience in what we do.
                <br />
                We work with wholesale travel agencies, seeking to be their ally and promote our Peruvian culture, focusing on the quality of our services, which helps us grow as operators.
                <br />
                We also work with agencies from different countries, receiving FIT passengers or groups, representing them with a lot of effort and commitment.
              </p>
          }
        </div>
        <div className='sobrenosotros__info--img'>
          <img className='sobrenosotros__info--about1' src={about1} alt="" />
          <img className='sobrenosotros__info--about2' src={about2} alt="" />
          <img className='sobrenosotros__info--about3' src={about3} alt="" />
        </div>
      </div>
      <Responsable idioma={idioma} />
      {/*   */}
      <Contactenos idioma={idioma} />
      {/* <Footer /> */}
    </>
  )
}

export default SobreNosotros