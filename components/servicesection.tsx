"use client";
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

function ServiceSection() {
    return (
        <Container className='py-5'>
            <Row className="mb-5">
                <Col md={12} className="text-center">
                    <h2 className="display-5 fw-bold mb-3">Why Choose CineMeow?</h2>
                    <p className="lead text-muted">
                        We offer more than just a movie — we create memorable experiences
                    </p>
                </Col>
            </Row>
            <Row className="g-4">
                <Col md={4}>
                    <Card className="text-center border-0 h-100 p-4 service-card">
                        <div className="mb-4">
                            <Image 
                                src="images/about-icon1.png" 
                                alt="Flexible Booking" 
                                fluid
                                className="service-icon"
                                style={{ maxHeight: '100px', objectFit: 'contain' }}
                            />
                        </div>
                        <Card.Body>
                            <h4 className="fw-bold mb-3">📅 Flexible Booking</h4>
                            <p className="text-muted">
                                Book your preferred room, time, and duration with our simple and seamless online reservation system. Available 24/7 for your convenience.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center border-0 h-100 p-4 service-card">
                        <div className="mb-4">
                            <Image 
                                src="images/about-icon2.png" 
                                alt="Personalized Experience" 
                                fluid
                                className="service-icon"
                                style={{ maxHeight: '100px', objectFit: 'contain' }}
                            />
                        </div>
                        <Card.Body>
                            <h4 className="fw-bold mb-3">✨ Personalized Experience</h4>
                            <p className="text-muted">
                                Customize your room setup, snacks, ambience, or choose extra cat time for a more tailored and unforgettable movie session.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center border-0 h-100 p-4 service-card">
                        <div className="mb-4">
                            <Image 
                                src="images/about-icon3.png" 
                                alt="Premium Add-Ons" 
                                fluid
                                className="service-icon"
                                style={{ maxHeight: '100px', objectFit: 'contain' }}
                            />
                        </div>
                        <Card.Body>
                            <h4 className="fw-bold mb-3">🎁 Premium Add-Ons</h4>
                            <p className="text-muted">
                                Enjoy premium snacks, themed decorations, high-quality surround sound, and exclusive private cat playtime packages.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceSection;