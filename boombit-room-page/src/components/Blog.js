import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../images/pages/blog/blog-1.png';
import image2 from '../images/pages/blog/blog-2.png';
import image3 from '../images/pages/blog/blog-3.png';

function Blog() {
    return (
        <div className='section-blog'>
            <h2 className='text-light font-weight-bold'>Blog</h2>
            <section className='container'>
                <Card className="mx-2">
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Title>CATEGOTY</Card.Title>
                        <Card.Text>
                            Cursus lectus blandit ornare turpis purus pharetra Id amet enim.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-2">
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>CATEGOTY</Card.Title>
                        <Card.Text>
                            Cursus lectus blandit ornare turpis purus pharetra Id amet enim.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-2">
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Title>CATEGOTY</Card.Title>
                        <Card.Text>
                            Cursus lectus blandit ornare turpis purus pharetra Id amet enim.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>

        </div>
    )
}

export default Blog
