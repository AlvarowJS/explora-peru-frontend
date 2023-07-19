import React, { useEffect, useState } from 'react'
import './../Tours.css'
import { Link, useParams } from 'react-router-dom'
import toursBD from '../../../apis/tours';
import { Button, Grid, Typography } from '@mui/material';

const ToursInfo = ({ idioma }) => {

    const id = useParams();
    const [tour, setTour] = useState()
    const [tourImg, setTourImg] = useState()
    useEffect(() => {
        toursBD.get(`/${id.id}`)
            .then(res => {
                setTour(res.data)
                setTourImg(`https://backend.peruexploring.pe/public/storage/tours/${res.data.titulo}/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Grid container spacing={4} marginY={10} padding={3}>
                <Grid item md={6}>
                    <div style={{ position: 'relative', cursor: 'pointer', width: '100%', height: '600px', borderRadius: '10px', overflow: 'hidden' }}>
                        <img
                            src={`https://backend.peruexploring.pe/public/storage/tours/${tour?.titulo}/${tour?.img}`}
                            alt="logo Peru Exploring"
                            objectFit="cover"
                            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                        />
                    </div>
                </Grid>
                <Grid item md={6}>

                    <Typography variant="h1" sx={{ fontSize: 40, color: 'darkorange' }}>
                        {tour?.titulo}
                    </Typography>
                    <Typography>
                        {idioma ? tour?.descripcion_english : tour?.descripcion_spanish}
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: 20, color: 'darkorange' }}>
                        {idioma ? 'Includes' : 'Incluye'}
                    </Typography>

                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {idioma ? tour?.incluye_english : tour?.incluye_spanish}
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: 20, color: 'darkorange' }}>
                        {idioma ? 'Duration' : 'Duración'}
                    </Typography>


                    <Typography>
                        {tour?.duracion}
                    </Typography>
                </Grid>
            </Grid>

        </>
    )
}

export default ToursInfo