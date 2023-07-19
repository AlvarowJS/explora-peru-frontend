import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { Link, AppBar, Box, Button, Switch, Toolbar, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './../assets/logo/logo.png'
const Navbar = ({ setIdioma, idioma, setMenu, menu }) => {


    const handleSwitchChange = (event) => {
        setIdioma(event.target.checked);
    };
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

    // Remake
    const intranet = () => {
        window.open('https://agentes.peruexploring.pe/', '_blank');
    }
    const handleMenuToggle = () => {
        setMenu(!menu);
    };

    return (
        <>
            <AppBar>
                <Toolbar>
                    <NavLink to='/' >
                        <img
                            src="/logo.png"
                            alt="logo Peru Exploring"
                            width={90}
                            height={60}
                        />
                        {/* <Typography variant='h6'>Perú Exploring</Typography> */}
                    </NavLink>
                    <Box flex={1} />
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' } }}>
                        <NavLink to='/' >
                            <Link>
                                <Button sx={{ width: 155 }}>
                                    {idioma ? 'About us' : 'Sobre nosotros'}
                                </Button>
                            </Link>
                        </NavLink>

                        <NavLink to='/tours' >
                            <Link>
                                <Button sx={{ width: 155 }}>
                                    Tours
                                </Button>
                            </Link>
                        </NavLink>

                        <NavLink to='/circuitos' >
                            <Link>
                                <Button sx={{ width: 155 }}>
                                    {idioma ? 'circuits' : 'Circuitos'}
                                </Button>
                            </Link>
                        </NavLink>

                        <NavLink to='/mice' >
                            <Link>
                                <Button sx={{ width: 155 }}>
                                    MICE
                                </Button>
                            </Link>
                        </NavLink>

                        <NavLink to='/noticias' >
                            <Link>
                            <Button sx={{ width: 155}}>
                                    {idioma ? 'News' : 'Noticias'}
                                </Button>
                            </Link>
                        </NavLink>
                        <NavLink to='/contactenos' >
                            <Link>
                            <Button sx={{ width: 155}}>
                                    {idioma ? 'Contact Us' : 'Contáctenos'}
                                </Button>
                            </Link>
                        </NavLink>
                    </Box>

                    <Box flex={1} />
                    <Box flex={1} />
                    <Box sx={{ color: 'white', fontFamily: 'Roboto', marginRight: 2 }}>
                        Es
                        <Switch
                            color='primary'
                            checked={idioma}
                            onChange={handleSwitchChange}
                        />
                        En
                    </Box>
                    <Box>
                        <MenuIcon onClick={handleMenuToggle} sx={{ color: 'white',marginLeft: 3, fontSize: 30, cursor: 'pointer' }} />
                    </Box>
                    
                    <Box>
                        <PersonIcon onClick={intranet} sx={{ color: 'white', marginLeft: 3,fontSize: 30, cursor: 'pointer' }} />
                    </Box>


                </Toolbar>


            </AppBar>
        </>
    )
}

export default Navbar