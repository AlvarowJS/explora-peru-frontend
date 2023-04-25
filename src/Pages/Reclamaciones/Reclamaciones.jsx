import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


const Reclamaciones = () => {
    const { handleSubmit, register, reset, watch } = useForm()
    const submit = () => {

    }
    return (
        <div>

            <p>Libro de Reclamaciones</p>
            <p>PERU EXPLORA RUC: </p>
            <p>DIRECCION: </p>
            <br />
            <br />
            <p>Fecha: </p>

            <form onSubmit={handleSubmit(submit)}>
                <h3>1. INFORMACIÓN DEL CONSUMIDOR RECLAMANTE</h3>
                <div className='form-row'>
                    <div className="form-group col-md-6">
                        <label htmlFor="nombre_completo">Nombre Completo</label>
                        <input type="text" className="form-control" id="nombre_completo"
                            {...register('nombre_completo')}
                            placeholder="Ingresar el titulo del tour"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="descripcion_spanish">Descripcion Español</label>
                        <input type="text" className="form-control" id="nombre_completo"
                            {...register('nombre_completo')}
                            placeholder="Ingresar el titulo del tour"
                        />
                    </div>
                </div>

                <div className="form-group m-4">
                    <label htmlFor="descripcion_english">Descripcion Ingles</label>
                    <textarea className="form-control" id="descripcion_english" rows="3" {...register('descripcion_english')}></textarea>
                </div>

                <div className="form-group m-4">
                    <label htmlFor="incluye_spanish">Incluye Español</label>
                    <textarea className="form-control" id="incluye_spanish" rows="3" {...register('incluye_spanish')}></textarea>
                </div>

                <div className="form-group m-4">
                    <label htmlFor="incluye_english">Incluye Ingles</label>
                    <textarea className="form-control" id="incluye_english" rows="3" {...register('incluye_english')}></textarea>
                </div>

                <div className="form-group m-4">
                    <label htmlFor="duracion">Duración</label>
                    <input type="text" className="form-control" id="duracion"
                        {...register('duracion')}
                        placeholder="Ingresar la duración"
                    />
                </div>

                <button className='btn btn-primary m-4'>Enviar</button>
                <button className='btn btn-secondary'>Cancelar</button>
            </form>
        </div>
    )
}

export default Reclamaciones