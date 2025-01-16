import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
            <Link to="/add">
                <Button variant="contained">Add</Button>
            </Link>
            &nbsp;
            <Link to="/view">
                <Button variant="contained">View</Button>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}