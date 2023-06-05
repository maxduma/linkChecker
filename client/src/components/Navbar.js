import React, { useContext } from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    navigate('/')
  }

  return (
    <nav>
      <div class="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
        <span class="brand-logo">Shortening links</span>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><NavLink to="/create">Create</NavLink></li>
          <li><NavLink to="/links">Links</NavLink></li>
          <li><a href="/" onClick={logoutHandler} >Log out</a></li>
        </ul>
      </div>
    </nav>
  )
}