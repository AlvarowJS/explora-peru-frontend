import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import noticiaImg from './../../../assets/carril/mice.png'
import noticiasBD from '../../../apis/noticias';
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import './../Noticias.css'
const NoticiaNota = ({ idiomaGlobal }) => {
    const [noticia, setNoticia] = useState()
    const [imgNew, setImgNew] = useState()
    const id = useParams();

    useEffect(() => {
        noticiasBD.get(`/${id.id}`)
            .then(res => {
                setNoticia(res.data)
                setImgNew(`https://backend.peruexploring.pe/public/storage/noticias/${res?.data.titulo}/${res?.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Grid container spacing={4} marginY={10} padding={4}>
                <Grid item md={6}>
                        <img
                            src={`https://backend.peruexploring.pe/public/storage/noticias/${noticia?.titulo}/${noticia?.img}`}
                            alt={noticia?.titulo}
                            objectFit="cover"
                            style={{width: 200, height: '100vh', objectFit: 'cover', borderRadius: 10}}
                        />
                </Grid>
                <Grid item md={6}>

                    <Typography variant="h1" sx={{ fontSize: 40, color: 'darkorange' }}>
                        {noticia?.titulo}
                    </Typography>
                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {noticia?.nota}
                    </Typography>

                </Grid>
            </Grid>
        </>
    )
}

export default NoticiaNota