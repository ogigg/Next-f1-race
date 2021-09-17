import { AppBar, Toolbar, IconButton, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import './App.css';
import { Dashboard } from './pages/dashboard/dashboard';

function App() {
  const [state, setState] = React.useState({ drawer: true });
  const toggleDrawer = (open: boolean) => {
    console.log('toggle');
    setState({ ...state, drawer: open });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setState({ ...state, drawer: true })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={state.drawer} onClose={() => setState({ ...state, drawer: false })}>
        Side menu
      </Drawer>
      <Dashboard></Dashboard>
    </>
  );
}

export default App;
