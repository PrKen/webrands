import { Globe, ShoppingCart, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Vitrines",
    description: "Présentez votre entreprise avec élégance grâce à nos sites web sur mesure.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Développez votre activité en ligne avec une boutique e-commerce performante.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Une expérience utilisateur optimale sur tous les appareils.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-webrands-dark">
          Nos Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-accent hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-webrands-dark">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;