import React, { useEffect, useState } from 'react'
import portada from './../../../assets/carril/about_3.png'
import './../Tours.css'
import { useParams } from 'react-router-dom'
import toursBD from '../../../apis/tours';

const ToursInfo = () => {

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
        <>
            <div className='tours'>
                <img src={portada} alt="" className='tours__img' />
            </div>
        </>
    )
}

export default ToursInfo