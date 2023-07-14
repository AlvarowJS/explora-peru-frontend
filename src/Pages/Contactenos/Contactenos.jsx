import React from 'react'
import { Button, Grid, Typography, Box, InputLabel, FormControl, OutlinedInput, TextField, Hidden } from '@mui/material'
import './Contactenos.css'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
const MySwal = withReactContent(Swal)
const URL = 'https://backend.peruexploring.pe/public/api/v1/contactenos'
const Contactenos = ({ idioma, idiomaGlobal }) => {

  const { handleSubmit, register, reset, watch } = useForm()
  const defaultForm = {
    razon_social: '',
    ruc: '',
    telefono: '',
    direccion: '',
    email: ''
  }
  const onSubmit = data => {

    return MySwal.fire({
      title: '¿Estás seguro de enviar el mensaje?',
      text: "¡No podrás editar esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ms-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Mensaje Enviado!',
          text: 'Nos comunicaremos contigo enseguida :)',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
        axios.post(URL, data)
          .then(res => {
            reset(defaultForm)
          })
          .catch(err => console.log(err))
      }
    })

  }

  return (
    <>
      <Grid container spacing={4} padding={10}>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              cursor: 'pointer', width: '100%',
              height: '500px', '@media (max-width: 600px)': {
                display: 'none',
              },
            }}
          >
            <img
              src="/contacto.png"
              alt="foto contacto"
              objectFit="cover"
              style={{
                width: '100%', height: '500px', objectFit: 'cover'
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='h1' fontSize={50}>
            {idioma ? 'Contact us' : 'Contáctanos'}
          </Typography>
          <Typography>
            {idioma ? 'Are you interested in our services? Contact us' : '¿Estás interesado en nuestros servicios? Escríbenos'}
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ paddingTop: 4, display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '1rem', alignItems: 'center', gap: 2 }}>
              <InputLabel htmlFor="nombre">
                {idioma ? 'Name' : 'Nombre'}:
              </InputLabel>
              <FormControl>
                <OutlinedInput id="nombre" type="text" sx={{ borderRadius: '29px', height: '35px' }} {...register('nombre')} />
              </FormControl>

              <InputLabel htmlFor="email">
                {idioma ? 'E-mail' : 'Correo electrónico'}:
              </InputLabel>
              <FormControl>
                <OutlinedInput id="email" type="text" sx={{ borderRadius: '29px', height: '35px' }} {...register('email')} />
              </FormControl>

              <InputLabel htmlFor="celular">
                {idioma ? 'Phone' : 'Celular'}:
              </InputLabel>
              <FormControl>
                <OutlinedInput id="celular" type="text" sx={{ borderRadius: '29px', height: '35px' }} {...register('celular')} />
              </FormControl>

              <InputLabel htmlFor="mensaje">
                {idioma ? 'Message' : 'Mensaje'}:
              </InputLabel>
              <FormControl>
                <TextField
                  multiline
                  rows={3}
                  variant="outlined"
                  {...register('mensaje')}
                />
              </FormControl>
            </Box>
            <Button type="submit" style={{ color: 'white', backgroundColor: '#E89241', width: '100%' }}>
              {idioma ? 'Send' : 'Enviar'}
            </Button>
          </form>

        </Grid>

      </Grid>
    </>
  )
}

export default Contactenos