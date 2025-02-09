import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState(""); // Stocke le message temporaire

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const serviceId = "service_9tr21p3"; 
    const templateId = "template_i343zkc"; 
    const publicKey = "KkKOesSLfZSR943U_"; 
  
    emailjs.send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setSuccessMessage("✅ Votre message a été envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
  
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch(() => {
        setSuccessMessage("❌ Une erreur s'est produite. Veuillez réessayer.");
      });
  };
  

  return (
    <section className="py-16 bg-gray-100 flex justify-center">
      <div className="container mx-auto px-6 max-w-lg bg-white shadow-lg rounded-lg p-8">
        
        {/* Message temporaire en Breadcrumbs */}
        {successMessage && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg mb-4 text-center">
            {successMessage}
          </div>
        )}

        <h2 className="text-3xl font-bold text-primary text-center mb-6">Contactez-nous</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
