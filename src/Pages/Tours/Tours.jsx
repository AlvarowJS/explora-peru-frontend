import React, { useEffect, useState } from 'react'
import portada from './../../assets/carril/about_3.png'
import './Tours.css'
import CardsTours from '../../Components/Tours/CardsTours'
import Contactenos from '../../Components/Contactanos/Contactenos'
import toursBD from '../../apis/tours'
import lugaresBD from '../../apis/lugares'
const Tours = ({ idioma }) => {
  const [filterSelect, setFilterSelect] = useState()
  const [filter, setFilter] = useState()
  const [search, setSearch] = useState()
  const [tours, setTours] = useState()
  const [lugars, setLugars] = useState()
  useEffect(() => {
    toursBD.get()
      .then(res => setTours(res.data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    if (tours) {
      setFilter(tours?.filter(e => e.titulo.toLowerCase().indexOf(search?.toLowerCase()) !== -1))
    }
  }, [search])

  useEffect(() => {
    if (tours) {
      setFilter(tours?.filter(e => e.titulo.toLowerCase().indexOf(filterSelect?.toLowerCase()) !== -1))
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
  const buscarTour = () => {
    setSearch(event.target.value)
  }

  return (
    <>
      <div className='tours'>
        <img src={portada} alt="" className='tours__img' />
      </div>
      <div className='tours__body'>
        <h2>Tours</h2>

        <div className='tours__filters'>
          <div className='tours__filters--buscador'>
            <input type="text" onChange={() => buscarTour()} /><i className='bx bx-search-alt-2'></i>
          </div>
          <div className='tours__filters--select'>
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
        <div className='tours__catalogo'>
          {
            filter ?
              filter?.map(tour => (
                <CardsTours
                  key={tour.id}
                  tour={tour}
                  idioma={idioma}
                />
              ))
              :
              tours?.map(tour => (
                <CardsTours
                  key={tour.id}
                  tour={tour}
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

export default Tours