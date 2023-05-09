import React from 'react'
import { useForm } from 'react-hook-form'
import './Contactenos.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
const MySwal = withReactContent(Swal)
const URL = 'https://auxbackend.peruexploring.pe/api/v1/contactenos'
const Contactenos = () => {
    const { handleSubmit, register, reset, watch } = useForm()
    const submit = data => {
        const defaultForm = {
            nombre: '',
            email: '',
            celular: '',
            mensaje: '',
          }
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
        <div className='contacto'>
            <div>
                <p> Planea tu viaje con nosotros </p>
                <h2>Contáctanos</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <div className='contacto__datos'>
                        <div className='contacto__datos--input'>
                            <label htmlFor=""> Nombre: </label>
                            <input type="text"
                                {...register('nombre')} />
                        </div>
                        <div className='contacto__datos--input'>
                            <label htmlFor=""> Email: </label>
                            <input type="text"
                                {...register('email')} />
                        </div>
                        <div className='contacto__datos--input'>
                            <label htmlFor="">Celular: </label>
                            <input type="text"
                                {...register('celular')} />
                        </div>
                    </div>
                    <div className=''>
                        <div className='contacto__datos--caja'>
                            <label htmlFor=""> Mensaje:</label>
                            <textarea className='contacto__datos--mensaje' type="text" {...register('mensaje')} />
                        </div>
                    </div>
                    <button className='contacto__datos--boton' style={{color: "white"}}>Enviar</button>
                </form>
            </div>
        </div >
    )
}

export default Contactenos