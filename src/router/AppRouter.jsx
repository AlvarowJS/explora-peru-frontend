import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, Outlet } from 'react-router-dom'
import SobreNosotros from '../Pages/SobreNosotros/SobreNosotros'
import Tours from '../Pages/Tours/Tours'
import Circuitos from '../Pages/Circuitos/Circuitos'
import Mice from '../Pages/Mice/Mice'
import Noticias from '../Pages/Noticias/Noticias'
import Contactenos from '../Pages/Contactenos/Contactenos'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer/Footer'
import './whatsapp.css'
import NoticiaNota from '../Pages/Noticias/NoticiasNota/NoticiaNota'
import ToursInfo from '../Pages/Tours/ToursInfo/ToursInfo'

import SideMenu from '../Components/SideMenu'

import Reclamaciones from '../Pages/Reclamaciones/Reclamaciones'

import CircuitosInfo from '../Pages/Circuitos/CircuitosInfo/CircuitosInfo'




const AppRouter = () => {

  const [idioma, setIdioma] = useState(false)
  const token = localStorage.getItem("token")
  const [menu, setMenu] = useState(false)


  return (
    <>
      <BrowserRouter>
        <>
          <Navbar
            idioma={idioma}
            setIdioma={setIdioma}
            menu={menu}
            setMenu={setMenu}
          />
          <SideMenu
            menu={menu}
            setMenu={setMenu}
            idioma={idioma}
            setIdioma={setIdioma}
          />
          <Routes>
            <Route path='/' element={<SobreNosotros idioma={idioma} setIdioma={setIdioma} />} />
            <Route path='/tours' element={<Tours idioma={idioma} />} />
            <Route path='/tours/:id' element={<ToursInfo idioma={idioma} />} />
            <Route path='/circuitos' element={<Circuitos idioma={idioma} />} />
            <Route path='/circuitos/:id' element={<CircuitosInfo idioma={idioma} />} />
            <Route path='/mice' element={<Mice idioma={idioma} />} />
            <Route path='/noticias' element={<Noticias idioma={idioma} />} />
            <Route path='/noticias/:id' element={<NoticiaNota idioma={idioma} />} />
            <Route path='/contactenos' element={<Contactenos idioma={idioma} />} />
            <Route path='/reclamaciones' element={<Reclamaciones idioma={idioma} />} />

          </Routes>
          <Footer idioma={idioma} />
          <a href="https://wa.link/zu5485" className="btn-whatsapp" target="_blank">
            <i className='bx bxl-whatsapp'></i>
          </a>
        </>
 
      </BrowserRouter>
    </>
  )
}

export default AppRouter