import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const TourForm = ({ show, onHide, body, onSubmit, title }) => {
    return (
        <Modal show={show} onHide={onHide} size='lg'
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group m-4">
                        <label for="exampleFormControlInput1">Titulo</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingresar el titulo del tour"/>
                    </div>
               
                    <div className="form-group m-4">
                        <label for="exampleFormControlTextarea1">Descripcion Español</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className="form-group m-4">
                        <label for="exampleFormControlTextarea1">Descripcion Ingles</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    
                    <div className="form-group m-4">
                        <label for="exampleFormControlTextarea1">Incluye Español</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className="form-group m-4">
                        <label for="exampleFormControlTextarea1">Incluye Ingles</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className="form-group m-4">
                        <label for="exampleFormControlTextarea1">Duración</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className="form-group m-4">
                        <label for="exampleFormControlTextarea1">Subir Imagen </label>
                        <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <button className='btn btn-primary m-4'>Enviar</button>
                    <button className='btn btn-secondary' onClick={onHide}>Cancelar</button>
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