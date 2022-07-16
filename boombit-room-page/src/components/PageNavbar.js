import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

function PageNavbar() {

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $("#navbar").addClass("navbar-light");
                $("#navbar").removeClass("navbar-dark");
                $("#navbar").addClass("bg-light");
                $("#navbar").removeClass("bg-dark");
            }
            else {
                $("#navbar").addClass("navbar-dark");
                $("#navbar").removeClass("navbar-light");
                $("#navbar").addClass("bg-dark");
                $("#navbar").removeClass("bg-light");
            }
        })
    })

    return (
        <Navbar id='navbar' bg="dark" fixed='top' variant='dark' expand="lg">
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
