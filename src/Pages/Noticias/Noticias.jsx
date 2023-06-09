import React, { useEffect, useState } from 'react'
import noticia from './../../assets/carril/mice.png'
import './Noticias.css'
import noticiasBD from '../../apis/noticias'
import NoticiaCard from '../../Components/Noticia/NoticiaCard'
const Noticias = ({idiomaGlobal}) => {
  const [noticias, setNoticias] = useState()
  useEffect(() => {
    noticiasBD.get()
      .then(res => {
        console.log(res?.data)
        setNoticias(res?.data)
      })
      .catch(err => console.log(err))
  }, [])
  console.log(noticias)
  return (
    <div>
      <div className='noticias'>
        <img className='noticias__img' src={noticia} alt="" />
      </div>
      <aside className='noticias__cuerpo'>
        {
          idiomaGlobal == 'spanish' ? <h2>Noticias</h2>
          : <h2>News</h2>
        }
        
        <div className='noticias__cards'>
          {noticias?.map(noticia => (
            <NoticiaCard
              key={noticia.id}
              noticia={noticia}
            />
          ))}

        </div>
      </aside>
    </div>
  )
}

export default Noticias