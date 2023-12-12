
// import React from 'react';
// import { createContext, useState, useContext } from 'react';

// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     IconButton,
//     Grid,
//   } from "@material-ui/core";
//   import { Tabs, Tab } from "@mui/material";
//   import MenuIcon from "@material-ui/icons/Menu";
//   import PersonIcon from "@material-ui/icons/Person";

// export default function Navbar(){
//     // return(
//     //     <div>Navbarddddddddddd</div>
//     // );
//     return (
//     //     <>
//     //       <AppBar
//     //         title='ddd'
//     //         // postion='fixed'
//     //         style={{
//     //           background: "white",
//     //         }}
//     //       >
//     //         <Toolbar>
//     //           <IconButton edge='start' color='primary' aria-label='Menu'>
//     //             <MenuIcon />
//     //           </IconButton>
    
//     //           {/* <Tabs
//     //             value={site.tabIndex}
//     //             onChange={handleChange}
//     //             aria-label='basic tabs example'
//     //             variant='scrollable'
//     //             style={{
//     //               // backgroundColor: "red",
//     //               flex: 1,
//     //               display: "flex",
//     //               justifyContent: "center",
//     //               minWidth: "700px",
//     //               marginLeft: "30rem",
//     //             }}
//     //           >
//     //             <Tab
//     //               label='Home'
//     //               style={{ color: site.tabIndex == 0 ? "black" : "" }}
//     //             />
//     //             <Tab
//     //               label='Todo View'
//     //               style={{ color: site.tabIndex == 1 ? "black" : "" }}
//     //             />
//     //             <Tab
//     //               label='About Us'
//     //               style={{ color: site.tabIndex == 2 ? "black" : "" }}
//     //             />
//     //             <Tab
//     //               label='Our Services'
//     //               style={{ color: site.tabIndex == 3 ? "black" : "" }}
//     //             />
//     //             <Tab
//     //               label='Contact Us'
//     //               style={{ color: site.tabIndex == 4 ? "black" : "" }}
//     //             />
//     //           </Tabs> */}
    
//     //           {/* <Grid container alignItems='center' justify='flex-end'>
//     //             {user.loggedIn ? (
//     //               <Grid item>
//     //                 <div style={{ display: "flex" }}>
//     //                   <Typography
//     //                     name='userEmail'
//     //                     id='userEmail'
//     //                     style={{
//     //                       display: "flex",
//     //                       alignItems: "center",
//     //                       margin: "0 2rem",
//     //                       color: "#3f51b5",
//     //                     }}
//     //                   >
//     //                     <PersonIcon style={{ marginRight: "0.5rem" }} />
//     //                     {user.email}
//     //                   </Typography>
    
//     //                   <Button
//     //                     onClick={() => dispatch(handleLogOut())}
//     //                     variant='contained'
//     //                     color='primary'
//     //                     style={{ marginLeft: "0.5rem" }}
//     //                   >
//     //                     Sign out
//     //                   </Button>
//     //                 </div>
//     //               </Grid>
//     //             ) : (
//     //               <Grid item>
//     //                 <div>
//     //                   <Button
//     //                     color='primary'
//     //                     onClick={() => navigate("/signup")}
//     //                     variant='contained'
//     //                   >
//     //                     Sign Up
//     //                   </Button>
//     //                   <Button
//     //                     onClick={() => navigate("/signin")}
//     //                     variant='outlined'
//     //                     style={{
//     //                       margin: "0 0.5rem",
//     //                     }}
//     //                   >
//     //                     Sign in
//     //                   </Button>
//     //                 </div>
//     //               </Grid>
//     //             )}
//     //           </Grid> */}
//     //         </Toolbar>
//     //         {/* {setRefresh(!refresh)} */}
//     //       </AppBar>
//     //     </>
//     //   );
//     <AppBar>
//         Hello
//     </AppBar>
//     );
// }

// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// const Navbar = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             Your Logo or Title
//           </Typography>
//           <Button color="inherit">Home</Button>
//           <Button color="inherit">About</Button>
//           <Button color="inherit">Services</Button>
//           <Button color="inherit">Contact</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default Navbar;

// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link href="/about">
//             About
//           </Link>
//         </li>
//         {/* Add more navigation links as needed */}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Next.js App
        </Typography>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
          <Button>
            <Link href="/">
              Home
            </Link>
          </Button>
          <li color='primary'>
            <Link href="/about">
              About
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;