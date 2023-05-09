import React from 'react'
import './Contactenos.css'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
const MySwal = withReactContent(Swal)
const URL = 'https://auxbackend.peruexploring.pe/api/v1/contactenos'
const Contactenos = ({ idioma, idiomaGlobal }) => {

  const { handleSubmit, register, reset, watch } = useForm()
  const defaultForm = {
    razon_social: '',
    ruc: '',
    telefono: '',
    direccion: '',
    email: ''
  }
  const submit = data => {

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
    <div className='sobrenosotros__contacto'>
      <div className='sobrenosotros__contacto--form'>
        <h2>
          {idioma == 'spanish' || idiomaGlobal == 'spanish' ? 'Contáctanos' : 'About us'}

        </h2>
        <b>
          {
            idioma == 'spanish' || idiomaGlobal == 'spanish' ? '¿Estas interesado en nuestros servicios? Escribenos' : 'Are you interested in our service? Let us know'
          }


        </b>
        <form onSubmit={handleSubmit(submit)}>
          <div className='sobrenosotros__contacto--input'>
            <label>
              {idioma == 'spanish' || idiomaGlobal == 'spanish' ?
                'Nombres :' : 'Name :'}
            </label>
            <input type="text"
              {...register('nombre')} />
          </div>
          <div className='sobrenosotros__contacto--input'>
            <label>
              Email :
            </label>
            <input type="text"
              {...register('email')} />
          </div>
          <div className='sobrenosotros__contacto--input'>
            <label>
              {idioma == 'spanish' || idiomaGlobal == 'spanish' ?
                'Celular :' : 'Phone :'}
            </label>
            <input type="text"
              {...register('celular')} />
          </div>
          <div className='sobrenosotros__contacto--input'>
            <label>
              {idioma == 'spanish' || idiomaGlobal == 'spanish' ?
                'Mensaje :' : 'Message :'}
            </label>
            <textarea type="text"
              {...register('mensaje')}>
            </textarea>
          </div>
          <button className='sobrenosotros__contacto--button'>
            {idioma == 'spanish' || idiomaGlobal == 'spanish' ?
              'Enviar' : 'Send'}
          </button>
        </form>
      </div>
      <div className='sobrenosotros__contacto--info'>
        <div className='sobrenosotros__contacto--dato'>
          <i className='bx bx-time-five' style={{fontSize: "40px"}}></i>
          <div>
            <p>
              {idioma == 'spanish' || idiomaGlobal == 'spanish' ?
                'lunes a Viernes ' : 'Monday to Friday'}
            </p>
            <p>8:00 am - 6:00 pm</p>
          </div>
        </div>
        <div className='sobrenosotros__contacto--dato'>
          <i className='bx bx-phone-call' style={{fontSize: "40px"}}></i>
          Teléfono: (01) 7515733<br />
          Reservas: +51 974581054<br />
          Atención 24H: +51 924 696 906 <br />
        </div>
        <br />
        <div className='sobrenosotros__contacto--dato'>
          <i className='bx bx-envelope' style={{fontSize: "40px"}}></i>
          reservas1@peruexploring.pe <br />
          reservas2@peruexploring.pe
        </div>
        <div className='sobrenosotros__contacto--dato'>
          <i className='bx bx-map' style={{fontSize: "40px"}}></i>
          Calle San Manuel 174, Urb. Santa Luisa - Los Olivos <br />
          Lima, Perú
        </div>
      </div>
      {/* <div className='sobrenosotros__contacto--info'>
      <div className='sobrenosotros__contacto--icons'>
        
      </div>
    </div> */}
    </div>
  )
}

export default Contactenos