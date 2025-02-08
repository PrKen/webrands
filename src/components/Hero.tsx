const Hero = () => {
  return (
    <section className="pt-16 pb-8 min-h-[70vh] flex flex-col gap-8 items-center bg-gradient-to-br from-white to-webrands-gray">
      
      {/* Texte au-dessus de l'image */}
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Votre réussite, notre métier.
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Développez tout votre potentiel avec Webrands !
        </p>
      </div>

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

        {/* Image à droite */}
        <div className="md:w-1/2 flex justify-center">
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
