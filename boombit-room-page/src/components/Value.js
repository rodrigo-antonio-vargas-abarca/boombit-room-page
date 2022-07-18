import React from 'react';
import Card from 'react-bootstrap/Card';
import imgValue from '../images/pages/value/value-header.png';
import imgUser from '../images/pages/value/user.png';

function Value() {
    return (
        <div className='section-value'>
            <div className='row'>
                <Card className='header px-2 col-sm-12 mt-5'>
                    <Card.Img src={imgValue} />
                </Card>
                <h1 className='mt-5'>Nuestras diferencias nos hacen mejores</h1>
                <Card className="mt-5">
                    <Card.Body>
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
