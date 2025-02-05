const Footer = () => {
  return (
    <footer className="bg-webrands-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="/lovable-uploads/fe232a62-a661-4980-b3e6-aa2a131c085a.png"
              alt="Webrands Logo"
              className="h-8 brightness-0 invert"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Webrands. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;