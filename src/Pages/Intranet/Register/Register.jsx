import React from 'react'
import portada from './../../../assets/carril/about_1.png'
import './Register.css'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <>
            <div className="register-container">
                <div className="register-left">
                    <img src={portada} alt="Imagen de register" />
                </div>
                <div className="register-right">
                    <h2>
                        <b> Registro</b>
                    </h2>
                    <p>Se uno de nuestros agentes y accede a precios especiales</p>
                    <form>
                        <label for="username">Usuario:</label>
                        <input type="text" id="username" name="username" />

                        <div className="input-group">
                            <div>
                                <label for="telefono">Telefono o celular:</label>
                                <input type="text" id="telefono" name="telefono" />
                            </div>
                            <div>
                                <label for="ruc">RUC</label>
                                <input type="text" id="ruc" name="ruc" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label for="direccion">Dirección:</label>
                                <input type="text" id="direccion" name="direccion" />
                            </div>
                            <div>
                                <label for="email">Correo Electronico</label>
                                <input type="email" id="email" name="email" />
                            </div>
                        </div>
                        <div className='input-check'>
                            <input type="checkbox" />
                            <p> Acepto los terminos y condiciones del servicio</p>
                        </div>

                        <button type="submit">Registrar</button>

                    </form>
                    <p className='register-right-create'>Eres parte de Perú de Exploring? <span><Link to='/login' > Inicia Sesión</Link></span></p>
                </div>
            </div>
        </>
    )
}

export default Register