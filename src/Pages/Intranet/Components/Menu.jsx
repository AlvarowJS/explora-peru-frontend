import React, { useEffect, useState } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
    const navigate = useNavigate()
    const [role, setRole] = useState({})
    useEffect(() => {
        let token = localStorage.getItem('token');
        let ruc = localStorage.getItem('ruc');
        let role = localStorage.getItem('role');
        let razon_social = localStorage.getItem('razon_social');
        let role_name = localStorage.getItem('role_name');
        setRole({ token, ruc, role, role_name })
    }, [])
    const logout = () => {
        //    return navigate('/login')
        localStorage.setItem('token', '')
        localStorage.setItem('ruc', '')
        localStorage.setItem('role', '')
        localStorage.setItem('role_name', '')
        localStorage.setItem('razon_social', '')

    }

    return (
        <SideNav
            onSelect={(selected) => {
                console.log(selected)
                navigate('/' + selected)
            }}
            style={{
                backgroundColor: '#5b2491',

            }}
        >
            <SideNav.Toggle />

            <SideNav.Nav defaultSelected="tourintranet">
                <NavItem eventKey="perfil" style={{ textAlign: 'center', marginBottom: '70px' }}>

                    <i className='bx bxs-user-circle' style={{ fontSize: '4em' }}></i>
                    <p> {role.role_name}</p>
                </NavItem>
                {/*  */}

                {
                    role.id == 1 ?

                        <NavItem eventKey="admin">
                            <NavIcon>
                                <i className='bx bxs-user-detail' style={{ fontSize: '1.75em' }} ></i>
                            </NavIcon>
                            <NavText>
                                Admin
                            </NavText>
                            <NavItem eventKey="admin/usuarios">
                                <NavText>
                                    Usuarios
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="admin/tour">
                                <NavText>
                                    Tours
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="admin/circuitos">
                                <NavText>
                                    Circuitos
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="admin/noticias">
                                <NavText>
                                    Noticias
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="admin/reclamacion">
                                <NavText>
                                    Libro de Reclamaciones
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="admin/mensajes">
                                <NavText>
                                    Mensajes
                                </NavText>
                            </NavItem>
                        </NavItem> : null
                }
                {/*  */}
                <NavItem eventKey="home-intranet">
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        <i className='bx bx-home-alt-2' style={{ fontSize: '1.75em' }}  ></i>
                    </NavIcon>

                    <NavText>
                        Pagina Principal
                    </NavText>
                </NavItem>

                <NavItem eventKey="tour-intranet">
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                        {/* <i className='bx bx-home-alt-2' style={{ fontSize: '1.75em' }}  ></i> */}
                        <i className='bx bx-car' style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        Tours
                    </NavText>

                </NavItem>
                <NavItem eventKey="circuito-intranet">
                    <NavIcon>
                        <i className='bx bx-bus' style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        Circuitos
                    </NavText>

                </NavItem>
                {/* <NavItem eventKey="mice-intranet">
                    <NavIcon>
                        <i className='bx bxl-gmail' style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        MICE
                    </NavText>

                </NavItem> */}
                <NavItem eventKey="noticia-intranet">
                    <NavIcon>
                        <i className='bx bx-news' style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        Noticias
                    </NavText>

                </NavItem>

                <NavItem eventKey="contacto-intranet">
                    <NavIcon>
                        <i className='bx bx-chat' style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        Contactenos
                    </NavText>

                </NavItem>
                {/* <NavItem eventKey="login"> */}
                <NavItem eventKey="login" onClick={() => logout()}>
                    <NavIcon>
                        <i className='bx bx-exit' style={{ fontSize: '1.75em' }} ></i>
                    </NavIcon>
                    <NavText>
                        Cerrar sesión
                    </NavText>

                </NavItem>
            </SideNav.Nav>
        </SideNav >
    )
}

export default Menu