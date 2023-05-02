import React, { useEffect, useState } from 'react'
import portada from './../../assets/carril/about_3.png'
import './Circuitos.css'
import circuitosBD from '../../apis/circuitos'
import Contactenos from '../../Components/Contactanos/Contactenos'
import CardCircuito from '../../Components/Circuitos/CardCircuito'
const Circuitos = ({ idioma }) => {
  const [circuitos, setCircuitos] = useState()

  useEffect(() => {
    circuitosBD.get()
      .then(res => setCircuitos(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className='circuitos'>
        <img src={portada} alt="" className='circuitos__img' />
      </div>
      <div className='circuitos__body'>
        <h2>Circuitos</h2>

        <div className='circuitos__filters'>
          <div className='circuitos__filters--buscador'>
            <input type="text" /><i class='bx bx-search-alt-2'></i>
          </div>
          <div className='circuitos__filters--select'>
            <span>Buscar información en </span>
            <select name="" id="">
              <option value="dog">Lima</option>
              <option value="cat">Huanuco</option>
            </select>
          </div>
        </div>
        <div className='circuitos__catalogo'>
          {circuitos?.map(circuito => (
            <CardCircuito
              key={circuito.id}
              circuito={circuito}
              idioma={idioma}
            />
          ))}
        </div>
        <Contactenos />
      </div>
    </>
  )
}

export default Circuitos