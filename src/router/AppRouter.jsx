import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
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
import Login from '../Pages/Intranet/Login/Login'
import Register from '../Pages/Intranet/Register/Register'
import Menu from '../Pages/Intranet/Components/Menu'


const AppRouter = () => {
  const [idioma, setIdioma] = useState('spanish')
  function NavbarRoutes() {
    const location = useLocation();

    if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/home') {
      return (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Menu />} />
        </Routes>
      );
    } else {
      return (
        <>
          <Navbar idioma={idioma} setIdioma={setIdioma} />
          <Routes>
            <Route path='/' element={<SobreNosotros idioma={idioma} setIdioma={setIdioma} />} />
            <Route path='/tours' element={<Tours idioma={idioma} />} />
            <Route path='/tours/:id' element={<ToursInfo idioma={idioma} />} />
            <Route path='/circuitos' element={<Circuitos />} />
            <Route path='/mice' element={<Mice />} />
            <Route path='/noticias' element={<Noticias />} />
            <Route path='/noticias/:id' element={<NoticiaNota />} />
            <Route path='/contactenos' element={<Contactenos idiomaGlobal={idioma} />} />
          </Routes>
        </>
      );
    }
  }

  useEffect(() => {
    console.log(idioma, "idioma?")
  }, [idioma])
  return (
    <>
      <BrowserRouter>
        <NavbarRoutes />

        {/* <Navbar idioma={idioma} setIdioma={setIdioma} />
        <Routes>
          <Route path='/' element={<SobreNosotros idioma={idioma} setIdioma={setIdioma} />} />
          <Route path='/tours' element={<Tours idioma={idioma} />} />
          <Route path='/tours/:id' element={<ToursInfo idioma={idioma} />} />
          <Route path='/circuitos' element={<Circuitos />} />
          <Route path='/mice' element={<Mice />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/noticias/:id' element={<NoticiaNota />} />
          <Route path='/contactenos' element={<Contactenos idiomaGlobal={idioma} />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer idioma={idioma} />
        <a href="https://wa.link/ix9xwp" className="btn-whatsapp" target="_blank">
          <i class='bx bxl-whatsapp'></i>
        </a> */}

      </BrowserRouter>
    </>
  )
}

export default AppRouter