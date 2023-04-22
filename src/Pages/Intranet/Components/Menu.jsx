import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const Menu = () => {
    return (
        <SideNav
            onSelect={(selected) => {
                console.log(selected)
            }}
            style={{
                backgroundColor: '#5b2491'
}}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="tourintranet">
                <NavItem eventKey="perfil" style={{ textAlign: 'center', marginBottom: '70px' }}>

                    <i class='bx bxs-user-circle' style={{ fontSize: '4em' }}></i>
                    <p> Alvaro</p>
                </NavItem>
                <NavItem eventKey="home-intranet">
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        <i class='bx bx-home-alt-2' style={{ fontSize: '1.75em' }}  ></i>
                    </NavIcon>

                    <NavText>
                        Pagina Principal
                    </NavText>
                </NavItem>

                <NavItem eventKey="tourintranet">
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                        {/* <i class='bx bx-home-alt-2' style={{ fontSize: '1.75em' }}  ></i> */}
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
                <NavItem eventKey="mice-intranet">
                    <NavIcon>
                        <i className='bx bxl-gmail' style={{ fontSize: '1.75em' }}></i>
                    </NavIcon>
                    <NavText>
                        MICE
                    </NavText>

                </NavItem>
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
            </SideNav.Nav>
        </SideNav >
    )
}

export default Menu