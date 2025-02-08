import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Importation de react-scroll
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <span className="text-primary font-bold text-sm">L'agence de site N°1</span>
            <a href="/" className="flex items-center">
              <img
                src="/lovable-uploads/70478792-c98e-460a-a998-7d2e66fa11b2.png"
                alt="Webrands Logo"
                className="h-10"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer text-webrands-dark hover:text-primary transition-colors"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="why-us"
              smooth={true}
              duration={500}
              className="cursor-pointer text-webrands-dark hover:text-primary transition-colors"
            >
              Pourquoi nous
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-webrands-dark hover:text-primary transition-colors"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-webrands-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer text-webrands-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </ScrollLink>
              <ScrollLink
                to="why-us"
                smooth={true}
                duration={500}
                className="cursor-pointer text-webrands-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pourquoi nous
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer text-webrands-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
