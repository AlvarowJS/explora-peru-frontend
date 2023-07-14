// import React from 'react'
// import book from './../../assets/carril/libro.png'
// import './Footer.css'
// import { Link } from 'react-router-dom'
import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = ({ idioma }) => {
    const insta = () => {
        window.open("https://www.instagram.com/peru.exploring/", "_blank")
    }

    const wssp = () => {
        window.open("https://api.whatsapp.com/send?phone=51922058965&text=Hola%20tengo%20una%20consulta%20%F0%9F%98%80", "_blank")

    }
    return (
        <footer>
            <Box sx={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>

                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <Box sx={{ color: 'white' }}>

                            <Typography>
                                {idioma ? 'Complaints Book' : 'Libro de Reclamaciones'}
                            </Typography>
                            <NavLink to='/reclamaciones' >
                                <MenuBookIcon sx={{ fontSize: 62, cursor: 'pointer' }} />
                            </NavLink>
                        </Box>

                    </Grid>
                </Grid>

                <Box sx={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
                    <InstagramIcon sx={{ fontSize: 40, cursor: 'pointer' }} onClick={insta} />
                    <FacebookIcon sx={{ fontSize: 40, cursor: 'pointer' }} />
                    <EmailIcon sx={{ fontSize: 40, cursor: 'pointer' }} />
                    <WhatsAppIcon sx={{ fontSize: 40, cursor: 'pointer' }} onClick={wssp} />
                </Box>
                <Box>
                    <Typography sx={{ color: 'white', paddingY: 2 }}>
                        {idioma ? 'Lima 2023 - All rights reserved' : 'Lima 2023 - Todos los derechos reservados'}

                    </Typography>
                </Box>

            </Box>
        </footer>
    )
}

export default Footer