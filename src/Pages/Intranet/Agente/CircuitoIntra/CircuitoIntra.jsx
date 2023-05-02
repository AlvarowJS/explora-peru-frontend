import React, { useEffect, useState } from 'react'
import './../style.css'
import CircuitoIntraCard from './CircuitoIntraCard'
import circuitosBD from '../../../../apis/circuitos'
const CircuitoIntra = () => {
  const [filterSelect, setFilterSelect] = useState()
  const [circuitos, setCircuitos] = useState()
  const [lugars, setLugars] = useState()
  useEffect(() => {
    circuitosBD.get()
      .then(res => setCircuitos(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='container'>
      <h2 style={{color: '#5B2491'}}>Revisa nuestro itinerario de Circuitos </h2>
      {circuitos?.map(circuito => (
        <CircuitoIntraCard
          key={circuito.id}
          circuito={circuito}
        />
      ))}
    </div>
  )
}

export default CircuitoIntra
