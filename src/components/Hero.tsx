const Hero = () => {
  return (
    <section className="pt-24 pb-20 min-h-[90vh] flex items-center bg-gradient-to-br from-white to-webrands-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn text-webrands-dark">
            Créons ensemble votre présence digitale
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Webrands transforme vos idées en expériences web exceptionnelles
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1 animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            Démarrer votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;