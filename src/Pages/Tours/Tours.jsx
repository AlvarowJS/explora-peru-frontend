import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardMedia, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, TextareaAutosize, Typography } from '@mui/material'
import CardsTours from '../../Components/Tours/CardsTours'

import { Search } from '@mui/icons-material'
import toursBD from '../../apis/tours'
import lugaresBD from '../../apis/lugares'
const Tours = ({ idioma }) => {
  const [filterSelect, setFilterSelect] = useState()
  const [filter, setFilter] = useState()
  const [search, setSearch] = useState()
  const [tours, setTours] = useState()
  const [lugars, setLugars] = useState()
  useEffect(() => {
    toursBD.get()
      .then(res => setTours(res.data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    if (tours) {
      setFilter(tours?.filter(e => e.titulo.toLowerCase().indexOf(search?.toLowerCase()) !== -1))
    }
  }, [search])

  useEffect(() => {
    if (tours) {
      setFilter(tours?.filter(e => e.titulo.toLowerCase().indexOf(filterSelect?.toLowerCase()) !== -1))
    }
  }, [filterSelect])


  useEffect(() => {
    lugaresBD.get()
      .then(res => setLugars(res?.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      <Box position="relative" width="100%">
        <CardMedia
          component="img"
          height="350"
          image="/portada_tour.png"
          alt="portada"

        />
        {/* <Box position="absolute" top="25%" left="40%" textAlign="center" color="white"> */}
        <Box
          position="absolute"
          textAlign="center"
          top="40%"
          // left="40%"
          sx={{ left: { xs: '10%', sm: '30%', md: '30%', lg: '40%' } }}
          color="white" >

          <Typography variant="h1" sx={{ fontSize: 40 }}>Tours</Typography>
          <Typography variant="h4" sx={{ fontSize: 30, marginTop: 4, marginBottom: 5 }}>
            {idioma ? 'Choose your next destination' : 'Escoge tu próximo destino'}
          </Typography>


        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginX: 3, marginY: 5, gap: 2 }} >
        <div style={{ position: 'relative', cursor: 'pointer', width: '300px', maxHeight: '300px' }}
          onClick={() => setFilterSelect('ica')}
        >
          <img
            src="/ica_filtro.png"
            alt="logo Peru Exploring"
            objectFit="cover"
            style={{ borderRadius: 10, width: '100%', height: 'auto' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <Typography variant="h1">ICA</Typography>
          </div>
        </div>


        <div style={{ position: 'relative', cursor: 'pointer', width: '300px', maxHeight: '300px' }}
          onClick={() => setFilterSelect('lima')}
        >
          <img
            src="/lima_filtro.png"
            alt="logo Peru Exploring"
            style={{ borderRadius: 10, width: '100%', height: 'auto' }}
            objectFit="cover"
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <Typography variant="h1">LIMA</Typography>
          </div>
        </div>


        <div style={{ position: 'relative', cursor: 'pointer', width: '300px', maxHeight: '300px' }}
          onClick={() => setFilterSelect('cuzco')}
        >
          <img
            src="/cuzco_filtro.png"
            alt="logo Peru Exploring"
            style={{ borderRadius: 10, width: '100%', height: 'auto' }}
            objectFit="cover"
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <Typography variant="h1">CUZCO</Typography>
          </div>
        </div>

      </Box>

      <Box display="flex" justifyContent="center" >
        <div style={{ backgroundColor: 'gray', borderRadius: 30 }}>
          <input type="text" style={{ border: 'none', paddingLeft: 60, outline: 'none', backgroundColor: 'gray', marginLeft: 10, color: 'white' }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button style={{ backgroundColor: 'purple', color: 'white', paddingLeft: 30, paddingRight: 20, border: 'none', margin: 0 }}>
            <Search />
          </Button>
        </div>
      </Box>
      <Box
        sx={{ marginX: { xs: 5, sm: 10, md: 5, lg: 30, xl: 60 } }}
        // margin={20}
        marginY={4}
      >
        {
          filter ?
            filter?.map((tour) => (
              <CardsTours key={tour.id} tour={tour} idioma={idioma} />
            ))
            :
            tours?.map((tour) => (
              <CardsTours key={tour.id} tour={tour} idioma={idioma} />
            ))
        }
      </Box>
    </>

  )
}

export default Tours