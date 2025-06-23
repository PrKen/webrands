import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-webrands-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Legal links */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
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

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Webrands. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
