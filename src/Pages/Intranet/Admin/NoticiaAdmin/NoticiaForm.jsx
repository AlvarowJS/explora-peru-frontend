import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

const NoticiaForm = ({
    modal, image, toggle, handleSubmit, watch,
    setImgData, imgData,
    submit, register, reset,
}) => {
    const watchImg = watch('img');
    const [options, setOptions] = useState()
    const handleFileChange = (e) => {
        console.log("hola?")
        setImgData(e.target.files[0])

        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        document.getElementById('preview-img').src = imgUrl;


    };

    return (
        <Modal show={modal} onHide={toggle} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Noticias</Modal.Title>
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
                        <label htmlFor="nota">Nota</label>
                        <textarea className="form-control" id="descripcion_spanish" rows="3" {...register('nota')}></textarea>
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
                        {watchImg && <img id='preview-img' src={`http://127.0.0.1:8000/storage/noticias/${image}`} alt='preview' style={{ width: '200px', margin: '10px' }} />}
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

export default NoticiaForm