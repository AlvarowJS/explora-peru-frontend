import React from 'react'
import portada from './../../../assets/carril/about_1.png'
import logo from './../../../assets/logo/logo.png'
const Login = () => {
    return (
        <>
            <aside>
                <img src={portada} alt="" />
            </aside>
            <aside>
                <div>
                <i class='bx bx-chevron-left'></i>
                <img src={logo} alt="" />
                </div>
            </aside>
        </>
    )
}

export default Login