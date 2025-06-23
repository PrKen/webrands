import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <span className="text-primary font-bold text-sm">The #1 Website Agency</span>
            <a href="/" className="flex items-center">
              <img
                src="/assets/webrands-logo.png"
                alt="Webrands Logo"
                className="h-10"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
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
              Why Choose Us
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-webrands-dark hover:text-primary transition-colors"
            >
              Contact
            </ScrollLink>
            <a
              href="https://www.instagram.com/webrands_agency/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-webrands-dark hover:text-primary transition-colors flex items-center"
            >
              <FaInstagram size={20} className="mr-2" /> Instagram
            </a>
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
                Why Choose Us
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
              <a
                href="https://www.instagram.com/webrands_agency/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-webrands-dark hover:text-primary transition-colors flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FaInstagram size={20} className="mr-2" /> Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
