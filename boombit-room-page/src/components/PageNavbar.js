import React from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

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
        $(".navbar-toggler").click(function () {
            console.log("abriendo");
        })
    })

    return (
        <Navbar id='navbar' bg="dark" fixed='top' variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">boombit.</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav className="my-2 my-lg-0 my-auto" style={{ maxHeight: '100vh' }} navbarScroll>
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#activities">Actividades</Nav.Link>
                        <Nav.Link href="#deputies" className='d-block d-sm-none'>Diputados</Nav.Link>
                        <Nav.Link href="#principles" className='d-block d-sm-none'>Principios de nuestro partido</Nav.Link>
                        <Nav.Link href="#affiliation" className='d-block d-sm-none'>Afiliación</Nav.Link>
                        <Button variant="outline-secondary">Contáctenos</Button>
                        <Container className='d-flex justify-content-around d-sm-none'>
                            <Button className='btn btn-icon'>
                                <FontAwesomeIcon icon={faFacebook} size="2x"/>
                            </Button>
                            <Button className='btn btn-icon'>
                                <FontAwesomeIcon icon={faTwitter} size="2x"/>
                            </Button>
                            <Button className='btn btn-icon'>
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                            </Button>
                            <Button className='btn btn-icon'>
                                <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                            </Button>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PageNavbar
