import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/fe232a62-a661-4980-b3e6-aa2a131c085a.png" alt="Webrands Logo" className="h-8" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-webrands-dark hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="text-webrands-dark hover:text-primary transition-colors">Pourquoi nous</a>
            <a href="#contact" className="text-webrands-dark hover:text-primary transition-colors">Contact</a>
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
              <a
                href="#services"
                className="text-webrands-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#why-us"
                className="text-webrands-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pourquoi nous
              </a>
              <a
                href="#contact"
                className="text-webrands-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;