import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/Lock';
import { Google } from '@mui/icons-material';
import {
    auth,
    logInWithEmailAndPassword,
    sendPasswordReset,
  } from '../firebase'
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { authentication } from '../firebase';

const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/");
      }, [user, loading]);
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err) => {
            console.log(err)
        })
    }  

    const log = () => {
        if (!email) alert("Please enter email");
        logInWithEmailAndPassword(email, password)
        
    };
    const reset = () => {
        if (!email) alert("Please enter email");
        sendPasswordReset(email);
    };
    return(
        <div>
            <Grid container style={{minHeight: '100vh'}}>
                <Grid container item alignItems='center' direction='column' style={{ background: '#FAF8FD'}} xs={12} sm={6}>
                    <img style={{maxWidth:'700px'}} src="/img/ecommerce.png"/>
                </Grid>
                <Grid container item alignItems='center' direction='column' justify="space-between" xs={12} sm={6} style={{ padding: 10, background:'white'}}>
                    <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300, }}>
                        <Grid container justify="center">
                            <img src="/img/fitcheck-heading.png" width={300}/>
                        </Grid>
                        <Grid alignItems='center' container justify='center' style={{padding: 10}}>
                            <h1>Welcome Back</h1>
                        </Grid>
                        <Button  InputProps={{ style: {fontFamily:'Sofia Pro'}}} variant="outlined" onClick={signInWithGoogle} startIcon={<Google/>} >Log in with Google</Button>
                        <div style={{ padding: 15}}>
                            <p className='section'><span> or login with email</span></p>
                        </div>
                        <Grid container direction={"column"} width={400} spacing={2}>
                            <Grid item>
                                <TextField InputProps={{ style: {fontFamily:'Sofia Pro'}}} placeholder='Email' variant="outlined" fullWidth required value = {email} onChange={(e) => setEmail(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField InputProps={{ style: {fontFamily:'Sofia Pro'}}} type = "password" placeholder='Password' variant="outlined" fullWidth required value = {password} onChange={(e) => setPassword(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox  
                                            name="checked8"
                                            color="primary"
                                            />
                                    }
                                    label="Remember me"/>
                                <Link onClick = {reset}>
                                    Forget Password
                                </Link>
                            </Grid>
                            <Grid item>       
                                <Button style={{backgroundColor:"#515DDA"}} fullWidth variant="contained" onClick = {log}>
                                    Log In
                                </Button>
                            </Grid>
                            <div style={{ height: 20 }}/>
                            <p className='section'></p>
                            <Typography fontFamily={'Sofia Pro'}> Don't have an account yet?
                                <Link sx={{mx:1}} href='/signup'>
                                    Sign Up
                                </Link>
                            </Typography>
                        </Grid>
                    </div>
                    <div/>
                </Grid>
            </Grid>
        </div>
    );
};
export default Login