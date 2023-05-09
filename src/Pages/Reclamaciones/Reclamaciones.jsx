import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './Reclamaciones.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const URL = 'https://auxbackend.peruexploring.pe/api/v1/libros'
const Reclamaciones = () => {
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1; //Recuerda que los meses empiezan en 0
    let anio = fechaActual.getFullYear();
    let today = dia + '/ ' + mes + '/ ' + anio
    const defaulForm = {
        accion: '',
        descripcion: '',
        detalle: '',
        dni: '',
        domicilio: '',
        email: '',        
        moneda_tipo: '',
        monto_reclamado: '',
        nombre_completo: '',
        padre: '',
        pais: '',
        pedido: '',
        relacion: '',
        telefono: ''
    }
    const { handleSubmit, register, reset, watch } = useForm()
    const submit = data => {

        return MySwal.fire({
            title: '¿Estás seguro de enviar el reclamo?',
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
                    title: 'Reclamo Enviado!',
                    text: 'Atenderemos sus sugerencias :)',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                })
                axios.post(URL, data)
                    .then(res => {
                        reset(defaulForm)
                    })
                    .catch(err => console.log(err))
            }
        })

        // //////

    }
    return (
        <div>
            <aside className='recla'>

                <h1>Libro de Reclamaciones</h1>
                <br />
                <p>PERU EXPLORING OPERADORES TURISTICOS E.I.R.L - RUC: 20608098977</p>
                <p>DIRECCIÓN: Calle San Manuel 174, Urb. Santa Luisa - Los Olivos
Lima, Perú</p>
                <p>Fecha: {today}</p>

                <form onSubmit={handleSubmit(submit)} className='reclamacion'>
                    <h3>1. INFORMACIÓN DEL CONSUMIDOR RECLAMANTE</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="nombre_completo">NOMBRE COMPLETO (*):</label>
                            <input type="text" className="form-control"
                                {...register('nombre_completo')} required
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="dni">DNI / CE (*):</label>
                            <input type="text" className="form-control" id='dni'
                                {...register('dni')} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="telefono">TELEFÓNO:</label>
                            <input type="text" className="form-control" id='telefono'
                                {...register('telefono')} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <label htmlFor="email">EMAIL (*):</label>
                            <input type="email" className="form-control" id='email'
                                {...register('email')} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="padre">PADRE O MADRE : (MENORES DE EDAD):</label>
                            <input type="text" className="form-control"
                                {...register('padre')} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <label htmlFor="domicilio">DOMICILIO (*):</label>
                            <input type="text" className="form-control" id='domicilio'
                                {...register('domicilio')} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="pais">PAÍS:</label>
                            <input type="text" className="form-control" id='pais'
                                {...register('pais')} />
                        </div>

                    </div>
                    <h3>2. IDENTIFICACIÓN DEL BIEN CONTRATADO</h3>
                    <div className="row">
                        <div className="col-md-8">
                            <label htmlFor="relacion">BIEN / SERVICIO:</label>
                            <select type="text" className="form-control"
                                {...register('relacion')} >
                                <option value='producto'>Producto</option>
                                <option value='servicio'>Servicio</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="monto_reclamado">MONTO RECLAMADO:</label>
                            <input type="text" className="form-control"
                                {...register('monto_reclamado')} />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="moneda_tipo">MONEDA:</label>
                            <select type="text" className="form-control"
                                {...register('moneda_tipo')}>
                                <option value='producto'>S/.</option>
                                <option value='servicio'>US $</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="descripcion">DESCRIPCIÓN(*)</label>
                            <input type="text" className="form-control"
                                {...register('descripcion')} required />
                        </div>
                    </div>
                    <h3>3. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR</h3>
                    <div className="form-group">
                        <label for="accion">ELIJA LA ACCIÓN QUE DESEA REALIZAR (*):</label>
                        <select className="form-control" id="accion" {...register('accion')}>
                            <option value='reclamo'>Reclamo</option>
                            <option value='queja'>Queja</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="accion">DETALLE (*):</label>
                        <textarea className="form-control" id="detalle" rows="3" {...register('detalle')} required>

                        </textarea>
                        <p>   Solo se permite de 10 a 1000 caracteres, incluido los saltos de línea | 998</p>

                    </div>
                    <div className="form-group">
                        <label for="pedido">PEDIDO (*):</label>
                        <textarea className="form-control" id="pedido" rows="3" {...register('pedido')} required>

                        </textarea>
                        <p> Solo se permite de 10 a 1000 caracteres, incluido los saltos de línea | 998</p>

                    </div>

                    <button className='btn btn-primary m-4'>Enviar</button>
                    {/* <button className='btn btn-secondary'>Cancelar</button> */}
                </form>
            </aside>
        </div>
    )
}

export default Reclamaciones