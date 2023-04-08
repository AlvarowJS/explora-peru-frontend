import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SobreNosotros from '../Pages/SobreNosotros/SobreNosotros'
import Tours from '../Pages/Tours'
import Circuitos from '../Pages/Circuitos'
import Mice from '../Pages/Mice'
import Noticias from '../Pages/Noticias'
import Contactenos from '../Pages/Contactenos'
import Navbar from '../Components/Navbar'


const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Navbar/>            
            <Routes>
                <Route path='/' element={<SobreNosotros/>}/>
                <Route path='/tours' element={<Tours/>}/>
                <Route path='/circuitos' element={<Circuitos/>}/>
                <Route path='/mice' element={<Mice/>}/>
                <Route path='/noticias' element={<Noticias/>}/>
                <Route path='/contactenos' element={<Contactenos/>}/>                
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter