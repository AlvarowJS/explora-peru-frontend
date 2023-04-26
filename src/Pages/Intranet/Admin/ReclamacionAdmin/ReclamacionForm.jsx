import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

const ReclamacionForm = ({
    modal, image, toggle, handleSubmit, watch,
    setImgData, imgData,
    submit, register, reset,
}) => {
    return (
        <Modal show={modal} onHide={toggle} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Ver Reclamo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(submit)} className='reclamacion'>
              
                    <h3>1. INFORMACIÓN DEL CONSUMIDOR RECLAMANTE</h3>
                    <div class="row">
                        <div class="col-4">
                            <label htmlFor="nombre_completo">NOMBRE COMPLETO (*):</label>
                            <input type="text" class="form-control"
                                {...register('nombre_completo')} required
                            />
                        </div>
                        <div class="col-4">
                            <label htmlFor="dni">DNI / CE (*):</label>
                            <input type="text" class="form-control" id='dni'
                                {...register('dni')} required />
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
                            <input type="email" class="form-control" id='email'
                                {...register('email')} required />
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
                                {...register('domicilio')} required />
                        </div>
                        <div class="col-4">
                            <label htmlFor="pais">PAÍS:</label>
                            <input type="text" class="form-control" id='pais'
                                {...register('pais')} />
                        </div>

                    </div>
                    <h3>2. IDENTIFICACIÓN DEL BIEN CONTRATADO</h3>
                    <div class="row">
                        <div class="col-8">
                            <label htmlFor="relacion">BIEN / SERVICIO:</label>
                            <select type="text" class="form-control"
                                {...register('relacion')} >
                                <option value='producto'>Producto</option>
                                <option value='servicio'>Servicio</option>
                            </select>
                        </div>
                        <div class="col-2">
                            <label htmlFor="monto_reclamado">MONTO RECLAMADO:</label>
                            <input type="text" class="form-control"
                                {...register('monto_reclamado')} />
                        </div>
                        <div class="col-2">
                            <label htmlFor="moneda_tipo">MONEDA:</label>
                            <select type="text" class="form-control"
                                {...register('moneda_tipo')}>
                                <option value='producto'>S/.</option>
                                <option value='servicio'>US $</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label htmlFor="descripcion">DESCRIPCIÓN(*)</label>
                            <input type="text" class="form-control"
                                {...register('descripcion')} required />
                        </div>
                    </div>
                    <h3>3. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR</h3>
                    <div class="form-group">
                        <label for="accion">ELIJA LA ACCIÓN QUE DESEA REALIZAR (*):</label>
                        <select class="form-control" id="accion" {...register('accion')}>
                            <option value='reclamo'>Reclamo</option>
                            <option value='queja'>Queja</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="accion">DETALLE (*):</label>
                        <textarea class="form-control" id="detalle" rows="3" {...register('detalle')} required>

                        </textarea>
                        <p>   Solo se permite de 10 a 1000 caracteres, incluido los saltos de línea | 998</p>

                    </div>
                    <div class="form-group">
                        <label for="pedido">PEDIDO (*):</label>
                        <textarea class="form-control" id="pedido" rows="3" {...register('pedido')} required>

                        </textarea>
                        <p> Solo se permite de 10 a 1000 caracteres, incluido los saltos de línea | 998</p>

                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={onHide}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={onSubmit}>
                    Guardar Cambios
                </Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default ReclamacionForm