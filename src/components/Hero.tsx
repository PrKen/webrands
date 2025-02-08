
const Hero = () => {
  return (
    <section className="pt-16 pb-8 min-h-[60vh] flex items-center bg-gradient-to-br from-white to-webrands-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn text-webrands-dark">
            Créons ensemble votre présence digitale
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Webrands transforme vos idées en expériences web exceptionnelles
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1 animate-fadeIn text-center"
              style={{ animationDelay: "0.4s" }}
            >
              Contactez-nous
            </a>
            <a
              href="#services"
              className="inline-block bg-accent text-webrands-dark px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1 animate-fadeIn text-center"
              style={{ animationDelay: "0.6s" }}
            >
              Nos Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
