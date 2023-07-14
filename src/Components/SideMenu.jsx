import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
const SideMenu = ({ menu, setMenu, idioma }) => {
    const handleBackdropClick = () => {
        setMenu(false);
    };
    return (
        <Drawer
            open={menu}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            ModalProps={{
                onBackdropClick: handleBackdropClick,
            }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>

                    <NavLink to='/' onClick={handleBackdropClick}>
                        <ListItem button>
                            <ListItemText primary={idioma ? 'About us' : 'Sobre nosotros'} />
                        </ListItem>
                    </NavLink>

                    <NavLink to='/tours' onClick={handleBackdropClick}>
                        <ListItem button>
                            <ListItemText primary={'Tours'} />
                        </ListItem>
                    </NavLink>

                    <NavLink to='/circuitos' onClick={handleBackdropClick}>
                        <ListItem button >
                            <ListItemText primary={idioma ? 'circuits' : 'Circuitos'} />
                        </ListItem>
                    </NavLink>
                    <NavLink to='/mice' onClick={handleBackdropClick}>
                        <ListItem button >
                            <ListItemText primary={'Mice'} />
                        </ListItem>
                    </NavLink>

                    <NavLink to='/noticias' onClick={handleBackdropClick}>
                        <ListItem button >
                            <ListItemText primary={idioma ? 'News' : 'Noticias'} />
                        </ListItem>
                    </NavLink>

                    <NavLink to='/contactenos' onClick={handleBackdropClick}>
                        <ListItem button >
                            <ListItemText primary={idioma ? 'Contact Us' : 'Contáctenos'} />
                        </ListItem>
                    </NavLink>
                </List>
            </Box>
        </Drawer>

    )
}

export default SideMenu