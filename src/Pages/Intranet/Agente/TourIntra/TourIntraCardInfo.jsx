import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import toursBD from '../../../../apis/tours';
import './TourInfo.css'
const TourIntraCardInfo = () => {

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
    return (
        <div className='container'>
            <Link to='/tour-intranet'>
                <i className='bx bx-left-arrow-alt mt-4'></i>   Regresar
            </Link>
            <h2>{tour?.titulo}</h2>

            <div className='tourinfo'>
                <img src={tourImg} alt="" />
                <div className='tourinfo__info'>
                    <h4>{tour?.titulo}</h4>
                    <p>{tour?.descripcion_spanish} </p>
                </div>
            </div>
        </div>
    )
}

export default TourIntraCardInfo