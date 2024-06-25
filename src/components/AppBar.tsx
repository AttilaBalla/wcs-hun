'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {PropsWithChildren} from "react";
import Link from "next/link";

const drawerWidth = 240;
const navItems = [
  {
    name: 'Főoldal',
    href: '/'
  },
  {
    name: 'Csapat',
    href: '/staff'
  },
  {
    name: 'Verseny',
    href: '/comp'
  },
  {
    name: 'Menetrend',
    href: '/schedule'
  },
  {
    name: 'Helyszín',
    href: '/location'
  }
];

export default function DrawerAppBar(props: PropsWithChildren) {
  const {children} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
      <Typography variant="h6" sx={{my: 2}}>
        MUI
      </Typography>
      <Divider/>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link href={item.href}>{item.name}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: 'none'}}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            MUI
          </Typography>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            {navItems.map((item) => (
              <Link href={item.href}>{item.name}</Link>
            ))}
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
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{p: 3}}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
}