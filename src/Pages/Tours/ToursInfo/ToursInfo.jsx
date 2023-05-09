import React, { useEffect, useState } from 'react'
import portada from './../../../assets/carril/aboutinfo_3.jpeg'
import './../Tours.css'
import { Link, useParams } from 'react-router-dom'
import toursBD from '../../../apis/tours';

const ToursInfo = ({ idioma }) => {

    const id = useParams();
    const [tour, setTour] = useState()
    const [tourImg, setTourImg] = useState()
    useEffect(() => {
        toursBD.get(`/${id.id}`)
            .then(res => {
                setTour(res.data)
                setTourImg(`https://auxbackend.peruexploring.pe/storage/tours/${res.data.titulo}/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className='tours'>
                <img src={portada} alt="" className='tours__img--info' />
            </div>
            <aside className='tours__id'>
                <Link to="/tours" style={{}}>
                    <i className='bx bx-left-arrow-alt' style={{marginTop: "20px"}}></i>
                    Volver a los tours
                </Link>
                <h2>{tour?.titulo}</h2>
                <div className='tours__id--card'>
                    <article>
                        <p>
                            {
                                idioma == 'spanish' ?
                                    tour?.descripcion_spanish
                                    :
                                    tour?.descripcion_english
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
                                    tour?.incluye_spanish.split('\n').map((item, index) => (
                                        <div key={index}>
                                            {item}
                                            <br />
                                        </div>
                                    ))
                                    :
                                    tour?.incluye_english.split('\n').map((item, index) => (
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

                            {tour?.duracion} horas
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

export default ToursInfo