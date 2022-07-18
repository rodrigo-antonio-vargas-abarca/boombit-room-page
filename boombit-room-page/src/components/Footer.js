import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <MDBFooter className='text-center h-100' color='white' bgColor='dark'>
            <MDBContainer className='row p-4 h-100'>
                <section className='h-100 col-sm-12 col-md-6 px-md-5 px-sm-0'>
                    <form action='h-100'>
                        <div className='row d-flex justify-content-center form'>

                            <h1 className='text-light footer-brand mt-5'>boombit.</h1>

                            <div className='col-auto mt-4'>
                                <p className='pt-2'>
                                    <strong className='text-secondary-2'>Suscríbete a nuestro newsletter</strong>
                                </p>
                            </div>

                            <MDBCol className='w-100 mt-3' md='5' start='10'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Correo electrónico"
                                    className="mb-3 bg-dark text-light"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </MDBCol>

                            <div className='col-auto w-100 mt-3' >
                                <Button className='w-100' variant="primary-2">
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" className='mr-2' />
                                    <label className='ml-5'>Suscríbete</label>
                                </Button>{' '}
                            </div>
                        </div>
                    </form>
                </section>

                <section className='mt-5 col-sm-12 col-md-6 d-flex flex-column justify-content-center'>
                    <MDBRow className='mt-sm-0 mt-md-5 ml-sm-0 ml-md-5'>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0 h-100 d-flex flex-row'>

                            <ul className='list-unstyled text-align-start align-middle mb-0 mx-md-5 mx-sm-0'>
                                <li>
                                    <a href='#!' className='text-primary-2'>
                                        Menú
                                    </a>
                                </li>
                                <li>
                                    <a href='#home' className='text-light'>
                                        Inicio
                                    </a>
                                </li>
                                <li>
                                    <a href='#blog' className='text-light'>
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href='#activities' className='text-light'>
                                        Actividades
                                    </a>
                                </li>
                                <li>
                                    <a href='#contact' className='text-light'>
                                        Contacto
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>

                <section className='mt-5 col-sm-12 col-md-6'>
                    <Container className='d-flex justify-content-around'>
                        <Button className='btn btn-icon'>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </Button>
                        <Button className='btn btn-icon'>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </Button>
                        <Button className='btn btn-icon'>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </Button>
                        <Button className='btn btn-icon'>
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                        </Button>
                    </Container>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className='text-secondary-2' href='https://mdbootstrap.com/'>
                    boombit-asset.com
                </a>
            </div>
        </MDBFooter>
    )
}

export default Footer
