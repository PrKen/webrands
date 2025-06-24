import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      setErrorMessage("❌ Please fill in all required fields!");
      return;
    }

    const serviceId = "service_9tr21p3";
    const templateId = "template_i343zkc";
    const publicKey = "KkKOesSLfZSR943U_";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "Not provided",
          message: formData.message
        },
        publicKey
      )
      .then(() => {
        setSuccessMessage("✅ Your message has been sent successfully!");
        setErrorMessage("");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSuccessMessage(""), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setErrorMessage("❌ An error occurred. Please try again.");
      });
  };

  return (
    <section className="py-16 bg-gray-100 flex justify-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg p-8">
          {/* Left: Contact Form */}
          <div>
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
            <h2 className="text-3xl font-bold text-primary mb-6 text-center md:text-left">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name *
                </label>
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
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone *
                </label>
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
                <label className="block text-gray-700 font-semibold mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
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
                Send
              </button>
            </form>
          </div>

          {/* Right: Company Information */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 h-fit">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Company Info
            </h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p><strong>Webrands LLC</strong></p>
              <p>102 Gold Ave SW 162,<br />Albuquerque, NM 87102, USA</p>
              <p>66 Avenue d’Ivry,<br />75013 Paris, France</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@webrandsagency.com"
                  className="underline text-primary"
                >
                  contact@webrandsagency.com
                </a>
              </p>
              <p>Phone: +1 505 523 1391</p>
              <p>EIN: 98-1865465</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
