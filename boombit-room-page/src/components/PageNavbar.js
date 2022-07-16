import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function PageNavbar() {
    return (
        <Navbar bg="dark" fixed='top' variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">boombit.</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav className="my-2 my-lg-0" style={{ maxHeight: '100vh' }} navbarScroll>
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#activities">Actividades</Nav.Link>
                        <Button variant="outline-secondary">Contáctenos</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PageNavbar
