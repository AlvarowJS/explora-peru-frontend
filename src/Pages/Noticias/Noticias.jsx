import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardMedia, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, TextareaAutosize, Typography } from '@mui/material'
import noticiasBD from '../../apis/noticias'
import NoticiaCard from '../../Components/Noticia/NoticiaCard'
const Noticias = ({ idiomaGlobal }) => {
  const [noticias, setNoticias] = useState()
  useEffect(() => {
    noticiasBD.get()
      .then(res => {
        console.log(res?.data)
        setNoticias(res?.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <Box position="relative" width="100%">
        <CardMedia
          component="img"
          height="350"
          image="/noto_noticias.png"
          alt="portada mice"

        />
        {/* <Box position="absolute" top="25%" left="40%" textAlign="center" color="white"> */}
        <Box
          position="absolute"
          top="40%" 
          // left="50%"
          sx={{ left: { sm: '10%', md: '10%', lg: '20%' } }}
          textAlign="center"
          // sx={{
          //   transform: 'translate(-50%, -50%)',
          // }}
          color="white" >

          <Typography variant="h1" sx={{ fontSize: 40 }}>Noticias</Typography>
          <Typography variant="h4" sx={{ fontSize: 30, marginTop: 4, marginBottom: 5 }}>
            No te pierdas las últimas noticias sobre nosotros y el turismo en el Perú
          </Typography>

        </Box>
      </Box>

      <Grid container spacing={4} marginY={5}>
        {
          noticias?.map((noticia) => (
            <>
            <NoticiaCard key={noticia.id} noticia={noticia} />
            <NoticiaCard key={noticia.id} noticia={noticia} />
            <NoticiaCard key={noticia.id} noticia={noticia} />
            </>
          ))
        }

      </Grid>
    </>
  )
}

export default Noticias