import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white flex flex-col items-center text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        
        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/paiement.jpg"
            alt="Secure payment"
            className="rounded-lg shadow-lg w-[70%] h-auto object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Grow your business with Webrands
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Join the leading digital agency and boost your online presence today.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact-form" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all text-lg font-semibold"
          >
            Contact us
          </Link>          
        </div>

      </div>
    </section>
  );
};

export default Contact;
