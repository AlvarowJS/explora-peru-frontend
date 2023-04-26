import React, { useEffect, useState } from 'react'
import './../style.css'
import TourIntraCard from './TourIntraCard'
import toursBD from '../../../../apis/tours'
const TourIntra = () => {
  const [filterSelect, setFilterSelect] = useState()
  const [tours, setTours] = useState()
  const [lugars, setLugars] = useState()
  useEffect(() => {
    toursBD.get()
      .then(res => setTours(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='container'>
      <h2>Revisa nuestro itinerario de Tours </h2>
      {tours?.map(tour => (
        <TourIntraCard
          key={tour.id}
          tour={tour}
        />
      ))}
    </div>
  )
}

export default TourIntra