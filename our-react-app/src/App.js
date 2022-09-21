import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Routing for the application
import Navbar from './navbar';
import Home from './views/home'
import Login from './views/login-page'
import Register from './views/register'
import Explorer from './views/explorer'
import Search from './views/search'
import Profile from './views/profile'
import Survey from './views/survey'
import Upload from './views/upload'
import SignUp from './components/signup';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ThemeProvider, createTheme } from '@material-ui/core';
import { typography } from '@mui/system';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/explorer" element={<Explorer/>}/>
          <Route exact path="/search" element={<Search/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/survey" element={<Survey/>}/>
          <Route exact path="/explorer" element={<Explorer/>}/>
          <Route exact path="/upload" element={<Upload/>}/>
        </Routes>
    </Router>
  );
}

export default App;
