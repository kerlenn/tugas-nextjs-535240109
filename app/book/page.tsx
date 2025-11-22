"use client";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Badge, Alert, Modal } from "react-bootstrap";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";

interface BookingData {
  room: string;
  date: string;
  time: string;
  duration: string;
  guests: string;
  addOns: string[];
  name: string;
  email: string;
  phone: string;
}

const rooms = [
  {
    id: "cozy-cat",
    name: "Cozy Cat Room",
    price: 150000,
    image: "/images/image-44.jpg",
    description: "Intimate room with soft lighting and friendly cats",
    capacity: "2-4 guests"
  },
  {
    id: "themed-retro",
    name: "Retro Cinema Theme",
    price: 200000,
    image: "/images/image-46.jpg",
    description: "Vintage theater vibes with classic movie posters",
    capacity: "4-6 guests"
  },
  {
    id: "themed-nightsky",
    name: "Night Sky Theme",
    price: 200000,
    image: "/images/image-45.jpg",
    description: "Starlit ambiance perfect for romantic movies",
    capacity: "2-4 guests"
  }
];

const addOns = [
  { id: "premium-snacks", name: "Premium Snack Box", price: 50000 },
  { id: "cat-playtime", name: "Extended Cat Playtime (30 min)", price: 75000 },
  { id: "decorations", name: "Themed Decorations", price: 100000 },
  { id: "photography", name: "Photo Session Package", price: 150000 }
];

