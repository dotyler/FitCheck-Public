import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/Lock';
import { Google } from '@mui/icons-material';
//import { Link, useNavigate } from "react-router-dom"
import "./signup.css"
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase'
import { FirebaseError } from 'firebase/app';
import { collection, getDocs } from "firebase/firestore"; 
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
    // maybe trigger a loading screen
      return;
      }
      if (user) navigate("/");
    }, [user, loading]);
  const paperStyle = { padding: 20, height: '70vh', width: 380, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#7D77FF' }
  const btnstyle = { backgroundColor: '#F89286', margin: '8px 0px' }
  const textStyle = { margin: '8px 0px' }
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, username, email, password);
  };
    return(
        
        <div>
            <Grid container style={{minHeight: '100vh'}}>
                <Grid container item alignItems='center' direction='column' style={{ background: '#FAF8FD'}} item xs={12} sm={6}>
                    <img src="/img/ecommerce.png" style={{maxWidth:'700px'}} />
                </Grid>
                <Grid container item alignItems='center' direction='column' justify="space-between" xs={12} sm={6} style={{ padding: 10}}>
                    <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300, }}>
                        <Grid container justify="center">
                            <img src="/img/fitcheck-heading.png" width={200}/>
                        </Grid>
                        <Grid alignItems='center' container justify='center' style={{padding: 10}}>
                            <h1>Sign Up</h1>
                        </Grid>
                        <Button  InputProps={{ style: {fontFamily:'Sofia Pro'}}} variant="outlined" startIcon={<Google/>} onClick = {signInWithGoogle} >Sign Up with Google</Button>
                        <div style={{ padding: 15}}>
                            <p className='section'><span> or sign up with email</span></p>
                        </div>
                        <Grid container direction={"column"} width={400} spacing={2}>
                            <Grid item>
                                <TextField InputProps={{ style: {fontFamily:'Sofia Pro'}}} placeholder='Name' variant="outlined" fullWidth required value = {name} onChange={(e) => setName(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField InputProps={{ style: {fontFamily:'Sofia Pro'}}} placeholder='Username' variant="outlined" fullWidth required value = {username} onChange={(e) => setUsername(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField InputProps={{ style: {fontFamily:'Sofia Pro'}}} placeholder='Email Address' variant="outlined" fullWidth required value = {email} onChange={(e) => setEmail(e.target.value)}/>
                            </Grid>
                            <Grid item>
                                <TextField  InputProps={{ style: {fontFamily:'Sofia Pro'}}} placeholder='Password' variant="outlined" type="password" fullWidth required value = {password} onChange={(e) => setPassword(e.target.value)}/>
                            </Grid>
                            <Grid item>       
                                <Button style={{backgroundColor:"#515DDA"}} fullWidth variant="contained" onClick = {register}>
                                    Sign Up
                                </Button>
                            </Grid>
                            <div style={{ height: 20 }}/>
                            <p className='section'></p>
                            <Typography fontFamily={'Sofia Pro'}> Already have an account?
                                <Link sx={{mx:1}} href='login'>
                                    Login
                                </Link>
                            </Typography>
                        </Grid>
                    </div>
                    <div/>
                </Grid>
            </Grid>
        </div>
    )
}
export default SignUp