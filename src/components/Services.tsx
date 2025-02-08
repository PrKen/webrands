const services = [
  {
    title: "Sites Web Professionnels",
    description: "Conception et développement de sites modernes, optimisés pour votre activité.",
    image: "/assets/illu1.jpg",
  },
  {
    title: "E-commerce et Boutiques en ligne",
    description: "Création de plateformes de vente en ligne performantes et sécurisées.",
    image: "/assets/illu3.jpg",
  },
  {
    title: "Marketing Digital et Réseaux Sociaux",
    description: "Gestion de votre présence en ligne et stratégies publicitaires sur les réseaux sociaux.",
    image: "/assets/illu4.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Nos Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 p-6"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-webrands-dark mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
