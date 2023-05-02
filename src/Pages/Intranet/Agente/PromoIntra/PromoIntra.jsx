import React, { useEffect, useState } from 'react'
import './../style.css'
import PromoIntraCard from './PromoIntraCard'
import promosBD from '../../../../apis/promos'
const PromoIntra = () => {
  const [filterSelect, setFilterSelect] = useState()
  const [promos, setPromos] = useState()
  const [lugars, setLugars] = useState()
  useEffect(() => {
    promosBD.get()
      .then(res => setPromos(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='container'>
      <h2 style={{color: '#5B2491'}}>Revisa nuestro itinerario de Tours con Promociones! </h2>
      {promos?.map(promo => (
        <PromoIntraCard
          key={promo.id}
          promo={promo}
        />
      ))}
    </div>
  )
}

export default PromoIntra