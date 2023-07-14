import React from 'react'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const CardsTours = ({ tour, idioma }) => {
    const navigate = useNavigate()
    console.log(idioma, "ssss")
    let img = tour.img
    img = `https://backend.peruexploring.pe/public/storage/tours/${tour.titulo}/${img}`

    const verTour = (id) => {
        navigate(`/tours/${id}`)
    }
    return (
        <Grid container key={tour.id} paddingY={4}>
            <Grid item container xs={12} sm={12} md={4} lg={4} >
                {/* <div style={{ borderRadius: '20px', overflow: 'hidden' }}> */}
                <img
                    src={`https://backend.peruexploring.pe/public/storage/tours/${tour.titulo}/${tour.img}`}
                    width={200}
                    height={150}
                    alt={tour.titulo == undefined ? "imagen" : tour.titulo}
                    style={{ borderRadius: '20px' }}
                />
                {/* </div> */}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography variant='h4' component='h4' sx={{ color: '#E89241', fontSize: 20 }}>
                    {tour.titulo}
                </Typography>
                <div
                    style={{
                        maxHeight: '120px',
                        overflowY: 'auto',
                    }}
                >
                    <Typography>
                        {idioma ? tour.descripcion_english : tour.descripcion_spanish}

                    </Typography>
                </div>
            </Grid>
            <Grid item container xs={12} sm={12} md={2} lg={2} alignItems="center">
                <Button style={{ color: 'white', backgroundColor: '#E89241' }}
                    onClick={() => { verTour(tour.id) }}
                >
                    {idioma ? 'More information' : 'Más información'}
                </Button>
            </Grid>
        </Grid>
    )
}

export default CardsTours