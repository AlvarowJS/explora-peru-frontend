import React from 'react'
import portada from './../../../assets/carril/about_1.png'
import logo from './../../../assets/logo/logo.png'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>

            <div class="login-container">
                <div class="login-left">
                    <img src={portada} alt="Imagen de login" />
                </div>
                <div class="login-right">
                    <h2>
                        <b> Intranet</b>
                    </h2>
                    <p>Solo para agentes asociados a Perú Exploring</p>
                    <form>
                        <label for="username">Usuario:</label>
                        <input type="text" id="username" name="username" />
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="password" />

                        <Link to='/admin/tour'>
                            <button type="submit">Iniciar sesión</button>
                        </Link>

                    </form>
                    <p className='login-right-create'>Quieres ser un Agente?<span> <Link to='/register'>Rellene este formulario de Inscripción</Link></span></p>
                </div>
            </div>


        </>
    )
}

export default Login