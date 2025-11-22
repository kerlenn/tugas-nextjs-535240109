"use client"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer id="footer" className="bg-dark text-white pt-5 pb-3">
            <Container>
                <Row className="g-4">
                    {/* Brand & About */}
                    <Col md={4}>
                        <h3 className="mb-3 fw-bold">🎬 MeowCinema</h3>
                        <p className="text-light">
                            Your purr-fect private cinema experience. Watch movies, meet cats, create memories.
                        </p>
                        <h6 className="mb-3">Follow Us</h6>
                        <ul className="list-unstyled d-flex gap-3">
                            <li>
                                <a href="#" className="text-white fs-4 hover-social">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white fs-4 hover-social">
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white fs-4 hover-social">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white fs-4 hover-social">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white fs-4 hover-social">
                                    <i className="bi bi-tiktok"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>

                    {/* Quick Links */}
                    <Col md={2}>
                        <h5 className="mb-3 text-info">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover-link">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover-link">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover-link">Our Rooms</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover-link">Services</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover-link">Gallery</a>
                            </li>
                        </ul>
                    </Col>

                    {/* Our Services */}
                    <Col md={3}>
                        <h5 className="mb-3 text-info">Our Services</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover-link">Private Cinema Rooms</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover-link">Themed Experiences</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover-link">Cat Companionship</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover-link">Special Events</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover-link">Premium Add-ons</a>
                            </li>
                        </ul>
                    </Col>

                    {/* Newsletter */}
                    <Col md={3}>
                        <h5 className="mb-3 text-info">Stay Updated</h5>
                        <p className="text-light small mb-3">
                            Subscribe to get special offers and movie recommendations!
                        </p>
                        <Form className="mb-3">
                            <InputGroup>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="bg-dark text-white border-secondary"
                                />
                                <Button variant="info">
                                    <i className="bi bi-send"></i>
                                </Button>
                            </InputGroup>
                        </Form>
                        <div className="mb-3">
                            <h6 className="text-info mb-2">Contact Info</h6>
                            <p className="text-light small mb-1">
                                <i className="bi bi-telephone me-2"></i>+62 123 456 7890
                            </p>
                            <p className="text-light small">
                                <i className="bi bi-envelope me-2"></i>hello@meowcinema.com
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Bottom Bar */}
                <Row className="mt-4 pt-4 border-top border-secondary">
                    <Col md={6} className="text-center text-md-start">
                        <p className="mb-0 text-light small">
                            © 2025 MeowCinema. All Rights Reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <p className="mb-0 text-light small">
                            Made with 💙 by <span className="text-info fw-bold">Kerlen Nina Mae</span>
                        </p>
                    </Col>
                </Row>

                {/* Legal Links */}
                <Row className="mt-2">
                    <Col className="text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="#" className="text-light small text-decoration-none hover-link">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item text-light">•</li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light small text-decoration-none hover-link">Terms of Service</a>
                            </li>
                            <li className="list-inline-item text-light">•</li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light small text-decoration-none hover-link">Refund Policy</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}