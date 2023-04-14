import React, { useEffect, useState } from 'react'
import portada from './../../assets/carril/about_3.png'
import './Tours.css'
import CardsTours from '../../Components/Tours/CardsTours'
import Contactenos from '../../Components/Contactanos/Contactenos'
import toursBD from '../../apis/tours'
const Tours = () => {
  const [tours, setTours] = useState()
  useEffect(() => {
    toursBD.get()
      .then(res => setTours(res.data))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <>
      <div className='tours'>
        <img src={portada} alt="" className='tours__img' />
      </div>
      <div className='tours__body'>
        <h2>Tours</h2>

        <div className='tours__filters'>
          <div className='tours__filters--buscador'>
            <input type="text" /><i class='bx bx-search-alt-2'></i>
          </div>
          <div className='tours__filters--select'>
            <span>Buscar información en </span>
            <select name="" id="">
              <option value="dog">Lima</option>
              <option value="cat">Huanuco</option>
            </select>
          </div>
        </div>
        <div className='tours__catalogo'>
        {tours?.map(tour => (
            <CardsTours
              key={tour.id}
              tour={tour}
            />
          ))}
      
      
        </div>
        <Contactenos/>
      </div>
    </>

  )
}

export default Tours