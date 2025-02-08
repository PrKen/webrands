
const Hero = () => {
  return (
    <section className="pt-24 pb-20 min-h-[90vh] flex items-center bg-gradient-to-br from-white to-webrands-gray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn text-webrands-dark">
              Créez votre site web idéal
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-webrands-dark">
              AVEC LA MEILLEURE ÉQUIPE
            </h2>
            <p className="text-lg text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Prêt à vous lancer sur la voie du succès numérique ? Voyons ensemble comment notre équipe de développement web peut transformer votre présence en ligne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="hidden md:block animate-fadeIn" style={{ animationDelay: "0.8s" }}>
            <img
              src="/lovable-uploads/c60bb499-789a-4b06-9149-babdafd45185.png"
              alt="Web Design Illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
