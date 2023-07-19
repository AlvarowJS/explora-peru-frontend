import React from 'react'
import './../../Pages/Tours/Tours.css'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
const CardCircuito = ({ circuito, idioma }) => {
    const navigate = useNavigate()
    let img = circuito.img
    img = `https://backend.peruexploring.pe/public/storage/circuitos/${circuito.titulo}/${img}`
    const verCircuito = (id) => {
        navigate(`/circuitos/${id}`)
    }
    return (
        <Grid container key={circuito.id} paddingY={4}>
            <Grid item container xs={12} sm={12} md={4} lg={4} >
                {/* <div style={{ borderRadius: '20px', overflow: 'hidden' }}> */}
                <img
                    src={`https://backend.peruexploring.pe/public/storage/circuitos/${circuito.titulo}/${circuito.img}`}
                    width={200}
                    height={150}
                    alt={circuito.titulo == undefined ? "imagen" : circuito.titulo}
                    style={{ borderRadius: '20px' }}
                />
                {/* </div> */}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography variant='h4' component='h4' sx={{ color: '#E89241', fontSize: 20 }}>{circuito.titulo}</Typography>
                <div
                    style={{
                        maxHeight: '120px',
                        overflowY: 'auto',
                    }}
                >
                    <Typography variant="h4" sx={{ fontSize: 20, color: '#E89241' }}>
                        {idioma ? 'Includes' : 'Incluye'}
                    </Typography>
                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {idioma ? circuito?.incluye_english : circuito?.incluye_spanish}
                    </Typography>
                    <Typography variant="h4" sx={{ fontSize: 20, color: '#E89241' }}>
                        {idioma ? 'Duration' : 'Duración'}
                    </Typography>
                    <Typography>{circuito.duracion}</Typography>
                </div>
            </Grid>
            <Grid item container xs={12} sm={12} md={2} lg={2} alignItems="center">
                <Button style={{ color: 'white', backgroundColor: '#E89241' }}
                    onClick={() => { verCircuito(circuito.id) }}
                >
                    {idioma ? 'More information' : 'Más información'}
                </Button>
            </Grid>
        </Grid>
    )
}

export default CardCircuito