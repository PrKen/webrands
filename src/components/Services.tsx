import { Globe, ShoppingCart, Smartphone, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création de sites vitrines",
    description: "Des sites web professionnels et élégants pour présenter votre activité.",
    image: "/assets/illu1.jpg",
  },
  {
    icon: ShoppingCart,
    title: "Création de sites e-commerce",
    description: "Des boutiques en ligne performantes pour développer votre business.",
    image: "/assets/illu3.jpg",
  },
  {
    icon: Settings,
    title: "Maintenance de site web",
    description: "Un support technique continu pour garder votre site à jour et sécurisé.",
    image: "/assets/illu4.jpg",
  },
  {
    icon: Smartphone,
    title: "Gestion de comptes publicitaires",
    description: "Optimisation de vos campagnes marketing pour maximiser votre visibilité.",
    image: "/assets/illu2.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-8">
          Nos Services
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Des solutions web complètes pour répondre à tous vos besoins digitaux
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-webrands-dark">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
