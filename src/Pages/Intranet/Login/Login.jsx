import React from 'react'
import portada from './../../../assets/carril/about_1.png'
import logo from './../../../assets/logo/logo.png'
import './Login.css'
const Login = () => {
    return (
        <>

            <div class="login-container">
                <div class="login-left">
                    <img src={portada} alt="Imagen de login" />
                </div>
                <div class="login-right">
                    <h2>INTRANET</h2>
                    <p>Solo para agentes asociados a Perú Exploring</p>
                    <form>
                        <label for="username">Usuario:</label>
                        <input type="text" id="username" name="username" />
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="password" />

                        <button type="submit">Iniciar sesión</button>

                    </form>
                    <p className='login-right-create'>Quieres ser un Agente? <span>Rellene este formulario de Inscripción</span></p>
                </div>
            </div>


        </>
    )
}

export default Login