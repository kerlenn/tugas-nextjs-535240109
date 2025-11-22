"use client"
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useState } from 'react';

function ContactSection() {
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <Container className='my-5 py-5'>
            <Row className='justify-content-center'>
                <Col md={10}>
                    <Card className="shadow-lg border-0 overflow-hidden">
                        <Row className="g-0">
                            {/* Left Side - Info */}
                            <Col md={4} className="bg-dark text-white p-5 d-flex flex-column justify-content-center">
                                <h3 className="mb-4">Get in Touch 📬</h3>
                                <p className="mb-4">
                                    Have questions about our cinema rooms, booking, or special events? We'd love to hear from you!
                                </p>
                                <div className="mb-3">
                                    <h6 className="text-info">📍 Location</h6>
                                    <p className="small">Meow Street 109, Cat City</p>
                                </div>
                                <div className="mb-3">
                                    <h6 className="text-info">📞 Phone</h6>
                                    <p className="small">+535 24 0109</p>
                                </div>
                                <div className="mb-3">
                                    <h6 className="text-info">✉️ Email</h6>
                                    <p className="small">kerlen.535240109@stu.untar.ac.id</p>
                                </div>
                            </Col>

                            {/* Right Side - Form */}
                            <Col md={8} className="p-5">
                                <h2 className="mb-2 fw-bold">Contact Us</h2>
                                <p className="text-muted mb-4">
                                    Fill out the form below and we'll get back to you within 24 hours!
                                </p>

                                {showAlert && (
                                    <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
                                        ✅ Message sent successfully! We'll contact you soon.
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formName">
                                                <Form.Label>Full Name *</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Kerlen Nina Mae" 
                                                    required 
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formEmail">
                                                <Form.Label>Email Address *</Form.Label>
                                                <Form.Control 
                                                    type="email" 
                                                    placeholder="kerlen.535240109@stu.untar.ac.id" 
                                                    required 
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control 
                                            type="tel" 
                                            placeholder="+535 24 0109" 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formSubject">
                                        <Form.Label>Subject *</Form.Label>
                                        <Form.Select required>
                                            <option value="">Choose a subject...</option>
                                            <option value="booking">Room Booking Inquiry</option>
                                            <option value="event">Special Event Booking</option>
                                            <option value="pricing">Pricing Information</option>
                                            <option value="other">Other Questions</option>
                                        </Form.Select>
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label>Your Message *</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            rows={5} 
                                            placeholder="Tell us what you need..." 
                                            required 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formNewsletter">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Yes, I want to receive updates and special offers from MeowCinema" 
                                        />
                                    </Form.Group>

                                    <div className="d-grid">
                                        <Button variant="dark" type="submit" size="lg">
                                            Send Message 📧
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;