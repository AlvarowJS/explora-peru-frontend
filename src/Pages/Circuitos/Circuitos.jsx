import React, { useEffect, useState } from 'react'
import portada from './../../assets/carril/about_3.png'
import './Circuitos.css'
import circuitosBD from '../../apis/circuitos'
import Contactenos from '../../Components/Contactanos/Contactenos'
import CardCircuito from '../../Components/Circuitos/CardCircuito'
import lugaresBD from '../../apis/lugares'
const Circuitos = ({ idioma }) => {
  const [filterSelect, setFilterSelect] = useState()
  const [filter, setFilter] = useState()
  const [circuitos, setCircuitos] = useState()
  const [search, setSearch] = useState()
  const [lugars, setLugars] = useState()
  useEffect(() => {
    circuitosBD.get()
      .then(res => setCircuitos(res.data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    if (circuitos) {
      setFilter(circuitos?.filter(e => e.titulo.toLowerCase().indexOf(search?.toLowerCase()) !== -1))
    }
  }, [search])

  useEffect(() => {
    if (circuitos) {
      setFilter(circuitos?.filter(e => e.titulo.toLowerCase().indexOf(filterSelect?.toLowerCase()) !== -1))
    }
  }, [filterSelect])

  useEffect(() => {
    lugaresBD.get()
      .then(res => setLugars(res?.data))
      .catch(err => console.log(err))
  }, [])

  const handleSelectChange = () => {
    setFilterSelect(event.target.value);
  }
  const buscarCircuito = () => {
    setSearch(event.target.value)
  }
  return (
    <>
      <div className='circuitos'>
        <img src={portada} alt="" className='circuitos__img' />
      </div>
      <div className='circuitos__body'>
        <h2>Circuitos</h2>

        <div className='circuitos__filters'>
          <div className='circuitos__filters--buscador'>
            <input type="text" onChange={() => buscarCircuito()} /><i className='bx bx-search-alt-2'></i>
          </div>
          <div className='circuitos__filters--select'>
            <span>Buscar información en </span>
            <select onChange={handleSelectChange}>
              {
                lugars && lugars.map(lugar => (
                  <option value={lugar?.nombre}>{lugar?.nombre}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className='circuitos__catalogo'>
          {
            filter ?
              filter?.map(circuito => (
                <CardCircuito
                  key={circuito.id}
                  circuito={circuito}
                  idioma={idioma}
                />
              ))
              :
              circuitos?.map(circuito => (
                <CardCircuito
                  key={circuito.id}
                  circuito={circuito}
                  idioma={idioma}
                />
              ))
          }
        </div>
        <Contactenos />
      </div>
    </>
  )
}

export default Circuitos