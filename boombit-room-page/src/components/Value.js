import React from 'react';
import Card from 'react-bootstrap/Card';
import imgValue from '../images/pages/value/value-header.png';
import imgUser from '../images/pages/value/user.png';

function Value() {
    return (
        <div id='deputies' className='section-value'>
            <div className='row justify-content-center pb-5'>
                <Card className='header px-2 col-sm-12 col-md-5 mt-5'>
                    <Card.Img src={imgValue} />
                </Card>
                <Card className="my-auto col-sm-12 col-md-6">
                    <Card.Body>
                        <Card.Title> <h1 className='mt-5 mb-5'>Nuestras diferencias nos hacen mejores</h1></Card.Title>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            <br />
                            <br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Card.Text>
                        <Card.Text className='mt-5'>
                            “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”
                        </Card.Text>
                        <Card className='user-card'>
                            <Card.Img src={imgUser} height="50px" width="50px" />
                            <Card.Title>Herald Flores</Card.Title>
                            <Card.Text>Usuario de Facebook</Card.Text>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Value
