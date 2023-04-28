import React, { useEffect, useState } from 'react'
import './../style.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import usuarioBD from '../../../../apis/usuarios'
const MySwal = withReactContent(Swal)
const URL = 'http://127.0.0.1:8000/api/v1/tarifa'

const TarifasAdmin = () => {
    const [tarifas, setTarifas] = useState()
    const [estado, setEstado] = useState(false)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setEstado(false)
        usuarioBD.get()
            .then(res => setTarifas(res.data))
            .catch(err => console.log(err))
    }, [estado])
    const columns = [
        {
            name: 'Nombre referencial',
            sortable: true,
            cell: row => {
                return (
                    <div style={{ margin: '10px' }}>
                        {
                            row?.razon_social
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
                        {
                            row?.ruc
                        }
                    </div>
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
                        <button className='btn btn-success' onClick={() => activeUser(row?.id)}>
                            Activar
                        </button>
                        <button className='btn btn-warning' onClick={() => desactiveUser(row?.id)}>
                            Desactivar
                        </button>
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
            <DataTable
                title="Administrar Usuarios"
                columns={columns}
                data={tarifas}
                pagination
                selectableRows
            />
        </div>
    )
}

export default TarifasAdmin