import React from 'react'
import book from './../../assets/carril/libro.png'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = ({ idioma }) => {
    console.log(idioma, "footer")
    return (
        <footer className='footer'>
            <div className='footer__icon'>
                <div className='footer__icon--book'>
                    {idioma == 'spanish' ?
                        <h3>Libro de <br></br> Reclamaciones</h3> : <h3>complaints<br></br> book</h3>
                    }
                    <Link to="/reclamaciones">
                    <img src={book} alt="" />
                    </Link>
                </div>
                <div className='footer__icon--social'>
                    <i className='bx bxl-facebook-square' ></i>
                    <a href="https://www.instagram.com/peru.exploring/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram-alt' ></i></a>
                    <i className='bx bxl-youtube' ></i>
                </div>
            </div>
            <div className='footer__derechos'>
                {idioma == 'spanish' ?
                    <p>Lima 2023 | Todos los derechos reservados</p> :
                    <p>Lima 2023 | All rights reserved</p>
                }
            </div>
        </footer>
    )
}

export default Footer