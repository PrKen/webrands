import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white flex flex-col items-center text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        
        {/* Image avec taille réduite */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/paiement.jpg"
            alt="Paiement sécurisé"
            className="rounded-lg shadow-lg w-[70%] h-auto object-contain"
          />
        </div>

        {/* Texte principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Boostez votre entreprise avec Webrands
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Rejoignez la meilleure agence digitale et développez votre présence en ligne dès aujourd’hui.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact-form"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all text-lg font-semibold"
          >
            Contactez-nous
          </a>
          
          <a
            href="https://wa.me/+33754582837" // Remplacez par votre numéro WhatsApp Business
            className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all text-lg font-semibold"
          >
            <FaWhatsapp className="mr-2" size={24} />
            WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
