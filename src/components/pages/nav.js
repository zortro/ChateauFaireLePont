import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

import '../assets/css/nav.css'
import { OffcanvasTitle } from "react-bootstrap";

export default function NavigationBar() {
    const [open, setOpen] = useState(false)

    console.log(open)
    
    function openModal() {
        if (open !== true) {
            return setOpen(true)
        }
        return setOpen(false)
    }

    //maybe export this to the server
    const navLabels = [
        {title: 'Home', route: ''},
        {title: 'Winery', route: 'Wine'},
        {title: 'Dining', route: 'Restaurant'},
        {title: 'Events', route: 'Events'},
        {title: 'Shop', route: 'Shop'},
        {title: 'Contact', route: 'Connect'}
    ]

    const modalLabels = [
        {title: 'ex.', route: 'route'},
        {title: 'ex.', route: 'route'},
        {title: 'ex.', route: 'route'},
        {title: 'ex.', route: 'route'}
    ]

    return(
            <>
            {[true, 'sm', 'md', 'lg'].map((expand) => (
                <Navbar key={expand} expand={expand} bg="dark" variant="dark" fixed='top'>
                    <Container fluid>
                    <Navbar.Brand href="/">The Chateau</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement='end'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                The Chateau
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/Wine">Wine</Nav.Link>
                                    <Nav.Link href="/Restaurant">Restaurant</Nav.Link>
                                </Nav>
                </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            </>
        )
    }