export default function BookNowPage() {
  const [bookingData, setBookingData] = useState<BookingData>({
    room: "",
    date: "",
    time: "",
    duration: "2",
    guests: "2",
    addOns: [],
    name: "",
    email: "",
    phone: ""
  });

  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const selectedRoom = rooms.find(r => r.id === bookingData.room);

  const calculateTotal = () => {
    let total = selectedRoom ? selectedRoom.price * parseInt(bookingData.duration) : 0;
    bookingData.addOns.forEach(addOnId => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (addOn) total += addOn.price;
    });
    return total;
  };

  const handleAddOnToggle = (addOnId: string) => {
    setBookingData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const isStep1Valid = bookingData.room && bookingData.date && bookingData.time;
  const isStep2Valid = bookingData.name && bookingData.email && bookingData.phone;

  return (
    <div>
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-dark text-white py-5" style={{
        background: "linear-gradient(135deg, #3d2838 0%, #6b4656 100%)",
        borderBottom: "4px solid #e6d5b8"
      }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h1 className="display-4 fw-bold mb-3" style={{ color: "#e6d5b8" }}>
                🎬 Book Your Cinema Experience
              </h1>
              <p className="lead">
                Reserve your private cozy cinema room with our friendly cats. 
                Choose your perfect setup and create unforgettable movie memories!
              </p>
            </Col>
            <Col md={4} className="text-center">
              <div className="fs-1">🐾 🎥 🍿</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Booking Progress */}
      <Container className="my-4">
        <Row>
          <Col>
            <div className="d-flex justify-content-center gap-3">
              <Badge 
                bg={currentStep >= 1 ? "dark" : "secondary"} 
                className="px-4 py-2"
              >
                1. Choose Room & Time
              </Badge>
              <Badge 
                bg={currentStep >= 2 ? "dark" : "secondary"}
                className="px-4 py-2"
              >
                2. Your Details
              </Badge>
              <Badge 
                bg={currentStep >= 3 ? "dark" : "secondary"}
                className="px-4 py-2"
              >
                3. Confirmation
              </Badge>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Left Side - Booking Form */}
            <Col md={8}>
              {/* Step 1: Room Selection */}
              {currentStep === 1 && (
                <Card className="shadow-lg border-0 mb-4">
                  <Card.Body className="p-4">
                    <h3 className="mb-4 fw-bold" style={{ color: "#3d2838" }}>
                      📍 Step 1: Choose Your Room & Time
                    </h3>

                    {/* Room Selection */}
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Select Room *</Form.Label>
                      <Row className="g-3">
                        {rooms.map(room => (
                          <Col md={4} key={room.id}>
                            <Card 
                              className={`h-100 cursor-pointer ${bookingData.room === room.id ? 'border-3 border-dark' : ''}`}
                              onClick={() => setBookingData({...bookingData, room: room.id})}
                              style={{ cursor: "pointer" }}
                            >
                              <Card.Img 
                                variant="top" 
                                src={room.image} 
                                style={{ height: "150px", objectFit: "cover" }}
                              />
                              <Card.Body>
                                <Card.Title className="fs-6 fw-bold">{room.name}</Card.Title>
                                <p className="small text-muted mb-2">{room.description}</p>
                                <Badge bg="info">{room.capacity}</Badge>
                                <p className="fw-bold mt-2 mb-0" style={{ color: "#6b4656" }}>
                                  Rp {room.price.toLocaleString()}/hour
                                </p>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Date *</Form.Label>
                          <Form.Control
                            type="date"
                            required
                            value={bookingData.date}
                            onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Time *</Form.Label>
                          <Form.Select
                            required
                            value={bookingData.time}
                            onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                          >
                            <option value="">Select time...</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="14:00">02:00 PM</option>
                            <option value="16:00">04:00 PM</option>
                            <option value="18:00">06:00 PM</option>
                            <option value="20:00">08:00 PM</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Duration (hours)</Form.Label>
                          <Form.Select
                            value={bookingData.duration}
                            onChange={(e) => setBookingData({...bookingData, duration: e.target.value})}
                          >
                            <option value="1">1 Hour</option>
                            <option value="2">2 Hours</option>
                            <option value="3">3 Hours</option>
                            <option value="4">4 Hours</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Number of Guests</Form.Label>
                          <Form.Select
                            value={bookingData.guests}
                            onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
                          >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Add-ons */}
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">🎁 Add Premium Add-ons (Optional)</Form.Label>
                      <Row className="g-3">
                        {addOns.map(addOn => (
                          <Col md={6} key={addOn.id}>
                            <Card 
                              className={`h-100 cursor-pointer ${bookingData.addOns.includes(addOn.id) ? 'border-3 border-success' : ''}`}
                              onClick={() => handleAddOnToggle(addOn.id)}
                              style={{ cursor: "pointer" }}
                            >
                              <Card.Body>
                                <Form.Check
                                  type="checkbox"
                                  label={
                                    <div>
                                      <div className="fw-bold">{addOn.name}</div>
                                      <div className="text-muted small">
                                        +Rp {addOn.price.toLocaleString()}
                                      </div>
                                    </div>
                                  }
                                  checked={bookingData.addOns.includes(addOn.id)}
                                  onChange={() => handleAddOnToggle(addOn.id)}
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Form.Group>

                    <div className="d-grid">
                      <Button 
                        variant="dark" 
                        size="lg"
                        onClick={() => setCurrentStep(2)}
                        disabled={!isStep1Valid}
                      >
                        Continue to Your Details →
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )}

              {/* Step 2: Personal Details */}
              {currentStep === 2 && (
                <Card className="shadow-lg border-0 mb-4">
                  <Card.Body className="p-4">
                    <h3 className="mb-4 fw-bold" style={{ color: "#3d2838" }}>
                      📝 Step 2: Your Details
                    </h3>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={bookingData.name}
                        onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={bookingData.email}
                        onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Phone Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="+62 812 3456 7890"
                        required
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Special Requests (Optional)</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Any special requests or dietary restrictions?"
                      />
                    </Form.Group>

                    <div className="d-flex gap-2">
                      <Button 
                        variant="outline-dark" 
                        onClick={() => setCurrentStep(1)}
                      >
                        ← Back
                      </Button>
                      <Button 
                        variant="dark" 
                        className="flex-grow-1"
                        type="submit"
                        disabled={!isStep2Valid}
                      >
                        Complete Booking 🎉
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </Col>

            {/* Right Side - Booking Summary */}
            <Col md={4}>
              <Card className="shadow-lg border-0 sticky-top" style={{ top: "100px" }}>
                <Card.Body className="p-4" style={{ 
                  background: "linear-gradient(135deg, #fef9f0 0%, #f5f0e8 100%)" 
                }}>
                  <h4 className="fw-bold mb-4" style={{ color: "#3d2838" }}>
                    📋 Booking Summary
                  </h4>

                  {selectedRoom ? (
                    <>
                      <div className="mb-3">
                        <Image
                          src={selectedRoom.image}
                          alt={selectedRoom.name}
                          width={300}
                          height={180}
                          className="rounded w-100"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      
                      <h5 className="fw-bold mb-3">{selectedRoom.name}</h5>
                      
                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Date:</span>
                          <span className="fw-bold">
                            {bookingData.date || "-"}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Time:</span>
                          <span className="fw-bold">
                            {bookingData.time || "-"}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Duration:</span>
                          <span className="fw-bold">
                            {bookingData.duration} hour(s)
                          </span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Guests:</span>
                          <span className="fw-bold">
                            {bookingData.guests} guest(s)
                          </span>
                        </div>
                      </div>

                      <hr />

                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-2">
                          <span>Room ({bookingData.duration}h)</span>
                          <span>
                            Rp {(selectedRoom.price * parseInt(bookingData.duration)).toLocaleString()}
                          </span>
                        </div>
                        
                        {bookingData.addOns.length > 0 && (
                          <>
                            {bookingData.addOns.map(addOnId => {
                              const addOn = addOns.find(a => a.id === addOnId);
                              return addOn ? (
                                <div key={addOn.id} className="d-flex justify-content-between mb-2 small">
                                  <span className="text-muted">+ {addOn.name}</span>
                                  <span>Rp {addOn.price.toLocaleString()}</span>
                                </div>
                              ) : null;
                            })}
                          </>
                        )}
                      </div>

                      <hr />

                      <div className="d-flex justify-content-between mb-3">
                        <span className="fw-bold fs-5">Total:</span>
                        <span className="fw-bold fs-4" style={{ color: "#6b4656" }}>
                          Rp {calculateTotal().toLocaleString()}
                        </span>
                      </div>

                      <Alert variant="info" className="small mb-0">
                        💡 Full payment required upon arrival. We accept cash and all major cards.
                      </Alert>
                    </>
                  ) : (
                    <div className="text-center text-muted py-4">
                      <div className="fs-1 mb-3">🎬</div>
                      <p>Select a room to see pricing</p>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Body className="p-5 text-center">
          <div className="mb-4">
            <div className="fs-1 mb-3">🎉</div>
            <h2 className="fw-bold mb-3" style={{ color: "#3d2838" }}>
              Booking Confirmed!
            </h2>
            <p className="lead text-muted">
              Thank you for choosing MeowCinema, <strong>{bookingData.name}</strong>!
            </p>
          </div>

          <Alert variant="success" className="text-start">
            <h5 className="fw-bold mb-3">Booking Details:</h5>
            <p className="mb-1"><strong>Room:</strong> {selectedRoom?.name}</p>
            <p className="mb-1"><strong>Date:</strong> {bookingData.date}</p>
            <p className="mb-1"><strong>Time:</strong> {bookingData.time}</p>
            <p className="mb-1"><strong>Duration:</strong> {bookingData.duration} hour(s)</p>
            <p className="mb-1"><strong>Total:</strong> Rp {calculateTotal().toLocaleString()}</p>
          </Alert>

          <p className="text-muted mb-4">
            We've sent a confirmation email to <strong>{bookingData.email}</strong> with all the details. 
            We can't wait to see you! 🐾
          </p>

          <div className="d-flex gap-2 justify-content-center">
            <Button variant="dark" onClick={() => setShowModal(false)} size="lg">
              Book Another Room
            </Button>
            <Button variant="outline-dark" href="/" size="lg">
              Back to Home
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Footer />
    </div>
  );
}