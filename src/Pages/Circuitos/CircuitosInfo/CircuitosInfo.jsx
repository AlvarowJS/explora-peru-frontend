import React, { useEffect, useState } from 'react'
import portada from './../../../assets/carril/aboutinfo_3.jpeg'
import './../Circuitos.css'
import { useParams } from 'react-router-dom'
import toursBD from '../../../apis/tours';
import circuitosBD from '../../../apis/circuitos';

const CircuitosInfo = ({ idioma }) => {

    const id = useParams();
    const [circuito, setCircuito] = useState()
    const [tourImg, setTourImg] = useState()
    useEffect(() => {
        circuitosBD.get(`/${id.id}`)
            .then(res => {
                setCircuito(res.data)
                setTourImg(`http://127.0.0.1:8000/storage/circuitos/${res.data.titulo}/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(circuito, "as")
    return (
        <>
            <div className='tours'>
                <img src={portada} alt="" className='tours__img--info' />
            </div>
            <aside className='tours__id'>
                <h2>{circuito?.titulo}</h2>
                <div className='tours__id--card'>
                    <article>
                        <p>
                            {
                                idioma == 'spanish' ?
                                    circuito?.descripcion_spanish
                                    :
                                    circuito?.descripcion_english
                            }
                        </p>
                        <b>
                            {
                                idioma == 'spanish' ?
                                'Incluye' : 'Includes'
                            }
                            
                        </b>
                        <p>
                            {
                                idioma == 'spanish' ?
                                    circuito?.incluye_spanish.split('\n').map((item, index) => (
                                        <div key={index}>
                                            {item}
                                            <br />
                                        </div>
                                    ))
                                    :
                                    circuito?.incluye_english.split('\n').map((item, index) => (
                                        <div key={index}>
                                            {item}
                                            <br />
                                        </div>
                                    ))

                            }
                        </p>
                        <b>
                            {
                                idioma == 'spanish' ?
                                'Duración' : 'Duration'
                            }
                        </b>
                        <p>
                            
                            {circuito?.duracion} horas
                        </p>
                    </article>
                    <aside>
                        <img src={tourImg} alt="" />
                    </aside>
                </div>
            </aside>


        </>
    )
}

export default CircuitosInfo