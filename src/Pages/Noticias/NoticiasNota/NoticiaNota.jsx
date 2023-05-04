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
                setImgNew(`https://backend.peruexploring.pe/storage/noticias/${res.data.img}`)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <div className='noticias'>
                <img className='noticias__img' src={noticiaImg} alt="" />
            </div>
            <div className='noticias__card--info'>
                <h2>{noticia?.titulo}</h2>
                <img src={imgNew} alt="" />
                <p>
                    {
                        // noticia?.nota
                        noticia?.nota.split('\n').map((item, index) => (
                            <div key={index}>
                                {item}
                                <br />
                            </div>
                        ))
                    }
                </p>
            </div>
        </>
    )
}

export default NoticiaNota