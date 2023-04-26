import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Noticia.css'
const NoticiasIntraCard = ({ noticia }) => {
    const navigate = useNavigate()
    let img = noticia.img
    img = `http://127.0.0.1:8000/storage/noticias/${img}`
    const vernoticia = (id) => {
        navigate(`/noticia-intranet/${id}`)
    }
    return (
        <div className='noticiaintra__card' onClick={() => vernoticia(noticia.id)}>
            <div className='noticiaintra__card-img'>
                <img src={img} alt="" />
            </div>
            <div className='noticiaintra__card-desc'>
                <h2>{noticia?.titulo}</h2>
                <p>{(noticia?.nota).substring(0, 100) + "..."}</p>

            </div>

        </div>
    )
}

export default NoticiasIntraCard