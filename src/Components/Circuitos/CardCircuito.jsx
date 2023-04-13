import React from 'react'
import './../../Pages/Tours/Tours.css'
import tour from './../../assets/carril/tours.png'

const CardCircuito = () => {
    return (
        <div className=''>
            <img className='tours__catalogo--img' src={tour} alt="" />
            <h3>Title</h3>
            <p>Descripcion</p>
            <div className='tours__catalogo--info'>
                <p>hora</p>
                <p>dolar</p>
            </div>
        </div>
    )
}

export default CardCircuito