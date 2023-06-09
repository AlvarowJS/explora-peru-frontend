import React from 'react'
import mice from './../../assets/carril/mice.png'
import micePortada from './../../assets/mice/miceportada.png'
import miceEspecialidad1 from './../../assets/mice/especialistas/especialidad1.png'
import miceEspecialidad2 from './../../assets/mice/especialistas/especialidad2.png'
import miceEspecialidad3 from './../../assets/mice/especialistas/especialidad3.png'
import miceEspecialidad4 from './../../assets/mice/especialistas/especialidad4.png'

import miceExperiencia1 from './../../assets/mice/experiencia/experiencia1.png'
import miceExperiencia2 from './../../assets/mice/experiencia/experiencia2.png'
import miceExperiencia3 from './../../assets/mice/experiencia/experiencia3.png'
import miceExperiencia4 from './../../assets/mice/experiencia/experiencia4.png'

import miceIncentivo1 from './../../assets/mice/incentivo/incentivo1.png'
import miceIncentivo2 from './../../assets/mice/incentivo/incentivo2.png'
import miceIncentivo3 from './../../assets/mice/incentivo/incentivo3.png'
import miceIncentivo4 from './../../assets/mice/incentivo/incentivo4.png'

import miceSentimiento1 from './../../assets/mice/sentimientos/sentimiento1.png'
import miceSentimiento2 from './../../assets/mice/sentimientos/sentimiento2.png'
import miceSentimiento3 from './../../assets/mice/sentimientos/sentimiento3.png'

import './Mice.css'
const Mice = () => {
  return (
    <div>
      <div className='mice'>
        <img className='mice__img' src={mice} alt="" />
      </div>
      <aside className='mice__descripcion'>
        <h2>MICE</h2>
        <h3>Diseña tu propia experiencia junto a nosotros</h3>
        <h4>Eventos especiales, viajes a medida, Grupos de incentivos, reuniones</h4>
        <p>
          Nuestra división MICE siempre está creando experiencias únicas y satisfaciendo las necesidades  <br />
          de nuestros clientes. Nuestro Equipo trabajará en cada proyecto<br />
          ofreciendo información personalizada y detallada para maximizar su experiencia. <br />
          Cuando se trata de crear una experiencia única en Perú, la variedad y la innovación <br />
          son la clave de todo. Perú, tierra de tesoros escondidos con gran variedad <br />
          geográfica, cultural, histórica y gastronómica. Un viaje de incentivo no solo será un <br />
          viaje a un nuevo destino como Perú sino que terminará siendo una experiencia <br />
          única en la vida.

        </p>
        <img src={micePortada} alt="" />
      </aside>
      <aside className='mice__incentivo'>
        <h4>Grupo de Incentivo</h4>
        <p>Los viajes de Incentivos son una buena manera de fidelizar clientes y/o motivar a equipos de ventas. Desde muchos años esto se lleva a cabo, cada vez se busca un atractivo especial, algo diferente y único. Nosotros nos especializamos en creatividad, exclusividad y dinamismo, aventura, actividades al aire libre, temas culturales, gastronomía, lujo. El resultado final es el éxito de los objetivos que nos trazamos.</p>
        <div className='mice__incentivo--img'>
          <img src={miceIncentivo1} alt="" />
          <img src={miceIncentivo2} alt="" />
          <img src={miceIncentivo3} alt="" />
          <img src={miceIncentivo4} alt="" />
        </div>
      </aside>

      <aside className='mice__incentivo'>
        <h4>Experiencias Únicas</h4>
        <p>Cada uno de nuestros viajes son experiencias únicas y deslumbrantes. Combina regiones como la costa, la sierra y la selva, regiones maravillosas y llenas de historia, cultura con servicios personalizados de gran calidad con la mejor selección de hoteles de la región, los mejores restaurantes donde la fusión gastronómica, la presentación culinaria los hacen únicos e irresistibles.</p>
        <div className='mice__incentivo--img'>
          <img src={miceExperiencia1} alt="" />
          <img src={miceExperiencia2} alt="" />
          <img src={miceExperiencia3} alt="" />
          <img src={miceExperiencia4} alt="" />
        </div>
      </aside>

      <aside className='mice__incentivo'>
        <h4>Equipo de especialistas</h4>
        <p>Somos los especialistas en la coordinación y ejecución siempre buscando el mejor lugar acorde para poder acoger a los participantes, complementándolo con todos los servicios de audiovisual, alimentación, alojamientos, transporte, cocteles, cenas de apertura en lugares históricos o museos. Nos encargamos de todos los detalles.</p>
        <div className='mice__incentivo--img'>
        <img src={miceEspecialidad1} alt="" />
          <img src={miceEspecialidad2} alt="" />
          <img src={miceEspecialidad3} alt="" />
          <img src={miceEspecialidad4} alt="" />
        </div>
      </aside>

      <aside className='mice__incentivo'>
        <h4>Uniendo sentimientos</h4>
        <p>Viajes basados en algún interés especial, inspirado en un tema, experiencias únicas. 100% Tailored made, propuestas que cumplan con los deseos de los clientes. Estos pueden ser educativos, ecológicos, gastronómicos, aventura, deportivos (Futbol, Maratones, Yoga), vivenciales.</p>
        <div className='mice__incentivo--img'>
          <img src={miceSentimiento1} alt="" />
          <img src={miceSentimiento2} alt="" />
          <img src={miceSentimiento3} alt="" />
        </div>
      </aside>
    </div>
  )
}

export default Mice