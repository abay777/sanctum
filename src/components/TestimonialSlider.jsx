import React, { useState,useEffect } from "react";
import '../assets/styles/testimonial.css'


const CallToAction = () => {
  return (
    <div className="bg-white relative py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 bg-blue-900 rounded-md overflow-hidden relative">
          <img
            src="https://via.placeholder.com/600x400" // Placeholder image
            alt="Cityscape"
            className="object-cover w-full h-full opacity-60"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 flex items-center justify-center">
          <div className="bg-white border-2 border-blue-900 rounded-lg shadow-md p-8 relative">
            <h2 className="text-2xl font-bold text-blue-900">
              Interested to know more?
            </h2>
            <div className="mt-6">
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-blue-800">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



function TestimonialSlider() {
    const testimonials = [
        {
          id: 1,
          name: "Ajay Singh",
          designation: "Strata Investor",
          videoThumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 2,
          name: "Manav Bathija",
          designation: "Strata Investor",
          videoThumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 3,
          name: "Nayan Dharamshri",
          designation: "Data Science Leader | Career Coach",
          videoThumbnail: "https://via.placeholder.com/300x200",
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
    
        return () => clearInterval(interval);
      }, [testimonials.length]);
    
      return (
        <>
            <div className="testimonials-container">
            <div className="header">
                <div className="quote-icon">“</div>
                <h2 className="title">What our investors have to say</h2>
            </div>
            <div className="carousel">
                {testimonials.map((testimonial, index) => (
                <div
                    key={testimonial.id}
                    className={`carousel-item ${
                    index === currentIndex ? "active" : "inactive"
                    }`}
                >
                    <img
                    src={testimonial.videoThumbnail}
                    alt={testimonial.name}
                    className="thumbnail"
                    />
                    <h3 className="name">{testimonial.name}</h3>
                    <p className="designation">{testimonial.designation}</p>
                </div>
                ))}
            </div>
            <div className="indicators">
                {testimonials.map((_, index) => (
                <span
                    key={index}
                    className={`indicator ${
                    index === currentIndex ? "active-indicator" : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                />
                ))}
            </div>
            </div>
            <CallToAction/>
        </>
      );
    };

export default TestimonialSlider;
