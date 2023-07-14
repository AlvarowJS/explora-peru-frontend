import React, { useEffect, useState } from 'react'
import './../Circuitos.css'
import { Link, useParams } from 'react-router-dom'
import toursBD from '../../../apis/tours';
import circuitosBD from '../../../apis/circuitos';
import { Button, Grid, Typography } from '@mui/material';
const CircuitosInfo = ({ idioma }) => {

    const id = useParams();
    const [circuito, setCircuito] = useState()
    const [tourImg, setTourImg] = useState()
    useEffect(() => {
        circuitosBD.get(`/${id.id}`)
            .then(res => {
                setCircuito(res.data)
                setTourImg(`https://backend.peruexploring.pe/public/storage/circuitos/${res.data.titulo}/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Grid container spacing={4} marginY={10} padding={3}>
                <Grid item md={6}>
                    <div style={{ position: 'relative', cursor: 'pointer', width: '100%', height: '600px', borderRadius: '10px', overflow: 'hidden' }}>
                        <img
                            src={`https://backend.peruexploring.pe/public/storage/circuitos/${circuito?.titulo}/${circuito?.img}`}
                            alt="circuito Peru Exploring"
                            objectFit="cover"
                            style={{ width: '100%', height: '600px', objectFit: 'cover' }}

                        />
                    </div>
                </Grid>
                <Grid item md={6}>

                    <Typography variant="h1" sx={{ fontSize: 40, color: 'darkorange' }}>
                        {circuito?.titulo}
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: 20, color: 'darkorange' }}>
                        {idioma ? 'Includes' : 'Incluye'}
                    </Typography>


                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {idioma ? circuito?.incluye_english : circuito?.incluye_spanish}
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: 20, color: 'darkorange' }}>
                        {idioma ? 'Not included' : 'No incluye'}
                    </Typography>


                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {idioma ? circuito?.no_incluye_english : circuito?.no_incluye_spanish}
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: 20, color: 'darkorange' }}>
                        {idioma ? 'Duration' : 'Duración'}
                    </Typography>


                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {circuito?.duracion}
                    </Typography>
                    {/* <Grid container>
                        <Grid>
                            <Button sx={{
                                backgroundColor: '#E89241',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'darkorange',
                                },
                            }}>Descargar Itinerario en Español</Button>
                        </Grid>
                        <Grid>
                            <Button sx={{
                                backgroundColor: '#E89241',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'darkorange',
                                },
                            }}>Download Itinerary in English</Button>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>

        </>
    )
}

export default CircuitosInfo