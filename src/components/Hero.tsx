const Hero = () => {
  return (
    <section className="pt-16 pb-8 min-h-[70vh] flex items-center bg-gradient-to-br from-white to-webrands-gray">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Texte à gauche */}
        <div className="md:w-1/2 text-left animate-fadeIn space-y-6">
          <h1 className="text-5xl font-bold text-primary">
            Créons ensemble votre présence digitale
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Webrands transforme vos idées en expériences web exceptionnelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1 text-center"
            >
              Contactez-nous
            </a>
            <a
              href="#services"
              className="inline-block bg-accent text-webrands-dark px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1 text-center"
            >
              Nos Services
            </a>
          </div>
        </div>

        {/* Image à droite avec texte au-dessus */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center bg-white px-6 py-2 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-primary">
              Votre réussite, notre métier.
            </h2>
            <p className="text-gray-700">Développez tout votre potentiel avec Webrands !</p>
          </div>
          <img 
            src="/assets/hero-image.jpg" 
            alt="Illustration Webrands" 
            className="rounded-lg shadow-lg w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
