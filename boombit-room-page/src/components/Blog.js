import React from 'react';
import Card from 'react-bootstrap/Card';
import image1 from '../images/pages/blog/blog-1.png';
import image2 from '../images/pages/blog/blog-2.png';
import image3 from '../images/pages/blog/blog-3.png';

function Blog() {
    return (
        <div id='blog' className='section-blog pb-4'>
            <h2 className='text-light font-weight-bold pt-4'>Blog</h2>
            <section className='container mt-4 mb-4'>
                <Card className="mx-3">
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Subtitle className="mb-2">CATEGOTY</Card.Subtitle>
                        <Card.Title>Cursus lectus blandit ornare turpis purus pharetra Id amet enim.</Card.Title>
                        <Card.Text className='d-none d-md-block'>
                            Venenatis amet, nisi odio nisl. In id hac gravida faucibus eu suspendisse amet pellentesque. At mi pretium auctor faucibus adipiscing senectus pharetra...
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-3">
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Subtitle className="mb-2">CATEGOTY</Card.Subtitle>
                        <Card.Title>Cursus lectus blandit ornare turpis purus pharetra Id amet enim.</Card.Title>
                        <Card.Text className='d-none d-md-block'>
                            Venenatis amet, nisi odio nisl. In id hac gravida faucibus eu suspendisse amet pellentesque. At mi pretium auctor faucibus adipiscing senectus pharetra...
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-3">
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Subtitle className="mb-2">CATEGOTY</Card.Subtitle>
                        <Card.Title>Cursus lectus blandit ornare turpis purus pharetra Id amet enim.</Card.Title>
                        <Card.Text className='d-none d-md-block'>
                            Venenatis amet, nisi odio nisl. In id hac gravida faucibus eu suspendisse amet pellentesque. At mi pretium auctor faucibus adipiscing senectus pharetra...
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-3">
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Subtitle className="mb-2">CATEGOTY</Card.Subtitle>
                        <Card.Title>Cursus lectus blandit ornare turpis purus pharetra Id amet enim.</Card.Title>
                        <Card.Text className='d-none d-md-block'>
                            Venenatis amet, nisi odio nisl. In id hac gravida faucibus eu suspendisse amet pellentesque. At mi pretium auctor faucibus adipiscing senectus pharetra...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>

        </div>
    )
}

export default Blog
