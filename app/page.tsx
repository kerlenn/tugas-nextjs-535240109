"use client";
import React from "react";
import Image from "next/image";

// Components
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

// Bootstrap
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section - Home */}
        <section id="home">
          <HeroSection />
        </section>
        
        {/* About Section - Enhanced */}
        <section id="about">
          <Container className="my-5 py-4 about-section">
          <Row className="align-items-center g-4">
            <Col md={6} className="order-md-1 order-2">
              <div className="pe-md-4">
                <h2 className="display-5 fw-bold text-primary mb-3">
                  Welcome to CineMeow 🐾
                </h2>
                <h5 className="text-muted mb-4">
                  Your private mini theater experience — anytime, anywhere.
                </h5>
                <h4 className="fw-bold mb-3">What We Do?</h4>
                <p className="lead text-secondary">
                  At CineMeow, we create a cozy, pet-friendly movie space where cat lovers can relax, enjoy films, and feel the warm company of our friendly cats. We combine comfort, ambience, and feline companionship to bring you a unique movie-watching experience you won't find anywhere else.
                </p>
                <Button variant="info" size="lg" className="mt-3 shadow-sm">
                  Learn More →
                </Button>
              </div>
            </Col>
            <Col md={6} className="order-md-2 order-1">
              <div className="position-relative">
                <Image 
                  src="/images/about.png" 
                  alt="About MeowCinema" 
                  width={600}
                  height={500}
                  className="rounded shadow-lg w-100 h-auto"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        </section>

        {/* Work Section with Dark Background - Our Rooms */}
        <section id="our-rooms" className="bg-dark text-white py-5">
          <WorkSection />
        </section>

        {/* Service Section */}
        <section id="services" className="py-5 bg-light">
          <ServiceSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5">
          <ContactSection />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}