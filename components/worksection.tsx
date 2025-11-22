'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Badge } from 'react-bootstrap';

function WorkSection() {
    return (
        <Container className="py-5">
            <Row className='mb-5'>
                <Col md={12} className="text-center">
                    <Badge bg="info" className="mb-3 px-3 py-2">Our Premium Offerings</Badge>
                    <h2 className="display-5 fw-bold mb-3">What We Offer</h2>
                    <p className="lead text-light">
                        Choose from our carefully curated cinema rooms, each designed for maximum comfort and feline fun
                    </p>
                </Col>
            </Row>
            <Row className="g-4">
                <Col md={4}>
                    <Card className="h-100 shadow-lg border-0 hover-card">
                        <Card.Img variant="top" src="/images/image-44.jpg" style={{ height: '250px', objectFit: 'cover' }} />
                        <Card.Body className="d-flex flex-column">
                            <div className="mb-2">
                                <Badge bg="success" className="me-2">Popular</Badge>
                                <Badge bg="secondary">Pet Friendly</Badge>
                            </div>
                            <Card.Title className="fw-bold fs-4 mb-3">
                                🐾 Cozy Cat Room
                            </Card.Title>
                            <Card.Text className="text-muted flex-grow-1">
                                A warm, intimate room designed for comfort, complete with soft lighting, plush seating, and friendly cats to keep you company throughout your movie experience.
                            </Card.Text>
                            <div className="d-grid mt-3">
                                <Button variant="dark" size="lg">Explore Room →</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 shadow-lg border-0 hover-card">
                        <Card.Img variant="top" src="/images/image-45.jpg" style={{ height: '250px', objectFit: 'cover' }} />
                        <Card.Body className="d-flex flex-column">
                            <div className="mb-2">
                                <Badge bg="warning" text="dark" className="me-2">Premium</Badge>
                                <Badge bg="secondary">4 Themes</Badge>
                            </div>
                            <Card.Title className="fw-bold fs-4 mb-3">
                                ✨ Themed Meow Rooms
                            </Card.Title>
                            <Card.Text className="text-muted flex-grow-1">
                                Choose from various themed spaces—Cute, Retro, Night Sky, or Minimalist—each crafted to match your preferred movie vibes and aesthetic preferences.
                            </Card.Text>
                            <div className="d-grid mt-3">
                                <Button variant="dark" size="lg">View Themes →</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 shadow-lg border-0 hover-card">
                        <Card.Img variant="top" src="/images/image-46.jpg" style={{ height: '250px', objectFit: 'cover' }} />
                        <Card.Body className="d-flex flex-column">
                            <div className="mb-2">
                                <Badge bg="info" className="me-2">Special</Badge>
                                <Badge bg="secondary">Events</Badge>
                            </div>
                            <Card.Title className="fw-bold fs-4 mb-3">
                                🎉 Mini Events & Cat Gatherings
                            </Card.Title>
                            <Card.Text className="text-muted flex-grow-1">
                                Perfect for small celebrations, private movie dates, pet meet-ups, or a quiet chill session with your favorite humans and adorable cats.
                            </Card.Text>
                            <div className="d-grid mt-3">
                                <Button variant="dark" size="lg">Book Event →</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkSection;