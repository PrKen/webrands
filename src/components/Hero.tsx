const Hero = () => {
  return (
    <section className="pt-16 pb-8 min-h-[70vh] flex flex-col items-center bg-gradient-to-br from-white to-webrands-gray">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Texte au-dessus */}
        <div className="w-full md:w-3/4 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-semibold text-webrands-dark mb-4">
            Votre réussite, notre métier.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Développez tout votre potentiel avec <span className="text-primary font-bold">Webrands</span> !
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-webrands-dark">
            Créons ensemble votre présence digitale
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Webrands transforme vos idées en expériences web exceptionnelles
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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

        {/* Image en dessous */}
        <div className="w-full md:w-3/4 flex justify-center mt-8 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          <img src="/assets/hero-image.jpg" alt="Illustration Webrands" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
