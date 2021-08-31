import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css'

export default function Sidebar(props){
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/About">
        About
      </a>
      <a className="menu-item" href="/Contact">
        Contact
      </a>
      <a className="menu-item" href="/Write">
        Write
      </a>
      <a className="menu-item" href="/Login">
        Login
      </a>
      <a className="menu-item" href="/Register">
        Register
      </a>
    </Menu>
  );
};