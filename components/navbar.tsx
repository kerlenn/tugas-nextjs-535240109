'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark shadow-sm" sticky="top">
            <Container fluid className="px-4">
                <Navbar.Brand href="/#home" className="fw-bold fs-4 d-flex align-items-center gap-2">
                    <span style={{ fontSize: '1.8rem' }}>🐾</span>
                    <span>CineMeow</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/#home" className="mx-2">Home</Nav.Link>
                        <Nav.Link href="/#about" className="mx-2">About</Nav.Link>

                        <NavDropdown title="Our Rooms" id="navbarScrollingDropdown" className="mx-2">
                            <Nav.Link href="/#our-rooms">Our Rooms</Nav.Link>
                            <NavDropdown.Item href="/#cozy-room">Cozy Cat Room</NavDropdown.Item>
                            <NavDropdown.Item href="/#themed-rooms">Themed Meow Rooms</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/#events">Mini Events</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/#services" className="mx-2">Services</Nav.Link>
                        <Nav.Link href="/#contact" className="mx-2">
                            Contact
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex gap-2">
                        <Form.Control
                            type="search"
                            placeholder="Search something..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-info">Search</Button>
                        <Button variant="info" className="ms-2" href="/book">Book Now</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;