import React from 'react'
import './../../Pages/Tours/Tours.css'
import tour from './../../assets/carril/tours.png'
import { useNavigate } from 'react-router-dom'
const CardsTours = ({ tour, idioma }) => {
    const navigate = useNavigate()

    let img = tour.img
    img = `http://127.0.0.1:8000/storage/tours/${img}`
    const verTour = (id) => {
        navigate(`/tours/${id}`)
    }
    return (
        <div className='tours__card'>
            <img src={img} alt="" />
            <h3>{tour.titulo}</h3>
            <p>
                {
                    idioma == 'spanish' ?
                    (tour.descripcion_spanish).substring(0, 100) + "..."
                    :
                    (tour.descripcion_english).substring(0, 100) + "..."
                }
            </p>
            <div className='tours__card--info'>
                <p>{tour.duracion}</p>
                <button onClick={() => verTour(tour.id)}>
                    Ver mas
                </button>
            </div>
        </div>
    )
}

export default CardsTours