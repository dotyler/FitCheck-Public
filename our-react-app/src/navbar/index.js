import { ReactComponent as Profile } from '../Images/Profile.svg';
import { ReactComponent as Upload } from '../Images/Upload.svg';
import { ReactComponent as Explorer } from '../Images/Explorer.svg';
import { ReactComponent as Login } from '../Images/Login.svg';
import { ReactComponent as Home } from '../Images/Home.svg';
import { ReactComponent as Logo } from '../Images/FitCheckLogo.svg';
import { ReactComponent as Cancel } from '../Images/cancel.svg';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { logout, db } from '../firebase';
import "./navbar.css";
import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Container,
  Nav
} from 'react-bootstrap';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";

const navbar = () => {

  useEffect(() => {
    const q = query(collection(db, "users"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      // console.log("Data", querySnapshot.docs.map(doc => doc.data()));
      // console.log("Query", querySnapshot.docs.map(doc));
    });
  }, [])

  const [searchtext, setsearchtext] = useState("");
  const lookup = () => {
    if (searchtext === "") {
      alert("Please enter a Username");
    }
    const q = query(collection(db, "users"), where("username", "==", searchtext));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const relatedusers = [];
      querySnapshot.forEach((doc) => {
        relatedusers.push(doc.data().username);
        relatedusers.push(doc.data().name);
        relatedusers.push(doc.data().email);
      });
      console.log("Related users: ", relatedusers.join(", "));
    });
  };
  return (
    <div class="Background">
      <div class="logoandsearch">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <input
          class="searchbar"
          type="text"
          value={searchtext}
          onChange={(e) => setsearchtext(e.target.value)}
          placeholder="Search Users"
        />
      </div>
      <div class="icons">
        <Button name="searchbutton" type='Submit' onClick={lookup}>Search</Button>
        <div class="home">
          <Nav.Link href="/">
            <Home />
          </Nav.Link>
        </div>
        <div class="explorer">
          <Nav.Link href="/explorer">
            <Explorer />
          </Nav.Link>
        </div>
        <div class="upload">
          <Nav.Link href="/upload">
            <Upload />
          </Nav.Link>
        </div>
        <div class="profile">
          <Nav.Link href="/profile">
            <Profile />
          </Nav.Link>
        </div>
        <div class="logout">
          <Nav.Link href="/login" onClick={logout}>
            <Login />
          </Nav.Link>

        </div>
      </div>
    </div>
  );
}
export default navbar;
