import React, { useEffect, useState } from 'react'
import './../style.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import toursBD from '../../../../apis/tours'
const URL = 'http://127.0.0.1:8000/api/v1/tours'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import TourForm from './TourForm'
const MySwal = withReactContent(Swal)

const TourAdmin = () => {
    const [tours, setTours] = useState()
    const [estado, setEstado] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    useEffect(() => {
        setEstado(false)
        toursBD.get()
            .then(res => setTours(res.data))
            .catch(err => console.log(err))
    }, [estado])


    const updateTourById = (id) => {
        console.log(id)
    }
    const deleteTourById = (id) => {
        return MySwal.fire({
            title: '¿Estás seguro de eliminar?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-danger ms-1'
            },
            buttonsStyling: false
        }).then(function (result) {
            setEstado(true)
            if (result.value) {
                MySwal.fire({
                    icon: 'success',
                    title: 'Eliminado!',
                    text: 'El registro a sido eliminado.',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                })
                axios.delete(`${URL}/${id}/`)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => console.log(err))
            }
        })
    }
    const columns = [
        {
            name: 'Titulo',
            selector: 'titulo',
            sortable: true,
        },
        {
            name: 'Descripcion Español',

            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.descripcion_spanish
                        }
                    </div>
                )
            }
        },
        {
            name: 'Descripcion English',

            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.descripcion_english
                        }
                    </div>
                )
            }
        },
        {
            name: 'Incluye',
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.incluye_spanish
                        }
                    </div>
                )
            }
        },
        {
            name: 'Actions',
            sortable: true,
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='local_buttons'>
                        <button className='btn btn-warning mx-2' onClick={() => updateTourById(row?.id)}>
                            <i class='bx bx-edit-alt' ></i>
                        </button>
                        <button className='btn btn-danger' onClick={() => deleteTourById(row?.id)}>
                            <i class='bx bx-trash' ></i>
                        </button>

                    </div>
                )
            }
        }

    ]

    return (
        <>
            <div className='container'>
                <button onClick={handleShowModal} className='btn btn-success m-2'>Registrar Tour</button>
                <DataTable
                    title="Administrar Tours"
                    columns={columns}
                    data={tours}
                    pagination
                    selectableRows
                />
                <TourForm
                    show={showModal}
                    onHide={handleCloseModal}
                    title="My Modal"
                    body="This is the body of my modal."
                    onSubmit={() => console.log('Modal submitted.')}
                />
            </div>
        </>
    )
}

export default TourAdmin