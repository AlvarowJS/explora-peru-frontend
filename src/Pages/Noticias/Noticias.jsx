import React from 'react'
import noticia from './../../assets/carril/mice.png'
import './Noticias.css'
import NoticiaCard from '../../Components/Noticia/NoticiaCard'
const Noticias = () => {
  return (
    <div>
      <div className='noticias'>
        <img className='noticias__img' src={noticia} alt="" />
      </div>
      <aside className='noticias__cuerpo'>
        <h2>Noticias</h2>
        <div className='noticias__cards'>
          <NoticiaCard/>
          <NoticiaCard/>
          <NoticiaCard/>
          <NoticiaCard/>
          <NoticiaCard/>
        </div>
      </aside>
    </div>
  )
}

export default Noticias