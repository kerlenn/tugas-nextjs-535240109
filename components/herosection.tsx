"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "CineMeow Cozy Screening Room",
            subtitle: "A warm, calm, and comfortable movie space designed for cat lovers to relax and enjoy films without distractions.",
            imageUrl: "/images/banner_01.JPG",
        },
        {
            title: "CineMeow Cat Companion Experience",
            subtitle: "A curated library of diverse movies—from classics to new releases—ready to match any mood or moment.",
            imageUrl: "/images/banner_02.JPG",
        },
        {
            title: "CineMeow Wide Movie Selection",
            subtitle: "Enjoy your movie time with friendly, adorable cats that create a soothing and joyful atmosphere during each session.",
            imageUrl: "/images/banner_03.jpg",
        },
    ]

    return (
        <Carousel fade interval={4000} data-bs-theme="dark">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div 
                        style={{
                            backgroundImage:`url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "60vh",
                        }}>
                    </div>
                    <Carousel.Caption>
                        <h1 className="display-4 fw-bold">{slide.title}</h1>
                        <p className="lead">{slide.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;