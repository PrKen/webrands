import { Link as ScrollLink } from "react-scroll"; // Importation de react-scroll

const Hero = () => {
  return (
    <section className="pt-16 pb-8 min-h-[70vh] flex items-center bg-gradient-to-br from-white to-webrands-gray">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Partie gauche : Texte et boutons */}
        <div className="md:w-1/2 text-left animate-fadeIn space-y-6">
          <h1 className="text-5xl font-bold text-primary">
            Créons ensemble votre présence digitale
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Webrands transforme vos idées en expériences web exceptionnelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1 text-center"
            >
              Contactez-nous
            </ScrollLink>
          </div>
        </div>

        {/* Partie droite : Texte au-dessus de l'image et image */}
        <div className="md:w-1/2 flex flex-col items-center">
          
          {/* Texte au-dessus de l'image */}
          <div className="w-full text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Votre réussite, notre métier.
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              Développez tout votre potentiel avec Webrands !
            </p>
          </div>

          {/* Image alignée en dessous */}
          <div className="w-full flex justify-center">
            <img 
              src="/assets/hero-image.jpg" 
              alt="Illustration Webrands" 
              className="rounded-lg shadow-lg max-w-[90%] md:max-w-[80%] h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
