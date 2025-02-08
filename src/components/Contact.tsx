
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-webrands-dark">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Prêt à démarrer votre projet ? Nous sommes là pour vous accompagner.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="mailto:contact@webrands.com"
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail size={20} />
              <span>contact@webrands.com</span>
            </a>
            <a
              href="https://wa.me/33754582837"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone size={20} />
              <span>+33 7 54 58 28 37</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
