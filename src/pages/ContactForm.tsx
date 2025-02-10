import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "", 
    email: "", 
    message: "" 
  });
  const [successMessage, setSuccessMessage] = useState(""); // Stocke le message temporaire
  const [errorMessage, setErrorMessage] = useState(""); // Stocke les erreurs

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Vérifier que les champs obligatoires sont remplis
    if (!formData.name || !formData.phone || !formData.message) {
      setErrorMessage("❌ Veuillez remplir tous les champs obligatoires !");
      return;
    }

    // Vérification des données envoyées
    console.log("Données envoyées à EmailJS :", formData);

    const serviceId = "service_9tr21p3"; 
    const templateId = "template_i343zkc"; 
    const publicKey = "KkKOesSLfZSR943U_"; 

    // Envoi des données à EmailJS
    emailjs.send(serviceId, templateId, {
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "Non renseigné", // Gérer l'absence d'email
      message: formData.message,
    }, publicKey)
    .then(() => {
      setSuccessMessage("✅ Votre message a été envoyé avec succès !");
      setErrorMessage("");
      setFormData({ name: "", phone: "", email: "", message: "" });

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    })
    .catch((error) => {
      console.error("Erreur EmailJS :", error);
      setErrorMessage("❌ Une erreur s'est produite. Veuillez réessayer.");
    });
  };

  return (
    <section className="py-16 bg-gray-100 flex justify-center">
      <div className="container mx-auto px-6 max-w-lg bg-white shadow-lg rounded-lg p-8">
        
        {/* Messages temporaires */}
        {successMessage && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg mb-4 text-center">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mb-4 text-center">
            {errorMessage}
          </div>
        )}

        <h2 className="text-3xl font-bold text-primary text-center mb-6">Contactez-nous</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nom *</label>
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
            <label className="block text-gray-700 font-semibold mb-2">Téléphone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email (Facultatif)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message *</label>
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
