import React from 'react';
import Card from 'react-bootstrap/Card';
import imageHeader from '../images/pages/formula/formula-header.png'

function Formula() {
    return (
        <div id='activities' className='section-formula'>
            <h1 className='pt-5'>Ellos son especiales</h1>
            <div className='row'>
                <Card className='header mx-4 col-12 mt-5'>
                    <Card.Img src={imageHeader} />
                </Card>
                <section className='mb-5 mx-2 col-12 row'>
                    <Card className="mt-2 col-sm-12 col-md-4">
                        <Card.Body>
                            <Card.Title className='mb-3'>TITLE 1</Card.Title>
                            <Card.Subtitle className='mb-3'>Subtitle</Card.Subtitle>
                            <Card.Text>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-2 col-sm-12 col-md-4">
                        <Card.Body>
                            <Card.Title className='mb-3'>TITLE 2</Card.Title>
                            <Card.Subtitle className='mb-3'>Subtitle</Card.Subtitle>
                            <Card.Text>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-2 col-sm-12 col-md-4">
                        <Card.Body>
                            <Card.Title className='mb-3'>TITLE 3</Card.Title>
                            <Card.Subtitle className='mb-3'>Subtitle</Card.Subtitle>
                            <Card.Text>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </section>
            </div>
        </div>
    )
}

export default Formula
