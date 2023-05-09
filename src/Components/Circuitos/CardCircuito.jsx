import React from 'react'
import './../../Pages/Tours/Tours.css'
import tour from './../../assets/carril/tours.png'
import { useNavigate } from 'react-router-dom'

const CardCircuito = ({ circuito }) => {
    const navigate = useNavigate()
    let img = circuito.img
    img = `https://backend.peruexploring.pe/public/storage/circuitos/${circuito.titulo}/${img}`
    const verTour = (id) => {
        navigate(`/circuitos/${id}`)
    }
    return (
        <div className='tours__card'>
            <img src={img} alt="" />
            <h3>{circuito.titulo}</h3>
            <p>
                {/* {
                    idioma == 'spanish' ?
                        (circuito.descripcion_spanish).substring(0, 100) + "..."
                        :
                        (circuito.descripcion_english).substring(0, 100) + "..."
                } */}
            </p>
            <div className='tours__card--info'>
                <p>{circuito.duracion} horas</p>
                <button onClick={() => verTour(circuito.id)}>
                    Ver mas
                </button>
            </div>
        </div>
    )
}

export default CardCircuito