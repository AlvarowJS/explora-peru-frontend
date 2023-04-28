import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import lugaresBD from './../../../../apis/lugares'

const TourForm = ({
    modal, image, toggle, handleSubmit, watch,
    setImgData, imgData,
    submit, register, reset,
}) => {
    
    const watchImg = watch('img');
    const [options, setOptions] = useState()

    const handleFileChange = (e) => {
        setImgData(e.target.files[0])

        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        document.getElementById('preview-img').src = imgUrl;


    };
    const crearLugar = () => {}
    useEffect(() => {
        lugaresBD.get()
            .then(res => setOptions(res.data))
            .catch(err => console.log(err))
    }, [])

    
    // const subirArchivo = e => {
    //     setImgData(e)
    // }

    return (
        <Modal show={modal} onHide={toggle} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Tour</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="form-group m-4">
                        <label htmlFor="titulo">Titulo</label>
                        <input type="text" className="form-control" id="titulo"
                            {...register('titulo')}
                            placeholder="Ingresar el titulo del tour"
                        />
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="descripcion_spanish">Descripcion Español</label>
                        <textarea className="form-control" id="descripcion_spanish" rows="3" {...register('descripcion_spanish')}></textarea>
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

                    <div className="form-group m-4">
                        <label htmlFor="lugar">Lugar</label>
                        <select class="form-select" id="lugares" {...register("lugare_id")}>
                            {
                                options?.map(option => (
                                    <option key={option.id} value={option.id}>{option.nombre}</option>
                                ))
                            }
                        </select>
                        <button className='btn btn-primary my-2' onClick={crearLugar()}>Crear Lugar</button>
                    </div>

                    <div className="form-group m-4">
                        <label htmlFor="img">Subir Imagen </label>
                        {/* <input type='file' className="form-control" id="img" {...register('img')} /> */}
                        <input
                            type='file'
                            className='form-control'
                            id='img'
                            // onChange={() => subirArchivo(e.target.files)}
                            {...register('img')}
                            onChange={handleFileChange}


                        />
                        {watchImg && <img id='preview-img' src={`http://127.0.0.1:8000/storage/tours/${image}`} alt='preview' style={{ width: '200px', margin: '10px' }} />}
                    </div>
                    <button className='btn btn-primary m-4'>Enviar</button>
                    <button className='btn btn-secondary' onClick={toggle}>Cancelar</button>
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

export default TourForm