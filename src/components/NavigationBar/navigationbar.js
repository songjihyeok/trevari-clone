
import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import "./navigationbar.css"
const navbar = ()=>{
    return <>
    <Navbar bg="light" variant="light" className="navbar_wrapper">
      <Navbar.Brand href="#home" id="logo">TREVARI</Navbar.Brand>
      <Nav className="mr-auto" id="nav_link_wrapper">
        <Nav.Link href="#home">모든 클럽 보기</Nav.Link>
        <Nav.Link href="#features">로그인</Nav.Link>
      </Nav>
    </Navbar>
  </>
}


export default navbar