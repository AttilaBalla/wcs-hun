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
import {PropsWithChildren} from "react";
import {ListItemLink} from "@/components/navigation/ListItemLink";
import {useRouter} from "next/navigation";
import {imgPrefix} from "@/utils/imgPrefix";

const drawerWidth = 240;
const navItems = [
  {
    name: 'Regisztráció',
    primary: true,
    href: 'https://forms.gle/gEQNKKLp8sjq2WkC6'
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
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function navigateToHomePage() {
    router.push('/');
  }

  const logoUrl = `${imgPrefix}/static/images/logo.png`;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
      <Box sx={{cursor: 'pointer'}} onClick={navigateToHomePage}>
        <img
          width={50}
          height={50}
          src={logoUrl}
          alt="logo"
        />
      </Box>
      <Divider/>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemLink item={item}/>
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
          <Box
            sx={{display: 'flex', flexGrow: '1'}}
          >
            <Box sx={{cursor: 'pointer', display: {xs: 'none', sm: 'flex'}, alignItems: 'center'}} onClick={navigateToHomePage}>
              <img
                width={50}
                height={50}
                src={`${imgPrefix}/static/images/logo.png`}
                alt="logo"
              />
            </Box>
          </Box>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            {navItems.map((item) => (
              <ListItemLink item={item} key={item.name}/>
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
      <Box component="main" sx={{width: '100%'}}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
}