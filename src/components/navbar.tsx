import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: "white" }} variant='outlined'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Next.js App
        </Typography>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
          <Link href="/">
            <Button variant='contained' color='primary' style={{ marginLeft: "0.5rem" }}>
              Sign Up
            </Button>
          </Link>

          <Link href="/" passHref>
            <Button variant='outlined' color='primary' style={{ marginLeft: "0.5rem" }}>
              Sign In
            </Button>
          </Link>
          {/* Add more navigation links as needed */}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;