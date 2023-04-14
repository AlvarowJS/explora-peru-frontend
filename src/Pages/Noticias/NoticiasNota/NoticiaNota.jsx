import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import noticiaImg from './../../../assets/carril/mice.png'
import noticiasBD from '../../../apis/Noticias';
import './../Noticias.css'
const NoticiaNota = () => {
    const [noticia, setNoticia] = useState()
    const [imgNew, setImgNew] = useState()
    const id = useParams();

    useEffect(() => {
        noticiasBD.get(`/${id.id}`)
            .then(res => {
                setNoticia(res.data)
                setImgNew(`http://127.0.0.1:8000/storage/noticias/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])


    console.log(id.id, "Dasd")
    return (
        <>
            <div className='noticias'>
                <img className='noticias__img' src={noticiaImg} alt="" />
            </div>
            <div className='noticias__card--info'>
                <h2>{noticia?.titulo}</h2>
                <img src={imgNew} alt="" />
                <p>
                    {noticia?.nota}
                </p>
            </div>
        </>
    )
}

export default NoticiaNota