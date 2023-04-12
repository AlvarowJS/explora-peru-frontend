import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from './../assets/logo/logo.png'
const Navbar = () => {
    
    const navbar = useRef()
    const clickMenuHam = () => {
        navbar.current.classList.toggle('navbar-open')
    }
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
                        <li>
                            <NavLink to='/'>Sobre Nosotros</NavLink>
                        </li>
                        <li>
                            <NavLink to='/tours'>Tours</NavLink>
                        </li>
                        <li>
                            <NavLink to='/circuitos'>Circuitos</NavLink>
                        </li>
                        <li>
                            <NavLink to='/mice'>MICE</NavLink>
                        </li>
                        <li>
                            <NavLink to='/noticias'>Noticias</NavLink>
                        </li>
                        <li>
                            <NavLink to='contactenos'>Contactanos</NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <select className='header__languaje'>

                        <option value="spanish" selected>Spanish</option>
                        <option value="english">English</option>
                    </select>

                    <i className='bx bxs-group header__login' ></i>
                </div>

            </header>
        </>
    )
}

export default Navbar