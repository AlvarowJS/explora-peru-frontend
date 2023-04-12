import React from 'react'
import book from './../../assets/carril/libro.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__icon'>
                <div className='footer__icon--book'>
                    <h3>Libro de <br></br> Reclamaciones</h3>
                    <img src={book} alt="" />
                </div>
                <div className='footer__icon--social'>
                    <i className='bx bxl-facebook-square' ></i>
                    <i className='bx bxl-instagram-alt' ></i>
                    <i className='bx bxl-youtube' ></i>
                </div>
            </div>
            <div className='footer__derechos'>
                <p>Lima 2023 | Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer