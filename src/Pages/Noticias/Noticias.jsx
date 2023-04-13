import React from 'react'
import noticia from './../../assets/carril/mice.png'
import './Noticias.css'
const Noticias = () => {
  return (
    <div>
      <div className='noticias'>
        <img className='noticias__img' src={noticia} alt="" />
      </div>
      <aside className='noticias__cuerpo'>
        <h2>Noticias</h2>

      </aside>
    </div>
  )
}

export default Noticias