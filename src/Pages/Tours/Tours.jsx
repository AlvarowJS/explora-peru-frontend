import React from 'react'
import portada from './../../assets/carril/about_3.png'
import './Tours.css'
const Tours = () => {
  return (
    <>
      <div className='tours'>
        <img src={portada} alt="" className='tours__img' />
      </div>
      <div>
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
          <img src="" alt="" />
          <h3>Title</h3>
          <p>Descripcion</p>
          <div>
            <p>hora</p>
            <p>dolar</p>
          </div>
        </div>

      </div>
    </>

  )
}

export default Tours