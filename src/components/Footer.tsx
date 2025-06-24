import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-webrands-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Legal links */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </p>
            <p className="text-sm text-gray-400 mb-1">              
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </p>
            <p className="text-sm text-gray-400 mb-1">
              <Link to="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
            </p>
            <p className="text-sm text-gray-400 mb-1">
              <Link to="/refund-policy" className="hover:underline">
                Refund Policy
              </Link>
            </p>
            <p className="text-sm text-gray-400">
              <Link to="/delivery-policy" className="hover:underline">
                Delivery Policy
              </Link>
            </p>
          </div>

          {/* Company info */}
          <div className="text-sm text-gray-400 text-center md:text-right space-y-1">
            <p><strong>Webrands LLC</strong></p>
            <p>102 Gold Ave SW 162, Albuquerque, NM 87102, USA</p>
            <p>66 Avenue d’Ivry, 75013 Paris, France</p>
            <p>
              Email:{" "}
              <a href="mailto:contact@webrandsagency.com" className="underline">
                contact@webrandsagency.com
              </a>
            </p>
            <p>Phone: +1 505 523 1391</p>
            <p>EIN: 98-1865465</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Webrands. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
