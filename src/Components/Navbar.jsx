import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from './../assets/logo/logo.png'
const Navbar = ({ setIdioma, idioma }) => {

    // const [idioma, setIdioma] = useState('spanish')
    const navbar = useRef()
    const clickMenuHam = () => {        
        navbar.current.classList.toggle('navbar-open')
    }

    const handleChange = (event) => {
        setIdioma(event.target.value);
    }
    const redireccion = () => {
        window.open('https://agentes.peruexploring.pe/', '_blank')
    }
    // Seleccionar elementos
    const body = document.querySelector('.circuitos__body');    

  

    return (
        <>
            <header className='header'>
                <Link to="/">
                    <img className='header__logo' src={logo} alt="" />
                </Link>
                <div onClick={clickMenuHam} className='header__menuham'>
                    <i className='bx bx-menu'></i>
                </div>
                <nav ref={navbar} className='header__navbar'>
                    <ul>
                        <NavLink to='/'>
                            <li>

                                {
                                    idioma == 'spanish' ? 'Sobre Nosotros' : 'About us'
                                }
                            </li>
                        </NavLink>

                        <NavLink to='/tours'>
                            <li>

                                Tours
                            </li>
                        </NavLink>

                        <NavLink to='/circuitos'>
                            <li>

                                {idioma == 'spanish' ? 'Circuitos' : 'Circuits'}
                            </li>
                        </NavLink>
                        <NavLink to='/mice'>

                            <li>
                                MICE
                            </li>
                        </NavLink>
                        <NavLink to='/noticias'>

                            <li>
                                {idioma == 'spanish' ? 'Noticias' : 'News'}
                            </li>
                        </NavLink>
                        <NavLink to='contactenos'>

                            <li>
                                {idioma == 'spanish' ? 'Contactanos' : 'Contact us'}
                            </li>
                        </NavLink>

                    </ul>
                </nav>
                <div>
                    <select className='header__languaje' value={idioma} onChange={handleChange}>
                        <option value="spanish" selected>Español</option>
                        <option value="english">English</option>
                    </select>
                    {/* <NavLink to='login'> */}
                    <i className='bx bxs-group header__login' onClick={redireccion}></i>
                    {/* </NavLink> */}
                </div>

            </header>
        </>
    )
}

export default Navbar