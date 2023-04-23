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

// Agente
import HomeIntra from '../Pages/Intranet/Agente/HomeIntra/HomeIntra'
import TourIntra from '../Pages/Intranet/Agente/TourIntra/TourIntra'
import CircuitoIntra from '../Pages/Intranet/Agente/CircuitoIntra/CircuitoIntra'
import NoticiasIntra from '../Pages/Intranet/Agente/NoticiasIntra/NoticiasIntra'
import ContactoIntra from '../Pages/Intranet/Agente/ContactoIntra/ContactoIntra'

// Admins
import UsuariosAdmin from '../Pages/Intranet/Admin/UsuariosAdmin/UsuariosAdmin'
import TourAdmin from '../Pages/Intranet/Admin/TourAdmin/TourAdmin'
import CircuitoAdmin from '../Pages/Intranet/Admin/CircuitoAdmin/CircuitoAdmin'
import NoticiaAdmin from '../Pages/Intranet/Admin/NoticiaAdmin/NoticiaAdmin'
import ReclamacionAdmin from '../Pages/Intranet/Admin/ReclamacionAdmin/ReclamacionAdmin'
import ComunicacionAdmin from '../Pages/Intranet/Admin/ComunicacionAdmin/ComunicacionAdmin'



const AppRouter = () => {
  const [idioma, setIdioma] = useState('spanish')
  function NavbarRoutes() {
    const location = useLocation();

    if (
      location.pathname === '/login' ||
      location.pathname === '/register'

    ) {
      return (
        <>          
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </>
      );
    }
    else if (
      location.pathname === '/admin/usuarios' ||
      location.pathname === '/admin/tour' ||
      location.pathname === '/admin/circuitos' ||
      location.pathname === '/admin/noticias' ||
      location.pathname === '/admin/reclamacion' ||
      location.pathname === '/admin/mensajes' ||
      location.pathname === '/home-intranet' ||
      location.pathname === '/tour-intranet' ||
      location.pathname === '/circuito-intranet' ||
      location.pathname === '/noticia-intranet' ||
      location.pathname === '/mice-intranet' ||
      location.pathname === '/contacto-intranet' 
    ) {
      return (
      <>      
        <Menu />
        <Routes>
          {/* <Route path='/home' element={<Menu />} /> */}
          {/* ADMIN */}
          <Route path='/admin/usuarios' element={<UsuariosAdmin/>} />
          <Route path='/admin/tour' element={<TourAdmin/>} />
          <Route path='/admin/circuitos' element={<CircuitoAdmin/>} />
          <Route path='/admin/noticias' element={<NoticiaAdmin/>} />
          <Route path='/admin/reclamacion' element={<ReclamacionAdmin/>} />
          <Route path='/admin/mensajes' element={<ComunicacionAdmin/>} />

          
          {/* AGENTE */}
          <Route path='/home-intranet' element={<HomeIntra />} />
          <Route path='/tour-intranet' element={<TourIntra />} />
          <Route path='/circuito-intranet' element={<CircuitoIntra />} />
          <Route path='/noticia-intranet' element={<NoticiasIntra />} />
          <Route path='/mice-intranet' element={<NoticiasIntra />} />
          <Route path='/contacto-intranet' element={<ContactoIntra />} />
        </Routes>
      </>
      )
    }
    else {
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