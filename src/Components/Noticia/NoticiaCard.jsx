import React from 'react'
// import noticiaCard from './../../assets/carril/about_1.png'
import './NoticiaCard.css'
import { Link, useNavigate } from 'react-router-dom'


const NoticiaCard = ({ noticia }) => {
  const navigate = useNavigate()
  let img = noticia.img
  img = `https://backend.peruexploring.pe/storage/noticias/${noticia.titulo}/${img}`

  const verNotaById = (id) => {
    navigate(`/noticias/${id}`)
  }
  
  
  return (
    <div className='noticias__card--component'>
        <img src={img} alt="" />
        <p>{noticia?.titulo}</p>
        {/* <p>Ollantaytambo ingresa a la revista Time magazine's 50 destinos extraordinarios</p> */}
          <button onClick={() => verNotaById(noticia.id)}>
              Ver Más
          </button>
    </div>
  )
}

export default NoticiaCard