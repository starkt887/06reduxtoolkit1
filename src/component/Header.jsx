import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userAuth/userAuthSlice';


const drawerWidth = 240;
const publicNavItems = [
    {
        title: "Home",
        path: "",

    },
    {
        title: "About",
        path: "/about",

    },
    {
        title: "Contact",
        path: "/contact",

    },
];
const privateNavItems = [
    {
        title: "Dashboard",
        path: "/auth",

    },
    {
        title: "Products",
        path: "/auth/products",

    },
    {
        title: "Categories",
        path: "/auth/categories",

    },
];

const Header = () => {
    const isLoggedIn = useSelector((state) => state.userAuthReducer.isLoggedIn)
    const dispatch = useDispatch()

    const [mobileOpen, setMobileOpen] = useState(false);
    const [navItems, setNavItems] = useState([])

    useEffect(() => {
        // console.log(isLoggedIn);
        if (isLoggedIn) {
            setNavItems([...publicNavItems, ...privateNavItems])
        } else {
            setNavItems(publicNavItems)
        }
    }, [isLoggedIn])


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const logoutNow = () => {
        dispatch(logout())
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>

                {navItems.map((item) => (

                    <NavLink key={item.title} to={item.path}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
                {
                    isLoggedIn ?
                        <ListItem disablePadding>
                            <ListItemButton onClick={logoutNow} sx={{ textAlign: 'center' }}>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                        :
                        <NavLink to="/login">
                            <ListItem disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText primary="Login" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                }
            </List>
        </Box>
    );
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <NavLink key={item.title} to={item.path}>
                                    <Button sx={{ color: '#fff' }}>
                                        {item.title}
                                    </Button>
                                </NavLink>
                            ))}
                            {
                                isLoggedIn ?

                                    <Button onClick={logoutNow} sx={{ color: '#fff' }}>
                                        Logout
                                    </Button>
                                    :
                                    <NavLink to="/login">
                                        <Button sx={{ color: '#fff' }}>
                                            Login
                                        </Button>
                                    </NavLink>
                            }


                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer

                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>
        </div>
    )
}

export default Header