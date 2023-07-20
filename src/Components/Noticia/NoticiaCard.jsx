import React from 'react'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'


const NoticiaCard = ({ noticia, idiomaGlobal }) => {
  const navigate = useNavigate()
  let img = noticia.img
  img = `https://backend.peruexploring.pe/public/storage/noticias/${noticia.titulo}/${img}`

  const verNotaById = (id) => {
    navigate(`/noticias/${id}`)
  }


  return (
    <Grid item xs={12} sm={6} md={4}>
      <div style={{ cursor: 'pointer', width: '100%', height: '300px', borderRadius: '10px' }}>
        <img
          src={`https://backend.peruexploring.pe/public/storage/noticias/${noticia.titulo}/${noticia.img}`}
          alt="logo Peru Exploring"
          objectFit="cover"
          style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: '50px' }}
        />
      </div>
      <Box paddingX={5}>
        <Typography variant='h4' component='h4' sx={{ color: '#E89241', fontSize: 30 }}>{noticia.titulo}</Typography>
        <Typography>{noticia.nota}</Typography>
        <Button style={{ color: 'white', backgroundColor: '#E89241' }}
          onClick={() => { verNotaById(noticia.id) }}
        >
          Ver noticia
        </Button>
      </Box>

    </Grid>
  )
}

export default NoticiaCard