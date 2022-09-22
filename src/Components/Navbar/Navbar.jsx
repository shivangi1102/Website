import React, {useState} from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import {Link }from'react-scroll';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
function Navbars() {
  const theme =useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (

    <div className="n-wrapper" id='Navbar'>
      <div className="n-left">
        <div className="n-name">Shivangi</div>
       <Toggle/>
      </div>

      <div className="n-right">
     
      <Navbar collapseOnSelect expand="sm" variant={darkMode ? 'dark' :""} >
      <Navbar.Brand href="#home">
       
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link ><Link spy={true} to='Skills' smooth={true} activeClass='activeClass'><li >Skills</li></Link></Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link ><Link spy={true} to='Works' smooth={true} activeClass='activeClass'><li>Experience</li></Link></Nav.Link>
          <Nav.Link >
          <Link spy={true} to='Projects' smooth={true} activeClass='activeClass'><li>Projects</li></Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <button className="button n-button">Contact</button>
    </Navbar>
    
      </div>
      
      
    </div>
  );
}

export default Navbars