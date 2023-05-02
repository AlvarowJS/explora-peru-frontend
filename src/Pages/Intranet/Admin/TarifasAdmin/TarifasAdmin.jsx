import React, { useEffect, useState } from 'react'
import './../style.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import tarifaBD from '../../../../apis/tarifas'
import TarifasForm from './TarifasForm'
const MySwal = withReactContent(Swal)
const URL = 'http://127.0.0.1:8000/api/v1/tarifa'

const TarifasAdmin = () => {
    const [tarifas, setTarifas] = useState()
    const [estado, setEstado] = useState(false)
    const [modal, setModal] = useState(false)

    const { handleSubmit, register, reset, watch } = useForm()
    const [objUpdate, setObjUpdate] = useState()

    const toggle = () => {
        setModal(!modal)
        if (objUpdate !== undefined) {
            reset(defaultValuesForm)
        }
    };

    // const create = data => {
        
    //     console.log(imgData, 'check')
    //     const formData = new FormData();
    //     formData.append('img', imgData);
    //     formData.append('titulo', data.titulo);
    //     formData.append('descripcion_spanish', data.descripcion_spanish);
    //     formData.append('descripcion_english', data.descripcion_english);
    //     formData.append('incluye_english', data.incluye_english);
    //     formData.append('incluye_spanish', data.incluye_spanish);
    //     formData.append('lugare_id', data.lugare_id);
    //     formData.append('duracion', data.duracion);

    //     axios.post(URL, formData)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    //     // .finally(() => console.log(res.data))
    // }

    useEffect(() => {
        setEstado(false)
        tarifaBD.get()
            .then(res => setTarifas(res.data))
            .catch(err => console.log(err))
    }, [estado])
    const descargarTarifa = (archivo) => {
        window.open(`http://127.0.0.1:8000/storage/tarifario/${archivo}`, '_blank');

    }
    const columns = [
        {
            name: 'Nombre referencial',
            sortable: true,
            cell: row => {
                return (
                    <div style={{ margin: '10px' }}>
                        {
                            row?.nombre_tarifa
                        }
                    </div>
                )
            }
        },
        {
            name: 'Tarifario PDF',

            sortable: true,
            cell: row => {
                return (
                    <div>
                        <button className='btn btn-success' onClick={() => descargarTarifa(row?.archivo)}>
                            <i class='bx bx-file' style={{ fontSize: '30px' }}></i>
                        </button>

                    </div >
                )
            }
        },
        {
            name: 'Empresa Asociada',

            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.user.razon_social
                        }

                    </div >
                )
            }
        },
        {
            name: 'Empresa RUC',

            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            row?.user.ruc
                        }

                    </div >
                )
            }
        },
        {
            name: 'Fecha',
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {
                            // row?.created_at
                            new Date(row?.created_at).toLocaleDateString('es-ES')
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

                        <button className='btn btn-danger' onClick={() => deleteUserById(row?.id)}>
                            <i className='bx bx-trash' ></i>
                        </button>

                    </div>
                )
            }
        }

    ]
    return (
        <div className='container'>
            <button onClick={toggle} className='btn btn-success m-2'>Registrar Tarifa</button>
            <DataTable
                title="Administrar Usuarios"
                columns={columns}
                data={tarifas}
                pagination
                selectableRows
            />
            {/* <TarifasForm
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
            /> */}
        </div>
    )
}

export default TarifasAdmin