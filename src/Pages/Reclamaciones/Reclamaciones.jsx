import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './Reclamaciones.css'
const Reclamaciones = () => {
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1; //Recuerda que los meses empiezan en 0
    let anio = fechaActual.getFullYear();
    let today = dia + mes + anio

    const { handleSubmit, register, reset, watch } = useForm()
    const submit = () => {

    }
    return (
        <div>
            <aside className='recla'>

                <h1>Libro de Reclamaciones</h1>
                <br />
                <p>PERU EXPLORA RUC: </p>
                <p>DIRECCION: </p>
                <br />
                <p>Fecha: {today}</p>

                <form onSubmit={handleSubmit(submit)} className='reclamacion'>
                    <h3>1. INFORMACIÓN DEL CONSUMIDOR RECLAMANTE</h3>
                    <div class="row">
                        <div class="col-4">
                            <label htmlFor="nombre_completo">NOMBRE COMPLETO (*):</label>
                            <input type="text" class="form-control"
                                {...register('nombre_completo')}
                            />
                        </div>
                        <div class="col-4">
                            <label htmlFor="dni">DNI / CE (*):</label>
                            <input type="text" class="form-control" id='dni'
                                {...register('dni')} />
                        </div>
                        <div class="col-4">
                            <label htmlFor="telefono">TELEFÓNO:</label>
                            <input type="text" class="form-control" id='telefono'
                                {...register('telefono')} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <label htmlFor="email">EMAIL (*):</label>
                            <input type="text" class="form-control" id='email'
                                {...register('email')} />
                        </div>
                        <div class="col-4">
                            <label htmlFor="padre">PADRE O MADRE : (MENORES DE EDAD):</label>
                            <input type="text" class="form-control"
                                {...register('padre')} />
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-8">
                            <label htmlFor="domicilio">DOMICILIO (*):</label>
                            <input type="text" class="form-control" id='domicilio'
                                {...register(domicilio)} />
                        </div>
                        <div class="col-4">
                            <label htmlFor="descripcion_spanish">PAÍS:</label>
                            <input type="text" class="form-control" id='pais'
                                {...register(pais)} />
                        </div>

                    </div>
                    <h3>2. IDENTIFICACIÓN DEL BIEN CONTRATADO</h3>
                    <div class="row">
                        <div class="col-8">
                            <label htmlFor="descripcion_spanish">BIEN / SERVICIO:</label>
                            <select type="text" class="form-control"
                                {...register()} >
                                <option>Producto</option>
                                <option>Servicio</option>
                            </select>

                        </div>
                        <div class="col-2">
                            <label htmlFor="descripcion_spanish">MONTO RECLAMADO:</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-2">
                            <label htmlFor="descripcion_spanish">MONEDA:</label>
                            <input type="text" class="form-control"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label htmlFor="descripcion_spanish">DESCRIPCIÓN(*)</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <h3>3. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR</h3>
                    <div class="form-group">
                        <label for="accion">ELIJA LA ACCIÓN QUE DESEA REALIZAR (*):</label>
                        <select class="form-control" id="accion">
                            <option value='reclamo'>Reclamo</option>
                            <option value='queja'>Queja</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="accion">DETALLE (*):</label>
                        <textarea class="form-control" id="pedido" rows="3"></textarea>
                        <p>   Solo se permite de 10 a 1000 caracteres, incluido los saltos de línea | 998</p>

                    </div>
                    <div class="form-group">
                        <label for="pedido">PEDIDO (*):</label>
                        <textarea class="form-control" id="pedido" rows="3"></textarea>
                        <p> Solo se permite de 10 a 1000 caracteres, incluido los saltos de línea | 998</p>

                    </div>

                    <button className='btn btn-primary m-4'>Enviar</button>
                    <button className='btn btn-secondary'>Cancelar</button>
                </form>
            </aside>
        </div>
    )
}

export default Reclamaciones