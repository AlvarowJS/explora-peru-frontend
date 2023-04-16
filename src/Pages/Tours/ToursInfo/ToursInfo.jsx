import React, { useEffect, useState } from 'react'
import portada from './../../../assets/carril/aboutinfo_3.jpeg'
import './../Tours.css'
import { useParams } from 'react-router-dom'
import toursBD from '../../../apis/tours';

const ToursInfo = ({ idioma }) => {

    const id = useParams();
    const [tour, setTour] = useState()
    const [tourImg, setTourImg] = useState()
    useEffect(() => {
        toursBD.get(`/${id.id}`)
            .then(res => {
                setTour(res.data)
                setTourImg(`http://127.0.0.1:8000/storage/tours/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(tour, "as")
    return (
        <>
            <div className='tours'>
                <img src={portada} alt="" className='tours__img--info' />
            </div>
            <aside className='tours__id'>
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
                            {tour?.duracion}
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