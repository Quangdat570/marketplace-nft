import React from 'react'
import { Container, Row, Col, Navbar, Nav, Offcanvas, NavDropdown, Form, Button, Collapse, Stack } from 'react-bootstrap'
import Link from 'next/link'
import styles from './Header.module.css'
import {BiUser} from 'react-icons/bi'
import {  BsPerson,BsHandbag  } from "react-icons/bs";

const Header = () => {
  return (
    <>
     {['md'].map((expand) => (
        <Navbar key={expand}   expand={expand} className={styles.background}>
          <Container fluid >
            <Navbar.Brand href="#" className={styles.logo}>NFT Marketplace</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className={styles.background}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={styles.text}>
                NFT Marketplace
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={styles.background}>
                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center" >
                  <Nav.Link href="" className={styles.text}>Marketplace</Nav.Link>
                  <Nav.Link href="#" className={styles.text}>Rankings</Nav.Link>
                  <Nav.Link href="#" className={styles.text}>Connect a Wallet</Nav.Link>
                  <Nav.Link href="#" >

                    <div className={styles.button_header}><BiUser/> <span>Login</span></div>
                    </Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
  
}

export default Header