'use client'

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(3),
        width: "300px",
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

export default function Login() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.form}>
                <form className='form-container' noValidate>
                    <Typography variant='h5' gutterBottom>
                        Sign In
                    </Typography>
                    <TextField
                        className={classes.textField}
                        label='Email'
                        variant='outlined'
                        fullWidth
                        // value={data.email}
                        // onChange={handleChange}
                        name='email'
                    // error={!!error.email}
                    // helperText={error.email}
                    />
                    <TextField
                        className={classes.textField}
                        label='Password'
                        variant='outlined'
                        type='password'
                        fullWidth
                        // value={data.password}
                        // onChange={handleChange}
                        name='password'
                    // error={!!error.password} // Set error state for TextField
                    // helperText={error.password} // Display error message if present
                    />
                    <Typography variant='body2' color='error'>
                        {/* Display fail text above the signup button with red color */}
                        {/* {error.email || error.password} */}
                    </Typography>
                    <Button
                        className={classes.button}
                        variant='contained'
                        color='primary'
                        fullWidth
                        type='submit'
                    // disabled={!isSignInEnabled}
                    >
                        {/* {loading ? (
              <CircularProgress
                style={{ color: "white", width: "20px", height: "20px" }}
              />
            ) : (
              " Sign In"
            )} */}

                        {/* Render CircularProgress component */}
                        Login
                    </Button>
                </form>
            </Paper>
        </div>
    )
}