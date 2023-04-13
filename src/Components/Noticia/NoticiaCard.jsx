import React from 'react'
import noticiaCard from './../../assets/carril/about_1.png'
import './NoticiaCard.css'

const NoticiaCard = () => {
  return (
    <div className='noticias__card--component'>
        <img src={noticiaCard} alt="" />
        <p>Ollantaytambo ingresa a la revista Time magazine's 50 destinos extraordinarios</p>
        <button>
            Ver Más
        </button>
    </div>
  )
}

export default NoticiaCard