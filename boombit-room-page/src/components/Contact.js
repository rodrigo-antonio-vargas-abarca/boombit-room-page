import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div className='w-100 h-100 row bg-dark text-light section-contacts d-flex flex-column justify-contet-center'>
            <div className='h-100 col-sm-12 col-md-6 mt-5 mx-md-5 mx-sm-0 d-flex flex-column justify-contet-center'>
                <section className='mx-2 mt-5'>
                    <h1>Nuestros fieles amigos, Nuestras mascotas, Nuestras familias</h1>
                </section>
                <section className='mt-4'>
                    <Form>
                        <Row>
                            <Col sm={12} md={6} className='py-2 px-4'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Nombre*"
                                    className="text-light col-sm-12"
                                >
                                    <Form.Control type="text" placeholder="Nombre Apellido Apellido" />
                                </FloatingLabel>
                            </Col>
                            <Col sm={12} md={6} className='py-2 px-4'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Correo electrónico*"
                                    className="text-light"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} className='py-2 px-4'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Teléfono*"
                                    className="text-light"
                                >
                                    <Form.Control type="phone" placeholder="####-####" />
                                </FloatingLabel>
                            </Col>
                            <Col sm={12} md={6} className='py-2 px-4'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Cantón*"
                                    className="text-light"
                                >
                                    <Form.Control type="text" placeholder="Nombre" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12} md={6} className='px-4'>
                                <Button className='w-100' variant="primary-2">
                                    <FontAwesomeIcon icon={faUser} size="1x" className='mr-2' />
                                    <label className='ml-5'>Contáctanos</label>
                                </Button>{' '}
                            </Col>
                        </Row>
                    </Form>
                </section>
            </div>
        </div>
    )
}

export default Contact
