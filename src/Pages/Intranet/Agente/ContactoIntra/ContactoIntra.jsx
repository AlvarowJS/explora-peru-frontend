import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const ContactoIntra = () => {
  const { handleSubmit, register, reset, watch } = useForm()
  const submit = data => {
  }
  return (

    <div className='container'>
      <h2>Contáctanos</h2>
      <p>¿Estas interesado en nuestros servicios? Escribenos</p>
      <form onSubmit={handleSubmit(submit)} className='reclamacion'>
        <div class="row">
          <div class="col-4">
            <label htmlFor="email">Nombre: </label>
            <input type="email" class="form-control" id='email'
              {...register('email')} required />
          </div>


        </div>
        <div class="row">
          <div class="col-8">
            <label htmlFor="email">Email:</label>
            <input type="email" class="form-control" id='email'
              {...register('email')} required />
          </div>
          <div class="col-4">
            <label htmlFor="padre">Celular:</label>
            <input type="text" class="form-control"
              {...register('padre')} />
          </div>

        </div>
        <div class="row">
          <div class="col-12">
            <label htmlFor="email">Mensaje:</label>
            <textarea type="email" class="form-control" id='email'
              {...register('email')} required >
            </textarea>
          </div>          
        </div>
        <button className='btn btn-primary my-4' style={{backgroundColor: '#5B2491', borderColor: '#5B2491'}}>Enviar</button>
      </form>



    </div>
  )
}

export default ContactoIntra