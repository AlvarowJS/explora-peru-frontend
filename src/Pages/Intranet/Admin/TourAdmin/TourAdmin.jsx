import React, { useEffect, useState } from 'react'
import './../style.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import toursBD from '../../../../apis/tours'
const URL = 'http://127.0.0.1:8000/api/v1/tours'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import TourForm from './TourForm'
import { useForm } from 'react-hook-form'
const MySwal = withReactContent(Swal)

const TourAdmin = () => {
    const [tours, setTours] = useState()
    const [modal, setModal] = useState(false)
    const [estado, setEstado] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState()
    const [imgData, setImgData] = useState()
    const [prueba, setPrueba] = useState(null)

    const { handleSubmit, register, reset, watch } = useForm()
    const [objUpdate, setObjUpdate] = useState()

    const toggle = () => {
        setModal(!modal)
        if (objUpdate !== undefined) {
            reset(defaultValuesForm)
        }
    };

    useEffect(() => {
        setEstado(false)
        toursBD.get()
            .then(res => setTours(res.data))
            .catch(err => console.log(err))
    }, [estado])

    const createTour = newUser => {
        axios.post(URL, newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        // .finally(() => console.log(res.data))
    }
    const defaultValuesForm = {
        titulo: '',
        descripcion_spanish: '',
        descripcion_english: '',
        incluye_spanish: '',
        incluye_english: '',
        duracion: '',
        img: ''
    }

    const updateTour = (id, data) => {
        // console.log(prueba, 'check1')
        // console.log(imgData, 'check')
        const formData = new FormData();
        formData.append('img', imgData);
        const updatedData = { ...data, img: imgData };

        axios.patch(`${URL}/${id}`, updatedData)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const updateTourById = (id) => {

        toggle.call()
        toursBD.get(`/${id}`)
            .then(res => {
                setObjUpdate(res?.data)
                const object = res?.data
                reset(object)
            })
            .catch(err => console.log(err))

    }

    const submit = data => {
        if (objUpdate !== undefined) {

            updateTour(objUpdate.id, data)
            reset(defaultValuesForm)
            toggle.call()

        } else {
            reset(defaultValuesForm)
            createTour(data)
            toggle.call()
        }
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
                <button onClick={toggle} className='btn btn-success m-2'>Registrar Tour</button>
                <DataTable
                    title="Administrar Tours"
                    columns={columns}
                    data={tours}
                    pagination
                    selectableRows
                />
                <TourForm
                    toggle={toggle}
                    modal={modal}
                    setModal={setModal}
                    handleSubmit={handleSubmit}
                    submit={submit}
                    register={register}
                    reset={reset}
                    watch={watch}
                    image={image}
                    setImgData={setImgData}
                    imgData={imgData}
                    setPrueba={setPrueba}
                    prueba={prueba}
                />
            </div>
        </>
    )
}

export default TourAdmin